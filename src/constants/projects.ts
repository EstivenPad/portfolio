interface Project {
    name: string,
    description: string,
    technologies: string[],
    link: string
};

export const PROJECTS:Project[] = [
    {
        name: 'PrestameSoft Mobile App',
        description: 'A mobile app that takes part in one of my side projects about loan management, using React Native with Expo as the base platform. Integrating technologies like React Redux for state management and the implementation of Expo Router for router management. In addition, this project is connected to a RESTful API created with ASP.NET Core 8.',
        technologies: ['React Native', 'Redux', 'Expo Router'],
        link: 'https://github.com/EstivenPad/react-native-prestamos'
    },
    {
        name: 'PrestameSoft RESTful API',
        description: 'A RESTful API design with ASP.NET Core 8 as a complement of the above project about loan management, implementing Clean Architecture, and the CQRS pattern. Also, integrate Entity Framework Core 8 for entity management within the database. All this, along with their respective unit tests and integration tests using the Moq and Shouldly packages.',
        technologies: ['ASP.NET Core', 'Entity Framework', 'MediatR'],
        link: 'https://github.com/EstivenPad/PrestameSoft.Backend'
    },
    {
        name: 'Green Field Park SPA',
        description: 'A Single-Page Application (SPA) about a real estate project built using the Astro Framework, implementing a responsive web design, and integrating a contact form that is built with React and EmailJS.',
        technologies: ['Astro', 'React'],
        link: 'https://green-field-park.netlify.app'
    },
]