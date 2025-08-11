import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
    subheading: string;
    quickLinks: IMenuItem[];
    email: string;
    telephone: string;
    socials: ISocials;
} = {
    subheading: "Révolutionnons votre productivité avec des agents IA intelligents et spécialisés.",
    quickLinks: [
        {
            text: "Fonctionnalités",
            url: "#features"
        },
        {
            text: "Tarifs",
            url: "#pricing"
        },
        {
            text: "Témoignages",
            url: "#testimonials"
        }
    ],
    email: 'contact@ai-expert.com',
    telephone: '+33 1 23 45 67 89',
    socials: {
        // github: 'https://github.com',
        // x: 'https://twitter.com/x',
        twitter: 'https://twitter.com/Twitter',
        facebook: 'https://facebook.com',
        // youtube: 'https://youtube.com',
        linkedin: 'https://www.linkedin.com',
        // threads: 'https://www.threads.net',
        instagram: 'https://www.instagram.com',
    }
}