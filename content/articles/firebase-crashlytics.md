---
title: "Firebase Crashlytics for Flutter: Setup, Mindset, and Real-World Usage"
description: "A complete beginner-friendly guide to Firebase Crashlytics in Flutter — what it is, how to set it up properly, and how professionals use it in real apps."
date: 2026-01-31
image: /img/flutter-firebase-crashlytics.png
status: published
series: "Flutter In Production"
tags:
  - flutter
  - firebase
  - crashlytics
  - production
  - debugging
---

::hero

# {{ $doc.title }}

{{ $doc.description }}
::

<!-- ![Firebase Crashlytics Flutter](/img/flutter-firebase-crashlytics.png) -->

Your Flutter app works perfectly on your phone.  
Then users install it… and suddenly it crashes 😬

No screenshots.  
No logs.  
Just bad reviews.

That's where **Firebase Crashlytics** saves you.

---

## 🧠 Overview

Firebase Crashlytics is a crash reporting tool that tells you:

- When your app crashes
- Why it crashed
- Which screen the user was on
- How many users are affected
- Whether the issue is new or recurring

Instead of guessing, you **see real production problems** in real time.

This guide explains Crashlytics the way **real Flutter teams use it**, not just how to "enable a package".

---

## 🚦 Why Crashlytics Matters (Especially for Beginners)

When you're new to Flutter, crashes feel obvious:

- Red error screens
- Debug logs everywhere
- Instant feedback

But in production:

- Errors are silent
- Users don't report bugs
- Issues happen on devices you don't own
- Timing and environment matter

Crashlytics becomes your **eyes inside production**.

If you plan to publish apps seriously — this is not optional.

---

## 🌍 Dev vs Prod: The Most Important Concept

Professional Flutter apps **never use one Firebase project**.

They use:

- One Firebase project for **development**
- One Firebase project for **production**

Why?

- Test crashes should never pollute real user data
- Production crashes need clean, reliable signals
- Experiments must stay isolated
- Mistakes must be contained

Crashlytics works best when it clearly knows:

- Which environment it's running in
- Which build caused the crash
- Whether users are real or test users

---

## 🧩 How Crashlytics Fits Into Your App

Conceptually, Crashlytics works like this:

1. App starts
2. Firebase initializes
3. Crashlytics attaches error listeners
4. Environment context is set
5. App runs normally
6. If something breaks → Crashlytics reports it

The key idea:

> Crashlytics runs quietly in the background until something goes wrong.

You don't "use" it daily — it protects you silently.

---

## 🛠 Firebase Setup Guidelines (Beginner-Friendly)

### Step 1: Create Two Firebase Projects

You need **two projects**, not one.

- Development project  
  Used for testing crashes, logs, experiments

- Production project  
  Used for real users and real monitoring

This separation is the foundation of safe apps.

---

### Step 2: Register Your Android Apps

Each Firebase project needs its own Android app entry.

That means:

- Dev app uses a **dev package name**
- Prod app uses the **real package name**

Each app downloads its own Firebase configuration file.

Never mix these files.

---

### Step 3: Enable Crashlytics in Firebase Console

Crashlytics is not active by default.

For each Firebase project:

- Open the Crashlytics section
- Enable it
- Complete the onboarding steps

Do this for both dev and prod projects.

---

### Step 4: Store Firebase Values in Environment Configs

Professional Flutter apps never hardcode Firebase values.

Instead:

- Development values live in dev configuration
- Production values live in prod configuration
- App selects the correct setup at launch

This keeps environments clean, predictable, and safe.

---

### Step 5: Verify Setup Before Shipping

Before publishing:

- Trigger a test crash in development
- Confirm it appears in Firebase Console
- Check environment labels
- Confirm user context appears correctly

If you don't test Crashlytics, you **don't actually have monitoring**.

---

## 📋 Environment Configuration Structure

Here's how you structure environment-specific settings:

```dart
// lib/config/environment.dart
enum Environment {
  development,
  production,
}

class EnvironmentConfig {
  static Environment _environment = Environment.development;

  static Environment get environment => _environment;

  static void setEnvironment(Environment env) {
    _environment = env;
  }

  static bool get isDevelopment => _environment == Environment.development;
  static bool get isProduction => _environment == Environment.production;
}
```

