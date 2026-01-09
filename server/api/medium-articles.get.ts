export default defineEventHandler(async (event) => {
  try {
    // Replace with your Medium username
    const mediumUsername = '@shantudas' // Update this with your actual Medium username
    const rssUrl = `https://medium.com/feed/${mediumUsername}`
    
    // For development, you might want to use a CORS proxy or implement server-side fetching
    // Here's a mock response for now. In production, you'd fetch from Medium's RSS feed
    
    // Mock articles data - replace with actual Medium RSS parsing
    const articles = [
      {
        id: '1',
        title: 'Building Scalable Android Apps with Clean Architecture',
        description: 'Learn how to implement Clean Architecture in Android applications for better maintainability and testability. This comprehensive guide covers the principles and practical implementation.',
        link: `https://medium.com/${mediumUsername}/building-scalable-android-apps-1`,
        pubDate: '2024-01-15T10:00:00Z',
        categories: ['Android', 'Clean Architecture', 'Mobile Development'],
        thumbnail: null,
        readTime: '8 min read'
      },
      {
        id: '2',
        title: 'Flutter vs React Native: A Developer\'s Perspective',
        description: 'An honest comparison between Flutter and React Native based on real-world project experience. Covering performance, development speed, and ecosystem.',
        link: `https://medium.com/${mediumUsername}/flutter-vs-react-native-2`,
        pubDate: '2024-01-10T14:30:00Z',
        categories: ['Flutter', 'React Native', 'Cross-platform'],
        thumbnail: null,
        readTime: '12 min read'
      },
      {
        id: '3',
        title: 'Kotlin Multiplatform: The Future of Mobile Development',
        description: 'Exploring Kotlin Multiplatform Mobile (KMM) and its potential to revolutionize cross-platform development. Hands-on experience and best practices.',
        link: `https://medium.com/${mediumUsername}/kotlin-multiplatform-future-3`,
        pubDate: '2024-01-05T09:15:00Z',
        categories: ['Kotlin', 'KMP', 'Cross-platform', 'Mobile'],
        thumbnail: null,
        readTime: '10 min read'
      },
      {
        id: '4',
        title: 'Implementing AI Features in Mobile Apps',
        description: 'A practical guide to integrating AI and machine learning features in mobile applications. Real examples from the Niyog and Blaze projects.',
        link: `https://medium.com/${mediumUsername}/ai-features-mobile-apps-4`,
        pubDate: '2023-12-20T16:45:00Z',
        categories: ['AI', 'Machine Learning', 'Mobile Development', 'Integration'],
        thumbnail: null,
        readTime: '15 min read'
      },
      {
        id: '5',
        title: 'Performance Optimization Techniques for Android Apps',
        description: 'Advanced techniques for optimizing Android app performance. Memory management, background processing, and UI optimization strategies.',
        link: `https://medium.com/${mediumUsername}/android-performance-optimization-5`,
        pubDate: '2023-12-15T11:20:00Z',
        categories: ['Android', 'Performance', 'Optimization'],
        thumbnail: null,
        readTime: '11 min read'
      },
      {
        id: '6',
        title: 'Modern State Management in Flutter',
        description: 'Comparing different state management solutions in Flutter: Provider, Bloc, Riverpod, and GetX. When to use what and why.',
        link: `https://medium.com/${mediumUsername}/flutter-state-management-6`,
        pubDate: '2023-12-01T13:00:00Z',
        categories: ['Flutter', 'State Management', 'Architecture'],
        thumbnail: null,
        readTime: '9 min read'
      }
    ]

    return articles
    
  } catch (error) {
    // Return empty array if there's an error fetching articles
    console.error('Error fetching Medium articles:', error)
    return []
  }
})