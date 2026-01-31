---
title: "Flutter Environment Setup: Dev vs Prod the Right Way"
description: "A straightforward guide to setting up dev and production environments in Flutter — with real code examples that actually work in the real world."
date: 2026-01-30
image: /img/flutter-environment-setup.png
status: published
series: "Flutter In Production"
tags:
  - flutter
  - environment
  - production
  - mobile-development
  - beginners
---

::hero
# {{ $doc.title }}
{{ $doc.description }}
::

Your Flutter app works perfectly on your device.  
Then you push to production and... 💀

The wrong API gets called.  
Test data shows up for real users.  
Debug logs expose sensitive info.

That's the moment you realize: **you need proper environment setup**.

Let's fix that — with real code from a production-ready Flutter app.

---

## 🧠 What Even Is an "Environment"?

Think of environments like different modes your app runs in:

**Development (Dev)** 🛠️
- Your testing playground
- Breaks are good here
- Loud logs everywhere
- Test Firebase project
- Fake payment systems

**Production (Prod)** 🚀
- Where real users live
- Breaks are disasters
- Silent, intentional logs
- Real Firebase project
- Real payment systems

Same app code.  
Different configurations.  
Zero mixing.

That's the entire concept.

---

## 🤔 Why Should You Care?

### Without Environment Setup:
❌ Test data pollutes production databases  
❌ Debug logs leak user passwords  
❌ Beta features go live by accident  
❌ One mistake = all users affected  
❌ Panic deploys at 2 AM  

### With Environment Setup:
✅ Dev and prod are completely isolated  
✅ Logs are environment-aware  
✅ Features can be tested safely  
✅ Mistakes happen in dev, not prod  
✅ Sleep peacefully after releases 😌  

This isn't "senior developer stuff" — it's **day-one production basics**.

---

## 🏗️ The Architecture (Super Simple)

Here's how pro Flutter apps structure environments:

```
lib/
├── main_dev.dart          ← Dev entry point
├── main_prod.dart         ← Prod entry point
├── app.dart               ← The actual app widget
├── config/
│   ├── environment.dart   ← Environment enum
│   ├── app_config.dart    ← Config model
│   └── env/
│       ├── dev_config.dart  ← Dev values
│       └── prod_config.dart ← Prod values
```

**The idea:**  
Different entry points → load different configs → same app, different behavior.

No magic. No complexity. Just clean separation.

---

## 📦 Step 1: Define Your Environment Enum

First, create a simple enum to represent environments:

```dart
/// Enum representing the different environments the app can run in
enum Environment {
  /// Development environment - for development and testing
  development,

  /// Production environment - for live users
  production,
}

/// Global variable to hold the current environment
class EnvironmentConfig {
  static Environment _environment = Environment.development;

  /// Get the current environment
  static Environment get environment => _environment;

  /// Set the current environment
  /// Should only be called at app startup
  static void setEnvironment(Environment env) {
    _environment = env;
  }

  /// Check if the app is running in development mode
  static bool get isDevelopment => _environment == Environment.development;

  /// Check if the app is running in production mode
  static bool get isProduction => _environment == Environment.production;
}
```

**Why this works:**
- Simple static class, no fancy state management
- Set once at startup
- Check anywhere in your app
- Zero performance overhead

---

## 🎯 Step 2: Create Your Config Model

Now define what configuration actually means:

```dart
import 'environment.dart';

/// Configuration model that holds all environment-specific settings
class AppConfig {
  /// The environment this configuration is for
  final Environment environment;

  /// API base URL for backend services
  final String apiBaseUrl;

  /// Firebase configuration
  final String firebaseApiKey;
  final String firebaseAppId;
  final String firebaseMessagingSenderId;
  final String firebaseProjectId;

  /// Feature flags
  final Map<String, bool> featureFlags;

  /// Debug mode flag
  final bool debugMode;

  /// Log level - controls what gets logged
  /// DEBUG = 0, INFO = 1, WARNING = 2, ERROR = 3, FATAL = 4
  final int logLevel;

  /// App encryption key for secure storage
  final String appEncryptionKey;

  /// App name (can differ between environments)
  final String appName;

  /// Application ID (bundle identifier)
  final String applicationId;

  const AppConfig({
    required this.environment,
    required this.apiBaseUrl,
    required this.firebaseApiKey,
    required this.firebaseAppId,
    required this.firebaseMessagingSenderId,
    required this.firebaseProjectId,
    required this.featureFlags,
    required this.debugMode,
    required this.logLevel,
    required this.appEncryptionKey,
    required this.appName,
    required this.applicationId,
  });

  /// Check if a feature is enabled
  bool isFeatureEnabled(String featureName) {
    return featureFlags[featureName] ?? false;
  }
}
```

