export default defineEventHandler(async (event) => {
  // You can fetch this data from a database or external API
  // For now, returning static data based on the projects documentation
  
  const projects = [
    {
      id: 1,
      title: 'Niyog',
      description: 'AI-powered job matching platform that provides personalized job recommendations based on user skills and preferences. Features smart filtering, real-time notifications, and comprehensive job search capabilities with over 100,000+ downloads.',
      technologies: ['Android', 'Kotlin', 'AI Integration', 'Clean Architecture', 'Firebase'],
      link: 'https://www.patrons.ltd/',
      github: null,
      logo: null,
      featured: true
    },
    {
      id: 2,
      title: 'Blaze',
      description: 'Advanced identity verification application featuring facial recognition and document scanning for secure user authentication. Integrated with Vertex AI for accurate and scalable verification workflows.',
      technologies: ['Flutter', 'Dart', 'Vertex AI', 'Facial Recognition', 'Document Scanning'],
      link: 'https://www.patrons.ltd/',
      github: null,
      logo: null,
      featured: true
    },
    {
      id: 3,
      title: 'E-commerce Mobile App',
      description: 'Full-featured mobile e-commerce application with payment integration, inventory management, and real-time order tracking. Built with modern Android architecture components.',
      technologies: ['Android', 'Kotlin', 'MVVM', 'Room Database', 'Payment Integration'],
      link: null,
      github: null,
      logo: null,
      featured: false
    },
    {
      id: 4,
      title: 'Task Management App',
      description: 'Cross-platform productivity application built with Flutter, featuring team collaboration, project tracking, and real-time synchronization across devices.',
      technologies: ['Flutter', 'Firebase', 'State Management', 'Real-time Sync', 'Cross-platform'],
      link: null,
      github: null,
      logo: null,
      featured: false
    },
    {
      id: 5,
      title: 'Weather Dashboard',
      description: 'Beautiful weather application with location-based forecasts, interactive maps, and weather alerts. Showcases modern UI/UX design principles.',
      technologies: ['Android', 'Kotlin', 'API Integration', 'Material Design', 'Location Services'],
      link: null,
      github: null,
      logo: null,
      featured: false
    },
    {
      id: 6,
      title: 'Fitness Tracker',
      description: 'Comprehensive fitness tracking application with workout planning, progress monitoring, and health analytics. Features custom charts and data visualization.',
      technologies: ['Flutter', 'Health APIs', 'Data Visualization', 'Local Storage', 'Charts'],
      link: null,
      github: null,
      logo: null,
      featured: false
    }
  ]

  return projects
})