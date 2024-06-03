interface Job {
    role: string,
    company: string,
    duration: string,
    responsabilities: string[]
}

export const JOBS:Job[] = [
    {
        role: 'Software Developer',
        company: 'Universidad Católica Nordestana (UCNE)',
        duration: 'MAR 2024 - PRESENT',
        responsabilities: [
            'Develop, modify and manage functions, procedures and related objects regarding with the existent systems.',
            'Manage the database to provide reports to the respective departments following specify metrics.',
            'Manage of the web portal with Joomla CMS.'
        ]
    }
]