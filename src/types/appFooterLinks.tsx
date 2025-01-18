import { LinkType } from "@/lib/linkType";
import { IconType } from "react-icons";

export interface appFooterLinks {
    label: string;
    baseUrl: string;
    type: LinkType;
    icon?: IconType;
}

export interface FooterLinks {
    label: string;
    links: appFooterLinks[];
}