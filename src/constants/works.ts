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
        name: 'PrestameSoft Mobile',
        description: 'PrestameSoft Mobile is specifically designed to streamline and simplify the management of fortnight loans. This robust application connects seamlessly with a RESTful API, enabling users to efficiently manage their loans with bi-weekly payment schedules. The app provides a user-friendly interface for tracking loan details, payment schedules, and balances, ensuring users stay informed and in control of their paid-up capital.',
        technologies: ['React Native', 'Redux', 'Expo Router'],
        link: '',
        github: 'https://github.com/EstivenPad/react-native-prestamos',
        image: ''
    },
    {
        name: 'PrestameSoft API',
        description: 'PrestameSoft API, as part of one of my side projects, is designed to provide a comprehensive, scalable, and secure solution for managing loans. This RESTful API will enable lenders and borrowers to efficiently handle their loans, approvals, repayments, and tracking through a simple and intuitive interface.',
        technologies: ['ASP.NET Core', 'Clean Architectue', 'CQRS'],
        link: '',
        github: 'https://github.com/EstivenPad/PrestameSoft.Backend',
        image: ''
    },
    {
        name: 'Agrosoft',
        description: 'Agrosoft is a computer system developed for the web platform that aims to optimize and automate the process of purchasing and selling agrochemical products in conjunction with other characteristic modules of a purchasing and selling computer system, such as users, customers, products, payments, etc. This is the final project of a subject called \"Programacion Aplicada 2\".',
        technologies: ['Blazor', 'Bootstrap', 'JavaScript'],
        link: '',
        github: 'https://github.com/EstivenPad/Agrosoft',
        image: '/assets/images/agrosoft.webp'
    },
    {
        name: 'Green Field Park SPA',
        description: 'A single-page application (SPA) about a real estate project built using Astro that implements features like responsive web design and the management of a contact form that integrates with email notifications.',
        technologies: ['Astro', 'HTML & CSS', 'React'],
        link: 'https://green-field-park.netlify.app',
        github: 'https://github.com/EstivenPad/green-field-park',
        image: '/assets/images/green-field-park-spa.webp'
    }
]