---

## 🔧 App Configuration Model

Create a configuration model that holds all environment-specific values:

```dart
// lib/config/app_config.dart
class AppConfig {
  final Environment environment;
  final String apiBaseUrl;

  // Firebase configuration
  final String firebaseApiKey;
  final String firebaseAppId;
  final String firebaseMessagingSenderId;
  final String firebaseProjectId;

  // Feature flags
  final Map<String, bool> featureFlags;

  // Debug settings
  final bool debugMode;
  final int logLevel; // 0=DEBUG, 1=INFO, 2=WARNING, 3=ERROR

  final String appName;
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
    required this.appName,
    required this.applicationId,
  });

  bool isFeatureEnabled(String featureName) {
    return featureFlags[featureName] ?? false;
  }
}
```

---

## 🛠 Development Configuration

Your development config should have all debugging features enabled:

```dart
// lib/config/env/dev_config.dart
class DevConfig {
  static AppConfig get config => const AppConfig(
    environment: Environment.development,

    // Development API endpoint
    apiBaseUrl: 'https://dev-api.yourapp.com',

    // Firebase Development Project
    firebaseApiKey: 'YOUR_DEV_FIREBASE_API_KEY',
    firebaseAppId: 'YOUR_DEV_FIREBASE_APP_ID',
    firebaseMessagingSenderId: 'YOUR_DEV_MESSAGING_SENDER_ID',
    firebaseProjectId: 'your-app-dev',

    // All features enabled for testing
    featureFlags: {
      'enable_dark_mode': true,
      'enable_notifications': true,
      'enable_analytics': true,
      'enable_crashlytics': true,
      'enable_beta_features': true,
    },

    debugMode: true,
    logLevel: 0, // DEBUG - verbose logging

    appName: 'Social App Dev',
    applicationId: 'com.yourapp.social.dev',
  );
}
```

---

## 🚀 Production Configuration

Production config should be locked down and production-ready:

```dart
// lib/config/env/prod_config.dart
class ProdConfig {
  static AppConfig get config => const AppConfig(
    environment: Environment.production,

    // Production API endpoint
    apiBaseUrl: 'https://api.yourapp.com',

    // Firebase Production Project (different from dev!)
    firebaseApiKey: 'YOUR_PROD_FIREBASE_API_KEY',
    firebaseAppId: 'YOUR_PROD_FIREBASE_APP_ID',
    firebaseMessagingSenderId: 'YOUR_PROD_MESSAGING_SENDER_ID',
    firebaseProjectId: 'your-app-prod',

    // Controlled feature rollout
    featureFlags: {
      'enable_dark_mode': true,
      'enable_notifications': true,
      'enable_analytics': true,
      'enable_crashlytics': true,
      'enable_beta_features': false, // Beta features disabled
    },

    debugMode: false,
    logLevel: 1, // INFO - production logging only

    appName: 'Social App',
    applicationId: 'com.yourapp.social',
  );
}
```

---

## 🔥 Firebase Service Implementation

Create a dedicated service to manage Firebase and Crashlytics:

