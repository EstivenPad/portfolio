interface Project {
    name: string,
    description: string,
    technologies: string[],
    link: string
};

export const PROJECTS:Project[] = [
    {
        name: 'MyPatient',
        description: 'An ASP.NET Core MVC project designed to streamline and enhance the management of a Dr. Francisco E. Moscoso Puello Hospital\'s surgery department. The system facilitates the efficient handling of patient information, medical orders, and scheduling of daily guards. Additionally, it provides robust reporting capabilities, including quarterly reports on the surgeries performed by each doctor.',
        technologies: ['ASP.NET Core', 'MVC', 'Bootstrap'],
        link: 'https://github.com/EstivenPad/MyPatient'
    },
    {
        name: 'Green Field Park',
        description: 'A real estate landing page project developed using the Astro web framework, featuring responsive design and a contact form seamlessly integrated with the EmailJS API for efficient communication management.',
        technologies: ['Astro', 'HTML', 'CSS', 'JavaScript'],
        link: 'https://green-field-park.netlify.app'
    },
    {
        name: 'PrestameSoft API',
        description: 'PrestameSoft API, as part of one of my side projects, is designed to provide a comprehensive, scalable, and secure solution for managing loans. This RESTful API enables users to efficiently handle and track their loans, payments, and defaults, through a simple and secure interface.',
        technologies: ['ASP.NET Core', 'Clean Architecture', 'CQRS'],
        link: 'https://github.com/EstivenPad/PrestameSoft.Backend'
    },
]