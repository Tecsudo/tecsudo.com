// config/team.ts
import { TeamMember } from '../types/team';

export const teamMembers: TeamMember[] = [
    {
        name: 'Muneeb ul Hassan',
        role: 'CV & Co-Founder',
        bio: 'Muneeb drives the company\'s vision with deep experience at the intersection of technology and business, leading strategic initiatives, scalable innovations, and sustainable growth.',
        skills: ['Business Strategy', 'Software Architecture', 'Product Management'],
        social: {
            github: 'https://github.com/mh8633b',
            linkedin: 'https://linkedin.com/in/muneeb-ulhassan',
            // portfolio: 'https://muneebulhassan.vercel.app'
        },
        image: 'https://avatars.githubusercontent.com/u/35287609?v=4'
    },
    {
        name: 'Muhammad Haad',
        role: 'CTO & Co-Founder',
        bio: 'Haad spearheads technical innovation, specializing in cloud-native architectures, system scalability, and modern DevOps practices to ensure robust infrastructure.',
        skills: ['Cloud Architecture', 'System Design', 'DevOps', 'CI/CD Pipelines'],
        social: {
            // twitter: 'https://twitter.com/_muhammadhaad',
            github: 'https://github.com/muhammadhaad',
            linkedin: 'https://linkedin.com/in/muhammadhaad',
            portfolio: 'https://muhammadhaad.is-a.dev'
        },
        image: 'https://avatars.githubusercontent.com/u/37215158?v=4'
    },
    {
        name: 'Ahmad Aziz',
        role: 'Lead Engineer & Co-Founder',
        bio: 'Ahmad excels in crafting seamless user experiences, leveraging React, Next.js, and modern frontend technologies to build responsive and performant applications.',
        skills: ['ReactJs', 'NextJs', 'NestJs', 'Github', 'TypeScript', 'Tailwind CSS', 'UI/UX Design', 'Automated Testing ', 'DevOps'],
        social: {
            github: 'https://github.com/azrelic',
            // portfolio: 'https://ahmad.is-a.dev'
        },
        image: 'https://avatars.githubusercontent.com/u/110697532?v=4'
    }
];