```dart
// lib/core/services/firebase_service.dart
import 'package:firebase_core/firebase_core.dart';
import 'package:firebase_crashlytics/firebase_crashlytics.dart';
import 'package:flutter/foundation.dart';

class FirebaseService {
  static FirebaseService? _instance;
  static FirebaseService get instance => _instance ??= FirebaseService._();

  FirebaseService._();

  bool _isInitialized = false;

  /// Initialize Firebase and Crashlytics
  Future<void> initialize(AppConfig config) async {
    if (_isInitialized) return;

    // Initialize Firebase with manual configuration
    await Firebase.initializeApp(
      options: FirebaseOptions(
        apiKey: config.firebaseApiKey,
        appId: config.firebaseAppId,
        messagingSenderId: config.firebaseMessagingSenderId,
        projectId: config.firebaseProjectId,
      ),
    );

    // Initialize Crashlytics
    await _initializeCrashlytics(config);

    _isInitialized = true;
  }

  Future<void> _initializeCrashlytics(AppConfig config) async {
    final crashlytics = FirebaseCrashlytics.instance;

    // Check if Crashlytics is enabled via feature flag
    if (!config.isFeatureEnabled('enable_crashlytics')) {
      await crashlytics.setCrashlyticsCollectionEnabled(false);
      return;
    }

    // Enable Crashlytics
    await crashlytics.setCrashlyticsCollectionEnabled(true);

    // Set environment context
    await crashlytics.setCustomKey('environment', config.environment.name);
    await crashlytics.setCustomKey('app_name', config.appName);
    await crashlytics.setCustomKey('debug_mode', config.debugMode);

    // Capture all Flutter errors
    FlutterError.onError = (errorDetails) {
      FirebaseCrashlytics.instance.recordFlutterFatalError(errorDetails);
    };

    // Capture all async errors
    PlatformDispatcher.instance.onError = (error, stack) {
      FirebaseCrashlytics.instance.recordError(error, stack, fatal: true);
      return true;
    };
  }

  /// Set user identifier
  Future<void> setUserIdentifier(String userId) async {
    if (!_isInitialized) return;
    await FirebaseCrashlytics.instance.setUserIdentifier(userId);
  }

  /// Clear user identifier (logout)
  Future<void> clearUserIdentifier() async {
    if (!_isInitialized) return;
    await FirebaseCrashlytics.instance.setUserIdentifier('');
  }

  /// Set custom key-value for context
  Future<void> setCustomKey(String key, dynamic value) async {
    if (!_isInitialized) return;
    await FirebaseCrashlytics.instance.setCustomKey(key, value);
  }

  /// Log breadcrumb message
  Future<void> log(String message) async {
    if (!_isInitialized) return;
    await FirebaseCrashlytics.instance.log(message);
  }

  /// Record non-fatal exception
  Future<void> recordException(
    dynamic exception,
    StackTrace? stackTrace, {
    String? reason,
    bool fatal = false,
  }) async {
    if (!_isInitialized) return;
    await FirebaseCrashlytics.instance.recordError(
      exception,
      stackTrace,
      reason: reason,
      fatal: fatal,
    );
  }
}
```

---

## 🚪 Entry Points: Dev and Prod

Create separate entry points for each environment:

### Development Entry Point

```dart
// lib/main_dev.dart
import 'package:flutter/material.dart';
import 'app.dart';
import 'config/env/dev_config.dart';
import 'config/environment.dart';
import 'core/services/firebase_service.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();

  // Set environment
  EnvironmentConfig.setEnvironment(Environment.development);

  // Load dev config
  final config = DevConfig.config;

  // Initialize Firebase and Crashlytics
  await FirebaseService.instance.initialize(config);

  // Run app
  runApp(MyApp(config: config));
}
```

### Production Entry Point

```dart
// lib/main_prod.dart
import 'package:flutter/material.dart';
import 'app.dart';
import 'config/env/prod_config.dart';
import 'config/environment.dart';
import 'core/services/firebase_service.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();

  // Set environment
  EnvironmentConfig.setEnvironment(Environment.production);

  // Load production config
  final config = ProdConfig.config;

  // Initialize Firebase and Crashlytics
  await FirebaseService.instance.initialize(config);

  // Run app
  runApp(MyApp(config: config));
}
```

**Run commands:**

```bash
# Development
flutter run -t lib/main_dev.dart

# Production
flutter run -t lib/main_prod.dart
flutter build apk -t lib/main_prod.dart
```

---

## 📊 What Crashlytics Tracks Automatically

Without writing extra logic, Crashlytics records:

- App crashes
- Non-fatal errors
- App version and build number
- Device model and OS
- Screen state
- Session data

This information turns random crashes into clear patterns.

---

## 👤 User Context (Without Privacy Issues)

Crashlytics supports **anonymous user identification**.

This helps answer:

- Is this affecting logged-in users?
- Only premium users?
- Only new users?
- Only users in an experiment?

You track **context**, not personal data.

Good monitoring respects privacy.

### Setting User Context