**This is your single source of truth.**  
Everything environment-specific lives here.

---

## 🛠️ Step 3: Create Dev Configuration

Now fill in the actual dev values:

```dart
import '../app_config.dart';
import '../environment.dart';

/// Development environment configuration
class DevConfig {
  static AppConfig get config => const AppConfig(
        environment: Environment.development,

        // Development API endpoint
        apiBaseUrl: 'https://dummyjson.com',

        // Firebase Development Project Configuration
        firebaseApiKey: 'YOUR_DEV_FIREBASE_API_KEY',
        firebaseAppId: 'YOUR_DEV_FIREBASE_APP_ID',
        firebaseMessagingSenderId: 'YOUR_DEV_MESSAGING_SENDER_ID',
        firebaseProjectId: 'your-app-dev',

        // Feature Flags - All enabled for testing in development
        featureFlags: {
          'enable_dark_mode': true,
          'enable_notifications': true,
          'enable_analytics': true,
          'enable_crashlytics': true,
          'enable_social_login': true,
          'enable_payments': false, // Keep payments disabled in dev
          'enable_chat': true,
          'enable_video_calls': true,
          'enable_beta_features': true,
        },

        // Debug settings
        debugMode: true,

        // Log level: 0 = DEBUG (verbose logging for development)
        logLevel: 0,

        // Encryption key for secure storage (dev key)
        appEncryptionKey: 'dev_encryption_key_32_characters',

        // App name with dev indicator
        appName: 'Social App Dev',

        // Application ID with dev suffix
        applicationId: 'com.example.app.dev',
      );
}
```

**Notice:**
- Separate Firebase project for dev
- All features enabled for testing
- DEBUG-level logging (super verbose)
- `.dev` suffix on app ID
- "Dev" in app name so you always know

---

## 🚀 Step 4: Create Prod Configuration

Same structure, production values:

```dart
import '../app_config.dart';
import '../environment.dart';

/// Production environment configuration
class ProdConfig {
  static AppConfig get config => const AppConfig(
        environment: Environment.production,

        // Production API endpoint
        apiBaseUrl: 'https://api.yourapp.com',

        // Firebase Production Project Configuration
        firebaseApiKey: 'YOUR_PROD_FIREBASE_API_KEY',
        firebaseAppId: 'YOUR_PROD_FIREBASE_APP_ID',
        firebaseMessagingSenderId: 'YOUR_PROD_MESSAGING_SENDER_ID',
        firebaseProjectId: 'your-app-prod',

        // Feature Flags - Controlled rollout in production
        featureFlags: {
          'enable_dark_mode': true,
          'enable_notifications': true,
          'enable_analytics': true,
          'enable_crashlytics': true,
          'enable_social_login': true,
          'enable_payments': true,
          'enable_chat': true,
          'enable_video_calls': false, // Not yet released
          'enable_beta_features': false, // Disabled in prod
        },

        // Debug settings
        debugMode: false,

        // Log level: 1 = INFO (production logging - no debug logs)
        logLevel: 1,

        // Encryption key for secure storage (production key)
        appEncryptionKey: 'prod_encryption_key_32_chars!!',

        // App name
        appName: 'Social App',

        // Application ID (bundle identifier)
        applicationId: 'com.example.app',
      );
}
```

**Critical differences:**
- Different Firebase project (completely isolated)
- Some features disabled (controlled rollout)
- INFO-level logging (no debug noise)
- Real app name and ID
- Different encryption keys

