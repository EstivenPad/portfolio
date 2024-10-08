interface Work {
    name: string,
    description: string,
    technologies: string[],
    link: string,
    github: string,
    image: string
};

export const WORKS:Work[] = [
    {
        name: 'MyPatient',
        description: 'An ASP.NET Core MVC project designed to streamline and enhance the management of a Dr. Francisco E. Moscoso Puello Hospital\'s surgery department. The system facilitates the efficient handling of patient information, medical orders, and scheduling of daily guards. Additionally, it provides robust reporting capabilities, including quarterly reports on the surgeries performed by each doctor.',
        technologies: ['ASP.NET Core', 'MVC', 'Bootstrap'],
        link: '',
        github: 'https://github.com/EstivenPad/MyPatient',
        image: '/assets/images/mypatient.webp'
    },
    {
        name: 'Green Field Park',
        description: 'A real estate landing page project developed using the Astro web framework, featuring responsive design and a contact form seamlessly integrated with the EmailJS API for efficient communication management.',
        technologies: ['Astro', 'HTML', 'CSS', 'JavaScript'],
        link: 'https://green-field-park.netlify.app',
        github: 'https://github.com/EstivenPad/green-field-park',
        image: '/assets/images/green-field-park-spa.webp'
    },
    {
        name: 'PrestameSoft API',
        description: 'PrestameSoft API, as part of one of my side projects, is designed to provide a comprehensive, scalable, and secure solution for managing loans. This RESTful API enables users to efficiently handle and track their loans, payments, and defaults, through a simple and secure interface.',
        technologies: ['ASP.NET Core', 'Clean Architecture', 'CQRS'],
        link: '',
        github: 'https://github.com/EstivenPad/PrestameSoft.Backend',
        image: ''
    },
    {
        name: 'Agrosoft',
        description: 'Agrosoft is a computer system developed for the web platform that aims to optimize and automate the process of purchasing and selling agrochemical products in conjunction with other characteristic modules of a purchasing and selling computer system, such as users, customers, products, payments, etc. This is the final project of a subject called \"Programacion Aplicada 2\".',
        technologies: ['Blazor Server', 'Bootstrap', 'JavaScript'],
        link: '',
        github: 'https://github.com/EstivenPad/Agrosoft',
        image: '/assets/images/agrosoft.webp'
    },
    {
        name: 'PrestameSoft Mobile',
        description: 'PrestameSoft Mobile is specifically designed to streamline and simplify the management of fortnight loans. This robust application connects seamlessly with a RESTful API, enabling users to efficiently manage their loans with bi-weekly payment schedules. The app provides a user-friendly interface for tracking loan details, payment schedules, and balances, ensuring users stay informed and in control of their paid-up capital.',
        technologies: ['Expo', 'React Native', 'Redux'],
        link: '',
        github: 'https://github.com/EstivenPad/react-native-prestamos',
        image: ''
    },
]