```dart
// lib/core/utils/crashlytics_helper.dart
class CrashlyticsHelper {
  /// Set user context after login
  static Future<void> setUser(
    String userId, {
    String? email,
    String? username,
  }) async {
    await FirebaseService.instance.setUserIdentifier(userId);

    if (email != null) {
      await FirebaseService.instance.setCustomKey('user_email', email);
    }
    if (username != null) {
      await FirebaseService.instance.setCustomKey('username', username);
    }
  }

  /// Clear user context on logout
  static Future<void> clearUser() async {
    await FirebaseService.instance.clearUserIdentifier();
    await FirebaseService.instance.setCustomKey('user_email', '');
    await FirebaseService.instance.setCustomKey('username', '');
  }

  /// Set current screen name
  static Future<void> setCurrentScreen(String screenName) async {
    await FirebaseService.instance.setCustomKey('current_screen', screenName);
    await FirebaseService.instance.log('Screen: $screenName');
  }
}
```

---

## 🔍 Recording Handled Exceptions

Not all errors crash your app. Some are caught and handled. But you still want to know about them:

```dart
// Record a handled exception
static Future<void> recordHandledException(
  dynamic exception,
  StackTrace? stackTrace, {
  String? context,
}) async {
  await FirebaseService.instance.recordException(
    exception,
    stackTrace,
    reason: context,
    fatal: false, // Non-fatal
  );
}

// Usage example
try {
  final data = await apiService.fetchData();
} catch (e, stackTrace) {
  await CrashlyticsHelper.recordHandledException(
    e,
    stackTrace,
    context: 'Failed to fetch user data',
  );
  // Show error to user
}
```

---

## 🌐 Recording Network Errors

Network failures are common. Track them to identify patterns:

```dart
static Future<void> recordNetworkError(
  String url,
  int? statusCode,
  String errorMessage, {
  String? method,
}) async {
  await FirebaseService.instance.setCustomKey('last_network_error_url', url);
  await FirebaseService.instance.setCustomKey('last_network_error_code', statusCode ?? -1);

  final error = Exception('NetworkError: $method $url - $statusCode');

  await FirebaseService.instance.recordException(
    error,
    StackTrace.current,
    reason: 'Network Error',
    fatal: false,
  );
}

// Usage
await CrashlyticsHelper.recordNetworkError(
  'https://api.example.com/users',
  500,
  'Internal Server Error',
  method: 'GET',
);
```

---

## 🍞 Breadcrumbs: Understanding User Journey

Breadcrumbs are logged events that show what the user did before a crash:

```dart
// Logging breadcrumbs
await FirebaseService.instance.log('User opened settings');
await FirebaseService.instance.log('User changed theme to dark');
await FirebaseService.instance.log('User saved preferences');

// When a crash happens, you'll see all these logs leading up to it
```

---

## 📝 Integrated Logging with Crashlytics

Create an app-wide logger that automatically sends important logs to Crashlytics:

```dart
// lib/core/utils/app_logger.dart
class AppLogger {
  static int _logLevel = 0;

  static void init({required int logLevel}) {
    _logLevel = logLevel;
  }

  /// Info-level log
  static void info(String message) {
    if (_logLevel <= 1) {
      print('INFO: $message');
      FirebaseService.instance.log('INFO: $message');
    }
  }

  /// Warning-level log
  static void warning(String message) {
    if (_logLevel <= 2) {
      print('WARNING: $message');
      FirebaseService.instance.log('WARNING: $message');
    }
  }

  /// Error-level log
  static void error(
    String message, {
    Object? error,
    StackTrace? stackTrace,
  }) {
    if (_logLevel <= 3) {
      print('ERROR: $message');
      if (error != null) {
        FirebaseService.instance.recordException(
          error,
          stackTrace,
          reason: message,
          fatal: false,
        );
      }
    }
  }
}

// Usage
AppLogger.info('User logged in successfully');
AppLogger.warning('API response took longer than expected');
AppLogger.error('Failed to load profile', error: e, stackTrace: stackTrace);
```

---

## 🧪 Testing Crashlytics (Yes, On Purpose)

Good teams test crashes **before users do**.

In development:

- You simulate crashes
- You log test errors
- You verify reports appear correctly

This builds confidence before production releases.

