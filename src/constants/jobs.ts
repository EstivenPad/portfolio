interface Job {
    role: string,
    company: string,
    duration: string,
    url: string,
    responsabilities: string[]
}

export const JOBS:Job[] = [
    {
        role: 'Web Developer',
        company: 'XpertCode • Claro Dominicana (Contractor)',
        duration: 'MAR 2025 - PRESENT',
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
        duration: 'SEP 2021 - MAR 2025',
        url: 'https://www.ucne.edu/p/',
        responsabilities: [
            'Develop new features, resolve existing issues, and maintenance legacy code regarding with the existent systems.',
            'Provide reports following specify metrics to the respective departments.',
            'Enhance the UI of the web portal.',
            'Manage institutional data through Office 365 administrator.'
        ]
    }
]