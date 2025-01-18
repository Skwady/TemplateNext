import { Container } from "@/ui/components/container/container"
import { Button } from "@/ui/design/button/button"
import { Typography } from "@/ui/design/typography/typography"
import Image from "next/image"

export const HeroTopView = () => {
    return (
        <Container className="relative pt-40 pb-52 overflow-hidden">
            <div className="w-full max-w-2xl space-y-5">
                <Typography 
                    variant="h1" 
                    component="h1" 
                    className="mx-w-lg"
                >
                    Rejoin nous dans l'aventure
                </Typography>
                <Typography 
                    variant="body-lg" 
                    theme="gray" 
                    component="p" 
                    className="mx-w-xl"
                >
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet consectetur rerum animi veniam tempore? 
                    Rem, asperiores voluptates vel ab ipsum aliquid nulla minus, fugit cum deserunt quod atque placeat illo!
                </Typography>
                <div className="space-x-5 pt-2.5">
                    <Button>Commencer</Button>
                    <Button variant="secondary">En savoir plus {" "}</Button>
                </div>
            </div>
            <Image 
                src="/assets/svg/rocket.svg" 
                alt="fusée" 
                width={811} 
                height={596} 
                className="absolute top-0 right-0 z-0" 
            />
        </Container>
    )
}