Crashing your own app in dev is a feature — not a failure.

### Crashlytics Test Screen (Dev Only)

```dart
// lib/features/debug/crashlytics_test_screen.dart
class CrashlyticsTestScreen extends StatelessWidget {
  const CrashlyticsTestScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Crashlytics Test'),
      ),
      body: ListView(
        padding: const EdgeInsets.all(16),
        children: [
          // Test non-fatal exception
          ElevatedButton(
            onPressed: () async {
              try {
                throw Exception('Test non-fatal exception');
              } catch (e, stackTrace) {
                await FirebaseService.instance.recordException(
                  e,
                  stackTrace,
                  reason: 'Testing non-fatal exception',
                  fatal: false,
                );
              }
            },
            child: const Text('Send Test Exception'),
          ),

          // Test custom keys
          ElevatedButton(
            onPressed: () async {
              await FirebaseService.instance.setCustomKey('test_key', 'test_value');
              await FirebaseService.instance.setCustomKey('test_number', 42);
            },
            child: const Text('Set Custom Keys'),
          ),

          // Test breadcrumbs
          ElevatedButton(
            onPressed: () async {
              await FirebaseService.instance.log('User navigated to test screen');
              await FirebaseService.instance.log('User clicked test button');
              await FirebaseService.instance.log('Breadcrumb trail created');
            },
            child: const Text('Log Breadcrumbs'),
          ),

          // Test user context
          ElevatedButton(
            onPressed: () async {
              await CrashlyticsHelper.setUser(
                'test_user_123',
                email: 'test@example.com',
                username: 'testuser',
              );
            },
            child: const Text('Set User Identifier'),
          ),
        ],
      ),
    );
  }
}
```

**Important:** Remove or hide this screen before production release!

---

## 🧠 Common Beginner Mistakes

Avoid these early:

- Using one Firebase project for everything
- Ignoring non-fatal errors
- Shipping without testing crash reporting
- Logging sensitive data
- Treating crashes as rare events

Crashes are normal.
**Untracked crashes are dangerous.**

---

## 🧭 Crashlytics + Logging = Stability

Crashlytics becomes powerful when combined with:

- Structured logging
- Meaningful events
- Intentional breadcrumbs

Logs explain _what happened before_ a crash.
Crashlytics explains _why it matters_.

Together, they make debugging calm instead of stressful.

---

## 🚀 Production Mindset Checklist

Before shipping your Flutter app, ask yourself:

- ✅ Can I see crashes without user reports?
- ✅ Can I separate dev and prod issues?
- ✅ Can I identify affected users or features?
- ✅ Can I trust crash data after release?
- ✅ Have I tested Crashlytics in dev?
- ✅ Are sensitive data excluded from logs?
- ✅ Is the environment context clear?
- ✅ Do I have breadcrumbs for user journeys?

If yes — you're building like a professional.

---

## 🎯 Final Thoughts

Firebase Crashlytics is not about fear.  
It's about **confidence**.

Confidence to:

- Release faster
- Fix issues earlier
- Protect real users
- Sleep after deployment 😌

Every serious Flutter app uses crash reporting.
The best ones set it up **early**.

You're not overengineering.
You're building the right foundation. 💙

---

## 📚 Quick Reference

### Key Commands

```bash
# Run in development
flutter run -t lib/main_dev.dart

# Run in production
flutter run -t lib/main_prod.dart

# Build production APK
flutter build apk -t lib/main_prod.dart

# Build production App Bundle
flutter build appbundle -t lib/main_prod.dart
```

### Essential Crashlytics Operations

```dart
// Set user context
await CrashlyticsHelper.setUser('user_123');

// Set current screen
await CrashlyticsHelper.setCurrentScreen('home_screen');

// Log breadcrumb
await FirebaseService.instance.log('User tapped submit button');

// Record handled error
await CrashlyticsHelper.recordHandledException(e, stackTrace);

// Record network error
await CrashlyticsHelper.recordNetworkError(url, statusCode, message);

// Clear user on logout
await CrashlyticsHelper.clearUser();
```

---

**Happy coding, and may your production crashes be few and easily debugged!** 🚀