---

## 🚪 Step 5: Create Separate Entry Points

### Development Entry Point (`main_dev.dart`)

```dart
import 'package:flutter/material.dart';

import 'app.dart';
import 'config/env/dev_config.dart';
import 'config/environment.dart';
import 'core/di/injection_container.dart';
import 'core/services/firebase_service.dart';
import 'core/utils/app_logger.dart';

/// Development entry point
///
/// Run this file for development builds:
/// flutter run -t lib/main_dev.dart
void main() async {
  // Ensure Flutter is initialized
  WidgetsFlutterBinding.ensureInitialized();

  // Set the environment to development
  EnvironmentConfig.setEnvironment(Environment.development);

  // Load development configuration
  final config = DevConfig.config;

  // Initialize the logger with dev configuration
  AppLogger.init(
    logLevel: config.logLevel,
    enableConsoleOutput: true,
    environment: config.environment,
  );

  // Log app startup
  AppLogger.info('🚀 Starting app in DEVELOPMENT mode');
  AppLogger.debug('Configuration: $config');

  // Initialize Firebase and Crashlytics
  try {
    await FirebaseService.instance.initialize(config);
    AppLogger.info('✅ Firebase services initialized');
  } catch (e, stackTrace) {
    AppLogger.error(
      'Failed to initialize Firebase services',
      error: e,
      stackTrace: stackTrace,
    );
  }

  // Initialize dependencies with the config
  await initDependencies(config);

  // Run the app
  runApp(MyApp(config: config));
}
```

### Production Entry Point (`main_prod.dart`)

```dart
import 'dart:async';
import 'package:flutter/material.dart';

import 'app.dart';
import 'config/env/prod_config.dart';
import 'config/environment.dart';
import 'core/di/injection_container.dart';
import 'core/services/firebase_service.dart';
import 'core/utils/app_logger.dart';

/// Production entry point
///
/// Run this file for production builds:
/// flutter build apk -t lib/main_prod.dart --flavor prod
void main() async {
  // Ensure Flutter is initialized
  WidgetsFlutterBinding.ensureInitialized();

  // Set the environment to production
  EnvironmentConfig.setEnvironment(Environment.production);

  // Load production configuration
  final config = ProdConfig.config;

  // Initialize the logger with production configuration
  AppLogger.init(
    logLevel: config.logLevel,
    enableConsoleOutput: false, // Disable console logs in production
    environment: config.environment,
  );

  // Log app startup (INFO level, so it will appear in production logs)
  AppLogger.info('🚀 Starting app in PRODUCTION mode');

  // Initialize Firebase and Crashlytics
  try {
    await FirebaseService.instance.initialize(config);
    AppLogger.info('✅ Firebase services initialized');
  } catch (e, stackTrace) {
    AppLogger.error(
      'Failed to initialize Firebase services',
      error: e,
      stackTrace: stackTrace,
    );
  }

  // Initialize dependencies with the config
  await initDependencies(config);

  // Handle errors globally with runZonedGuarded
  runZonedGuarded(
    () {
      runApp(MyApp(config: config));
    },
    (error, stackTrace) {
      AppLogger.fatal('Uncaught error', error: error, stackTrace: stackTrace);
      FirebaseService.instance.recordException(
        error,
        stackTrace,
        reason: 'Uncaught error in runZonedGuarded',
        fatal: true,
      );
    },
  );
}
```

**Key differences:**
- Prod disables console logging
- Prod uses `runZonedGuarded` for crash handling
- Each loads its own config
- Same app widget, different configuration

---

## 📱 Step 6: Your App Widget (Environment-Agnostic)

Your actual app doesn't care which environment it's in — it just uses the config:

