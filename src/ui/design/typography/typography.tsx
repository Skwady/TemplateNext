import clsx from "clsx";

interface Props {
    variant?: 'display' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'lead' | 'body-lg' | 'body-base' | 'body-sm' | 'caption1' | 'caption2' | 'caption3' | 'caption4';
    component?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p' | 'span' | 'div';
    theme?: 'primary' | 'secondary' | 'white' | 'black' | 'gray';
    weight?: 'regular' | 'medium' | 'large';
    className?: string;
    children: React.ReactNode;
}

export const Typography = ({
    variant = "h3",
    component: Component = "div",
    theme = "black",
    weight = "regular",
    className,
    children,
}: Props) => {

    let variantstyles: string = "",
        colorStyles: string = "";

    switch (variant) {
        case "display":
            variantstyles = "text-8xl"
            break;
        case "h1":
            variantstyles = "text-7xl"
            break;
        case "h2":
            variantstyles = "text-6xl"
            break;
        case "h3": // Default
            variantstyles = "text-5xl"
            break;
        case "h4":
            variantstyles = "text-4xl"
            break;
        case "h5":
            variantstyles = "text-3xl"
            break;
        case "lead":
            variantstyles = "text-2xl"
            break;
        case "body-lg":
            variantstyles = "text-lg"
            break;
        case "body-base":
            variantstyles = "text-base"
            break;
        case "body-sm":
            variantstyles = "text-sm"
            break;
        case "caption1":
            variantstyles = "text-caption1"
            break;
        case "caption2":
            variantstyles = "text-caption2"
            break;
        case "caption3":
            variantstyles = "text-caption3"
            break;
        case "caption4":
            variantstyles = "text-caption4"
            break;
    }

    switch (theme) {
        case "primary":
            colorStyles = "text-primary"
            break;
        case "secondary":
            colorStyles = "text-secondary"
            break;
        case "gray":
            colorStyles = "text-gray-700"
            break;
        case "black":
            colorStyles = "text-gray"
            break;
        case "white":
            colorStyles = "text-white"
            break;
    }

    return (
        <Component className={clsx(
                variantstyles,
                colorStyles,
                weight === "medium" && "font-medium", 
                className,
            )}
        >
            {children}
        </Component>
    );
};