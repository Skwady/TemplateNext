import { appFooterLinks, FooterLinks } from "@/types/appFooterLinks";
import { RiLinkedinFill, RiSlackFill, RiYoutubeFill } from "react-icons/ri";


const footerAppLinks: appFooterLinks[] = [
    {
        label: "Accueil",
        baseUrl: "/",
        type: "internal"
    },
    {
        label: "Projet",
        baseUrl: "/#",
        type: "internal"
    },
    {
        label: "GitHub",
        baseUrl: "/#",
        type: "internal"
    },
    {
        label: "Utile",
        baseUrl: "/#",
        type: "internal"
    },
];
const footerUserLinks: appFooterLinks[] = [
    {
        label: "Accueil",
        baseUrl: "/",
        type: "internal"
    },
    {
        label: "Projet",
        baseUrl: "/#",
        type: "internal"
    },
    {
        label: "GitHub",
        baseUrl: "/#",
        type: "internal"
    },
    {
        label: "Utile",
        baseUrl: "/#",
        type: "internal"
    },
];
const footerInfoLinks: appFooterLinks[] = [
    {
        label: "Accueil",
        baseUrl: "/",
        type: "internal"
    },
    {
        label: "Projet",
        baseUrl: "/#",
        type: "internal"
    },
    {
        label: "GitHub",
        baseUrl: "/#",
        type: "internal"
    },
    {
        label: "Utile",
        baseUrl: "/#",
        type: "internal"
    },
];
export const footerSocialLinks: appFooterLinks[] = [
    {
        label: "Youtube",
        baseUrl: "https://youtube.com",
        type: "external",
        icon: RiYoutubeFill,
    },
    {
        label: "Linkedin",
        baseUrl: "https://linkedin.com",
        type: "external",
        icon: RiLinkedinFill,
    },
    {
        label: "Stack",
        baseUrl: "https://slack.com",
        type: "external",
        icon: RiSlackFill,
    },
];
export const footerLegalLinks: FooterLinks[] = [
    {
        label: "App",
        links: footerAppLinks,
    },
    {
        label: "Utilisateur",
        links: footerUserLinks,
    },
    {
        label: "Information",
        links: footerInfoLinks,
    },
    {
        label: "Réseaux sociaux",
        links: footerSocialLinks,
    },
];