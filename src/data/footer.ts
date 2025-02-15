import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
    subheading: string;
    quickLinks: IMenuItem[];
    email: string;
    telephone: string;
    socials: ISocials;
} = {
    subheading: "Our top class engineers deliver the best AI solutions faster than any other company.",
    quickLinks: [
        {
            text: "Features",
            url: "#features"
        },
        {
            text: "Pricing",
            url: "#pricing"
        },
        {
            text: "Testimonials",
            url: "#testimonials"
        }
    ],
    email: 'hola@durazno.io',
    telephone: '+52 (595) 933-5285',
    socials: {
        github: 'https://github.com/Durazno-Technologies',
        // twitter: 'https://twitter.com',
        // facebook: 'https://facebook.com',
        // youtube: 'https://youtube.com',
        linkedin: 'https://www.linkedin.com/company/durazno/',
        threads: 'https://www.threads.net/@duraznoinc',
        instagram: 'https://www.instagram.com/duraznoinc/',
    }
}