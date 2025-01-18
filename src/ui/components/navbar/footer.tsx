import { Typography } from "@/ui/design/typography/typography";
import { Container } from "../container/container";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";
import { ActiveLink } from "./activeLink";
import { FooterLinks } from "@/types/appFooterLinks";
import { footerLegalLinks } from "./appFooterLinks";
import { LinkType } from "@/lib/linkType";
import { SocialNetworkButton } from "./socialNetworkButton";

export const Footer = () => {

    const currentYear = new Date().getFullYear();

    const footerLinks = footerLegalLinks.map((element) => (
        <FooterLink key={uuidv4()} data={element} />
    ));

    return (
        <footer className="bg-gray">
            <Container className="flex justify-between pt-16">
                <div className="flex flex-col items-center gap-1">
                    <Typography
                        variant="caption1"
                        theme="white"
                        weight="medium"
                    >
                        Titre
                    </Typography>
                    <Typography
                        variant="caption3"
                        theme="gray"
                    >
                        Description
                    </Typography>
                    <a href="https://youtube.com" target="_blank">
                        <Image src="/assets/svg/footer.svg" width={229} height={216} alt="Logo de la source"/>
                    </a>
                </div>
                <div className="flex gap-7">
                    {footerLinks}
                </div>
            </Container>
            <Container className="pt-9 pb-11 space-y-11">
                <hr className="text-gray-800" />
                <div className="flex items-center justify-between">
                    <Typography variant="caption4" theme="gray">
                        {`Copyright © ${currentYear} | Tous droits réservés`}
                    </Typography>
                    <div className="">
                        <SocialNetworkButton theme="gray"/>
                    </div>
                </div>
            </Container>
        
        </footer>
    );
};

interface FooterLinksProps {
    data: FooterLinks;
}

const FooterLink = ({data}: FooterLinksProps) => {

    const footerList = data.links.map((link) => (
        <div key={uuidv4()}>
            {link.type === LinkType.INTERNAL && (
                <ActiveLink href={link.baseUrl}>{link.label}</ActiveLink>
            )}

            {link.type === LinkType.EXTERNAL && (
            <a href={link.baseUrl} target="_blank">{link.label}</a>
            )}
        </div>
    ));

    return (
        <div className="min-w-[190px]">
            <Typography
                variant="caption2"
                theme="white"
                weight="medium"
                className="pb-5"
            >
                {data.label}
            </Typography>
            <Typography
                variant="caption3"
                theme="gray"
                className="space-y-4"
            >
                {footerList}
            </Typography>
        </div>
    );
};