import { Button } from "@/ui/design/button/button";
import { Logo } from "@/ui/design/logo/logo";
import { Typography } from "@/ui/design/typography/typography";
import Link from "next/link";
import { Container } from "../container/container";
import { ActiveLink } from "./activeLink";

type Props = object;

export const Navbar = ({ }: Props) => {
    return (
        <nav className="border-b-2 border-gray-400">
            <Container className="flex items-center justify-between y-1.5 gap-7">
                <Link href="/">
                    <div className="flex items-center gap-2.5">
                        <Logo size="small" />
                        <div className="flex flex-col">
                            <div className="text-gray font-extrabold text-[24px]">
                                Nom du site
                            </div>
                            <Typography variant="caption4" theme="gray" component="span">
                                Bienvenue sur le site
                            </Typography>
                        </div>
                    </div>
                </Link>
                <div>
                    <div className="flex items-center gap-7">
                        <Typography variant="caption3" component="div" className="flex items-center gap-7">
                            <ActiveLink href="/designSystem">Design-system</ActiveLink>
                            <ActiveLink href="#">Lien</ActiveLink>
                            <ActiveLink href="#">Lien</ActiveLink>
                        </Typography>

                        <div className="flex items-center gap-2">
                            <Button size="small">Connexion</Button>
                            <Button variant="secondary" size="small">Rejoindre</Button>
                        </div>
                    </div>
                </div>
            </Container>
        </nav>
    )
};