```dart
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

import 'config/app_config.dart';
import 'core/di/injection_container.dart';
import 'core/router/app_router.dart';
import 'features/auth/presentation/bloc/auth_bloc.dart';
import 'features/auth/presentation/bloc/auth_event.dart';

/// Main application widget that receives configuration
class MyApp extends StatelessWidget {
  final AppConfig config;

  const MyApp({
    super.key,
    required this.config,
  });

  @override
  Widget build(BuildContext context) {
    return MultiBlocProvider(
      providers: [
        BlocProvider(
          create: (context) => sl<AuthBloc>()..add(const AuthCheckRequested()),
        ),
      ],
      child: MaterialApp.router(
        title: config.appName,
        debugShowCheckedModeBanner: config.debugMode,
        theme: ThemeData(
          colorScheme: ColorScheme.fromSeed(
            seedColor: Colors.blue,
            brightness: Brightness.light,
          ),
          useMaterial3: true,
        ),
        routerConfig: router,
      ),
    );
  }
}
```

**Notice:**
- Config is passed through constructor
- App name comes from config
- Debug banner is controlled by config
- The widget itself has zero environment logic

This is **dependency injection** — the app receives what it needs, doesn't fetch it.

---

## 🔧 How to Run It

### Development:
```bash
flutter run -t lib/main_dev.dart
```

### Production:
```bash
flutter run -t lib/main_prod.dart
```

### Build for Release:
```bash
# Development APK
flutter build apk -t lib/main_dev.dart

# Production APK
flutter build apk -t lib/main_prod.dart

# Production App Bundle (for Google Play)
flutter build appbundle -t lib/main_prod.dart
```

**That's it.**  
No environment variables.  
No complicated build scripts.  
Just different entry points.

---

## 🎨 Bonus: Environment-Aware Logging

Here's how the logger uses environment config:

```dart
import 'dart:developer' as developer;
import '../../config/environment.dart';

/// Application-wide logger with environment-aware filtering
///
/// Log Levels:
/// - 0: DEBUG (Development only)
/// - 1: INFO
/// - 2: WARNING
/// - 3: ERROR
/// - 4: FATAL
class AppLogger {
  static int _logLevel = 0;
  static bool _enableConsoleOutput = true;
  static Environment _environment = Environment.development;

  /// Initialize the logger with configuration
  static void init({
    required int logLevel,
    required bool enableConsoleOutput,
    required Environment environment,
  }) {
    _logLevel = logLevel;
    _enableConsoleOutput = enableConsoleOutput;
    _environment = environment;
  }

  /// Log a debug message (only in development)
  static void debug(String message, {Map<String, dynamic>? context}) {
    if (_logLevel <= 0) {
      _log('DEBUG', message, level: 500, context: context);
    }
  }

  /// Log an info message
  static void info(String message, {Map<String, dynamic>? context}) {
    if (_logLevel <= 1) {
      _log('INFO', message, level: 800, context: context);
    }
  }

  /// Log an error message
  static void error(
    String message, {
    Object? error,
    StackTrace? stackTrace,
  }) {
    if (_logLevel <= 3) {
      _log(
        'ERROR',
        message,
        level: 1000,
        error: error,
        stackTrace: stackTrace,
      );
    }
  }

  static void _log(
    String level,
    String message, {
    required int level,
    Map<String, dynamic>? context,
    Object? error,
    StackTrace? stackTrace,
  }) {
    if (_enableConsoleOutput) {
      developer.log(
        message,
        name: 'SocialApp',
        level: level,
        error: error,
        stackTrace: stackTrace,
      );
    }
  }
}
```

**In action:**

```dart
// This only logs in dev (logLevel = 0)
AppLogger.debug('User tapped login button');

// This logs in both dev and prod (logLevel <= 1)
AppLogger.info('User logged in successfully');

// This always logs (logLevel <= 3)
AppLogger.error('Failed to fetch data', error: exception);
```

---

## 🎯 Using Feature Flags

Your config includes feature flags — here's how to use them:

```dart
// In your UI code
if (config.isFeatureEnabled('enable_dark_mode')) {
  // Show dark mode toggle
}

if (config.isFeatureEnabled('enable_beta_features')) {
  // Show beta features section
}

// Checking directly
if (config.featureFlags['enable_payments'] == true) {
  // Initialize payment SDK
}
```

