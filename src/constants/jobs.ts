interface Job {
    role: string,
    company: string,
    duration: string,
    url: string,
    responsabilities: string[]
}

export const JOBS:Job[] = [
    {
        role: 'Software Engineer',
        company: 'Universidad Católica Nordestana (UCNE)',
        duration: 'SEP 2021 - PRESENT',
        url: 'https://www.ucne.edu/p/',
        responsabilities: [
            'Develop new features, resolve existing issues, and maintenance legacy code regarding with the existent systems.',
            'Provide reports following specify metrics to the respective departments.',
            'Enhance the UI of the web portal.',
            'Manage institutional data through Office 365 administrator.'
        ]
    }
]