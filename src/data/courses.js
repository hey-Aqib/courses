

export const courses = [
  {
    id: "web-development",
    title: "Full-Stack Web Development Bootcamp",
    category: "Programming",
    image: "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    duration: "12 weeks",
    level: "Beginner to Advanced",
    price: 999,
    rating: 4.8,
    students: 5243,
    shortDescription: "Master front-end and back-end development with modern frameworks and technologies.",
    description: "This comprehensive bootcamp will take you from a complete beginner to a confident full-stack developer. Learn HTML, CSS, JavaScript, React, Node.js, and more. Build real-world projects and develop a professional portfolio that will make you stand out to employers.",
    syllabus: [
      {
        title: "Front-End Foundations",
        items: ["HTML5 Semantic Markup", "CSS3 & Responsive Design", "JavaScript Fundamentals", "DOM Manipulation"]
      },
      {
        title: "Front-End Frameworks",
        items: ["React.js", "State Management", "Routing & Navigation", "API Integration"]
      },
      {
        title: "Back-End Development",
        items: ["Node.js Fundamentals", "Express.js", "RESTful API Design", "Authentication & Security"]
      },
      {
        title: "Database Integration",
        items: ["SQL vs. NoSQL", "MongoDB", "Database Design", "Data Modeling"]
      },
      {
        title: "Deployment & DevOps",
        items: ["CI/CD Pipelines", "Cloud Hosting", "Performance Optimization", "Security Best Practices"]
      }
    ],
    instructor: {
      name: "Alex Johnson",
      title: "Senior Full-Stack Developer",
      bio: "Alex has over 10 years of experience in web development and has worked with companies like Google and Meta. He specializes in modern JavaScript frameworks and loves teaching beginners.",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    features: [
      "24/7 access to course materials",
      "1-on-1 mentoring sessions",
      "Real-world project portfolio",
      "Job placement assistance",
      "Industry-recognized certification"
    ]
  },
  {
    id: "data-science",
    title: "Data Science & Machine Learning",
    category: "Data",
    image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    duration: "16 weeks",
    level: "Intermediate",
    price: 1299,
    rating: 4.9,
    students: 3876,
    shortDescription: "Learn to analyze data, build models, and make data-driven decisions.",
    description: "Dive into the world of data science and machine learning with this comprehensive course. From data cleaning and visualization to building predictive models and deep learning neural networks, you'll gain the skills needed to excel in this high-demand field.",
    syllabus: [
      {
        title: "Data Analysis Fundamentals",
        items: ["Python for Data Science", "Data Cleaning & Preprocessing", "Exploratory Data Analysis", "Statistical Analysis"]
      },
      {
        title: "Data Visualization",
        items: ["Matplotlib & Seaborn", "Interactive Visualizations", "Dashboard Creation", "Storytelling with Data"]
      },
      {
        title: "Machine Learning",
        items: ["Supervised Learning", "Unsupervised Learning", "Model Evaluation", "Feature Engineering"]
      },
      {
        title: "Deep Learning",
        items: ["Neural Networks", "TensorFlow & Keras", "Computer Vision", "Natural Language Processing"]
      },
      {
        title: "Practical Applications",
        items: ["Recommendation Systems", "Time Series Analysis", "A/B Testing", "Big Data Technologies"]
      }
    ],
    instructor: {
      name: "Dr. Sarah Chen",
      title: "AI Research Scientist",
      bio: "Dr. Chen holds a Ph.D. in Computer Science and has published numerous papers on machine learning. She previously worked at Amazon's AI division and brings practical industry experience to her teaching.",
      image: "https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    features: [
      "Hands-on projects with real datasets",
      "Cloud computing credits included",
      "Weekly live Q&A sessions",
      "Capstone project with industry partner",
      "Career coaching and resume review"
    ]
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design Masterclass",
    category: "Design",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    duration: "10 weeks",
    level: "Beginner to Intermediate",
    price: 899,
    rating: 4.7,
    students: 4521,
    shortDescription: "Create stunning user interfaces and seamless user experiences.",
    description: "Transform your design skills with our comprehensive UI/UX Design Masterclass. Learn to create beautiful interfaces, conduct user research, build prototypes, and develop a design thinking mindset that will make you an invaluable asset to any product team.",
    syllabus: [
      {
        title: "Design Fundamentals",
        items: ["Color Theory", "Typography", "Layout & Composition", "Visual Hierarchy"]
      },
      {
        title: "User Experience Design",
        items: ["User Research Methods", "Personas & User Journeys", "Information Architecture", "Usability Testing"]
      },
      {
        title: "UI Design",
        items: ["Design Systems", "Responsive Design", "Micro-interactions", "Accessibility"]
      },
      {
        title: "Prototyping",
        items: ["Low-fi Wireframing", "High-fi Mockups", "Interactive Prototypes", "User Testing"]
      },
      {
        title: "Professional Practice",
        items: ["Design Handoff", "Collaboration with Developers", "Portfolio Development", "Design Presentations"]
      }
    ],
    instructor: {
      name: "Maya Wong",
      title: "Senior Product Designer",
      bio: "Maya has designed products used by millions of people worldwide. With experience at Apple and Airbnb, she specializes in creating intuitive and beautiful digital experiences that users love.",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    features: [
      "Industry-standard design tools provided",
      "Personalized design critiques",
      "Design challenges with real brands",
      "Professional portfolio website",
      "Design job interview preparation"
    ]
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing Strategy",
    category: "Marketing",
    image: "https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    duration: "8 weeks",
    level: "All Levels",
    price: 799,
    rating: 4.6,
    students: 6230,
    shortDescription: "Master digital channels to grow businesses and reach new customers.",
    description: "Develop a comprehensive digital marketing strategy across multiple channels. Learn to leverage social media, SEO, email marketing, and paid advertising to drive growth. Gain practical skills in analytics and optimization to measure and improve your marketing efforts.",
    syllabus: [
      {
        title: "Marketing Fundamentals",
        items: ["Marketing Strategy", "Brand Positioning", "Target Audience", "Customer Journey Mapping"]
      },
      {
        title: "Content Marketing",
        items: ["Content Strategy", "Blog Writing", "Video Marketing", "Content Distribution"]
      },
      {
        title: "Social Media Marketing",
        items: ["Platform Strategy", "Community Building", "Paid Social", "Influencer Marketing"]
      },
      {
        title: "Search & Performance",
        items: ["SEO Fundamentals", "Google Ads", "Landing Page Optimization", "Conversion Rate Optimization"]
      },
      {
        title: "Analytics & Measurement",
        items: ["Google Analytics", "KPI Setting", "Attribution Modeling", "Reporting & Dashboards"]
      }
    ],
    instructor: {
      name: "Marcus Lee",
      title: "Digital Marketing Director",
      bio: "Marcus has led digital marketing strategies for startups and Fortune 500 companies. His campaigns have generated millions in revenue and he brings practical, results-driven insights to his teaching.",
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    features: [
      "Live campaign implementation",
      "Real advertising budget included",
      "Digital marketing tool subscriptions",
      "Industry guest speakers",
      "Marketing certification"
    ]
  },
  {
    id: "mobile-development",
    title: "Mobile App Development",
    category: "Programming",
    image: "https://images.pexels.com/photos/141185/pexels-photo-141185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    duration: "14 weeks",
    level: "Intermediate",
    price: 1099,
    rating: 4.7,
    students: 3125,
    shortDescription: "Build native mobile apps for iOS and Android platforms.",
    description: "Learn to develop professional mobile applications for both iOS and Android using React Native. This course covers everything from setting up your development environment to publishing your apps to the app stores. Create engaging, performant mobile experiences with this comprehensive program.",
    syllabus: [
      {
        title: "Mobile Development Fundamentals",
        items: ["Mobile UX Principles", "React Native Basics", "JavaScript for Mobile", "Cross-Platform Development"]
      },
      {
        title: "UI Components & Navigation",
        items: ["UI Component Library", "Navigation Systems", "Responsive Layouts", "Animation & Gestures"]
      },
      {
        title: "State Management & APIs",
        items: ["Redux", "Context API", "API Integration", "Offline Storage"]
      },
      {
        title: "Native Device Features",
        items: ["Camera & Media", "Location Services", "Push Notifications", "App Permissions"]
      },
      {
        title: "Deployment & Optimization",
        items: ["App Store Submission", "Google Play Store", "Performance Optimization", "Mobile CI/CD"]
      }
    ],
    instructor: {
      name: "Raj Patel",
      title: "Lead Mobile Developer",
      bio: "Raj has developed over 50 mobile apps with millions of downloads. His expertise spans both iOS and Android platforms, and he's passionate about creating performant, beautiful mobile experiences.",
      image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    features: [
      "Real-world app development projects",
      "App design resources included",
      "Testing devices provided",
      "App store submission guidance",
      "Post-course update workshops"
    ]
  },
  {
    id: "cloud-computing",
    title: "Cloud Computing & DevOps",
    category: "IT Infrastructure",
    image: "https://images.pexels.com/photos/1181280/pexels-photo-1181280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    duration: "12 weeks",
    level: "Intermediate to Advanced",
    price: 1199,
    rating: 4.8,
    students: 2783,
    shortDescription: "Master cloud platforms and automated deployment practices.",
    description: "Gain expertise in cloud architecture, infrastructure as code, and CI/CD pipelines. Learn to design, deploy, and maintain scalable applications on major cloud platforms. This course covers AWS, Azure, containerization, and modern DevOps practices that are essential for today's IT professionals.",
    syllabus: [
      {
        title: "Cloud Fundamentals",
        items: ["Cloud Service Models", "AWS Core Services", "Azure Fundamentals", "Cloud Architecture Patterns"]
      },
      {
        title: "Infrastructure as Code",
        items: ["Terraform", "CloudFormation", "Infrastructure Automation", "Configuration Management"]
      },
      {
        title: "Containerization & Orchestration",
        items: ["Docker", "Kubernetes", "Container Security", "Service Mesh"]
      },
      {
        title: "CI/CD & DevOps",
        items: ["Pipeline Design", "Automated Testing", "Deployment Strategies", "Monitoring & Logging"]
      },
      {
        title: "Site Reliability Engineering",
        items: ["Scalability", "High Availability", "Disaster Recovery", "Incident Response"]
      }
    ],
    instructor: {
      name: "Elena Rodriguez",
      title: "Cloud Solutions Architect",
      bio: "Elena has designed and implemented cloud solutions for enterprises across multiple industries. She holds multiple AWS and Azure certifications and specializes in building resilient, scalable cloud architectures.",
      image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    features: [
      "Cloud platform credits included",
      "Hands-on labs in live environments",
      "Infrastructure automation projects",
      "Monthly cloud architecture workshops",
      "DevOps certification preparation"
    ]
  }
];