**Why this rocks:**
- Turn features on/off without code changes
- Test features in dev before enabling in prod
- Kill switches for problematic features
- Gradual rollouts

---

## 🚨 Common Mistakes to Avoid

### ❌ Don't Do This:
```dart
// Hardcoding environment checks everywhere
if (kDebugMode) {
  apiUrl = 'https://dev.api.com';
} else {
  apiUrl = 'https://prod.api.com';
}
```

### ✅ Do This Instead:
```dart
// Configuration decides, not runtime mode
final apiUrl = config.apiBaseUrl;
```

**Why:** `kDebugMode` is about build mode, not environment. You can build prod in debug mode for testing.

---

### ❌ Don't Do This:
```dart
// Using the same Firebase project for dev and prod
firebaseProjectId: 'my-app-12345',
```

### ✅ Do This Instead:
```dart
// Dev config
firebaseProjectId: 'my-app-dev',

// Prod config
firebaseProjectId: 'my-app-prod',
```

**Why:** Test crashes should never pollute production Crashlytics.

---

### ❌ Don't Do This:
```dart
// Checking environment everywhere
if (EnvironmentConfig.isDevelopment) {
  showDebugInfo();
}
```

### ✅ Do This Instead:
```dart
// Use feature flags
if (config.isFeatureEnabled('enable_debug_panel')) {
  showDebugInfo();
}
```

**Why:** Feature flags are more flexible than environment checks.

---

## 🎓 Pro Tips

### 1. **Use VS Code Launch Configurations**

Create `.vscode/launch.json`:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Development",
      "request": "launch",
      "type": "dart",
      "program": "lib/main_dev.dart"
    },
    {
      "name": "Production",
      "request": "launch",
      "type": "dart",
      "program": "lib/main_prod.dart"
    }
  ]
}
```

Now you can switch environments from the debug dropdown.

---

### 2. **Add Environment Indicator in Dev**

```dart
Widget build(BuildContext context) {
  return Stack(
    children: [
      MaterialApp.router(...),
      if (config.debugMode)
        Positioned(
          top: 0,
          left: 0,
          child: SafeArea(
            child: Container(
              color: Colors.red,
              padding: EdgeInsets.all(4),
              child: Text(
                'DEV',
                style: TextStyle(color: Colors.white, fontSize: 12),
              ),
            ),
          ),
        ),
    ],
  );
}
```

Now you'll always know when you're in dev mode.

---

### 3. **Keep Secrets Safe**

Never commit real production secrets to Git. Instead:

```dart
// prod_config.dart (committed to git)
firebaseApiKey: const String.fromEnvironment('FIREBASE_API_KEY'),

// Run with secrets
flutter build apk -t lib/main_prod.dart --dart-define=FIREBASE_API_KEY=real_key
```

Or use a secrets management tool.

---

## ✅ Checklist Before You Ship

- [ ] Separate Firebase projects for dev and prod
- [ ] Different API endpoints configured
- [ ] Production logs are INFO level or higher
- [ ] Debug mode disabled in prod
- [ ] Feature flags configured correctly
- [ ] Encryption keys are different
- [ ] App names are different (dev has "Dev" suffix)
- [ ] Bundle IDs are different
- [ ] Tested crashes in both environments
- [ ] Verified Crashlytics reports go to correct project

---

## 🎯 Final Thoughts

Environment setup isn't complicated — it's just **organized**.

You're not building two apps.  
You're building **one app that adapts to its context**.

The pattern is simple:
1. Define environments
2. Create config models
3. Fill in values per environment
4. Create entry points
5. Pass config through your app

Do this once, benefit forever.

Your future self (and your users) will thank you when:
- You can test freely without fear
- Prod releases are calm
- Bugs stay contained
- Features roll out smoothly

This isn't "senior dev" stuff — it's **production basics**.

And now you've got it. 💪

---

**Next steps:**
- Set this up in your app today
- Test it with a simple feature flag
- Add Crashlytics and watch them stay separated
- Sleep better after your next deploy 😴

You're not overengineering.  
You're building apps that **deserve to be in production**. 💙

