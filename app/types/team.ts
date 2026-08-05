// types/team.ts

export interface TeamMember {
    name: string;
    role: string;
    bio: string;
    skills: string[];
    social: {
        twitter?: string;
        github: string;
        linkedin?: string;
        portfolio?: string;
    };
    image?: string;
}