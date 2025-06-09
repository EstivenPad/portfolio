interface Job {
    role: string,
    company: string,
    duration: string,
    url: string,
    responsabilities: string[]
}

export const JOBS:Job[] = [
    {
        role: 'Full-Stack Developer',
        company: 'XpertCode',
        duration: 'MAR 2025 - PRESENT',
        url: 'https://xpertcode.com.do/',
        responsabilities: [
            'Work at Claro Dominicana a telecommunications company as contractor, contributing to the Claro Dominicana E-Commerce project.'
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