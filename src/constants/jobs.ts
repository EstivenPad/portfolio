interface Job {
    role: string,
    company: string,
    duration: string,
    url: string,
    responsabilities: string[]
}

export const JOBS:Job[] = [
    {
        role: 'Backend Developer',
        company: 'XpertCode (Contractor)',
        duration: 'OCT 2025 - PRESENT',
        url: 'https://xpertcode.com.do/',
        responsabilities: [
            'Contributing as part of the internal Quamsys Backend Claro team, within the Gestión de Operaciones Diagnóstico y Confirmación (GODC) subteam.',
            'Managing the GODC API project, designing robust features based on the stakeholder\'s requirements.',
            'Building and testing respective unit tests for ensuring the appropriate performance.',
            'Creating clear and comprehensive documentation for each solution.',
            'Working with DevOps to integrate new code into existing pipelines.'
        ]
    },
    {
        role: 'Web Developer',
        company: 'XpertCode (Contractor)',
        duration: 'MAR 2025 - OCT 2025',
        url: 'https://xpertcode.com.do/',
        responsabilities: [
            'Collaborate with the Claro E-commerce team as part of the optimization subteam, focusing on enhacing existing platform features',
            'Improve UI components following the design consistency and enhancing user experience.',
            'Resolve identified bugs and technical issues to maintain system reliability.'
        ]
    },
    {
        role: 'Software Engineer',
        company: 'Universidad Católica Nordestana (UCNE)',
        duration: 'MAR 2024 - MAR 2025',
        url: 'https://www.ucne.edu/p/',
        responsabilities: [
            'Develop new features, resolve existing issues, and maintenance legacy code regarding with the existent systems.',
            'Provide reports following specify metrics to the respective departments.',
            'Enhance the UI of the web portal.',
            'Manage institutional data through Office 365 administrator.'
        ]
    }
]