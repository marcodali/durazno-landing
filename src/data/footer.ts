import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
    subheading: string;
    quickLinks: IMenuItem[];
    email: string;
    telephone?: string;
    socials: ISocials;
} = {
    subheading: "Our top class engineers deliver the best AI solutions faster than any other company.",
    quickLinks: [
        {
            text: "Labs",
            url: "#features"
        },
        {
            text: "Talento LATAM",
            url: "#pricing"
        },
        {
            text: "Awards",
            url: "#testimonials"
        }
    ],
    email: 'hola@durazno.io',
    socials: {
        github: 'https://github.com/Durazno-Technologies',
        linkedin: 'https://www.linkedin.com/company/durazno/',
        threads: 'https://www.threads.net/@duraznoinc',
        instagram: 'https://www.instagram.com/duraznoinc/',
    }
}