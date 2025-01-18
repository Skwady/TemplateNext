import { Button } from "@/ui/design/button/button"
import { footerSocialLinks } from "./appFooterLinks"
import { v4 as uuidv4 } from "uuid";
import clsx from "clsx";
import { RiFacebookBoxFill } from "react-icons/ri";

interface Props {
    theme?: "gray" | "primary" | "secondary";
    className?: string;
}

export const SocialNetworkButton = ({
    className, 
    theme = "primary",
}: Props) => {

    const icoList = footerSocialLinks.map((socialNetwork) => (
        <Button 
            key={uuidv4()} 
            variant="ico" 
            iconTheme={theme}
            icon={{
                icon: socialNetwork.icon
                ? socialNetwork.icon
                : RiFacebookBoxFill
            }}
            baseUrl={socialNetwork.baseUrl}
            linkType={socialNetwork.type}
        />
    ));
    return (
        <div className={clsx(className, "flex items-center gap-2.5")}>{icoList}</div>
    )
}