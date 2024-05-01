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
        name: 'PrestameSoft Mobile App',
        description: 'A mobile app that takes part in one of my side projects about loan management, using React Native with Expo as the base platform. Integrating technologies like React Redux for state management and the implementation of Expo Router for router management. In addition, this project is connected to a RESTful API created with ASP.NET Core 8.',
        technologies: ['React Native', 'Redux', 'Expo Router'],
        link: '',
        github: 'https://github.com/EstivenPad/react-native-prestamos',
        image: ''
    },
    {
        name: 'PrestameSoft RESTful API',
        description: 'A RESTful API design with ASP.NET Core 8 as a complement of the above project about loan management, implementing Clean Architecture, and the CQRS pattern. Also, integrate Entity Framework Core 8 for entity management within the database. All this, along with their respective unit tests and integration tests using the Moq and Shouldly packages.',
        technologies: ['ASP.NET Core', 'Entity Framework', 'MediatR'],
        link: '',
        github: 'https://github.com/EstivenPad/PrestameSoft.Backend',
        image: ''
    },
    {
        name: 'Green Field Park SPA',
        description: 'A Single-Page Application (SPA) about a real estate project built using the Astro Framework, implementing a responsive web design, and integrating a contact form that is built with React and EmailJS.',
        technologies: ['Astro', 'HTML & CSS', 'JavaScript', 'React'],
        link: 'https://green-field-park.netlify.app',
        github: 'https://github.com/EstivenPad/green-field-park',
        image: '/assets/images/green-field-park-spa.png'
    },
    {
        name: 'Tic Tac Toe',
        description: 'A simple Tic-Tac-Toe game integrating React.',
        technologies: ['HTML & CSS', 'JavaScript', 'React'],
        link: 'https://tic-tac-toe-react-inky.vercel.app/',
        github: 'https://github.com/EstivenPad/tic-tac-toe-react',
        image: '/assets/images/tic-tac-toe.png'
    },
    {
        name: 'Calendar App',
        description: 'A calendar web app that allows you to organize and manage events efficiently. Implementing features like user registration and login, handling state using React Redux, and JWT management. This project is part of a web development course on the Udemy platform.',
        technologies: ['React', 'MongoDB', 'Express', 'Node.js'],
        link: 'https://calendar-react-redux-est.netlify.app',
        github: 'https://github.com/EstivenPad/calendar-react-redux',
        image: '/assets/images/calendar-app.png'
    },
    {
        name: 'Journal App',
        description: 'A journal web app that allows you to create and manage personal notes. Integrating features like user registration and login integrated with Google Sign-In, the state\'s handle using React Redux, and the management of asynchronous requests to Firestore for the storage of data. This project is part of a web development course on the Udemy platform.',
        technologies: ['React', 'Redux', 'Firebase'],
        link: 'https://journal-app-redux-est.netlify.app',
        github: 'https://github.com/EstivenPad/journal-app-redux',
        image: '/assets/images/journal-app.png'
    }
]