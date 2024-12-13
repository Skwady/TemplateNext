interface Props {
    size?: 'very-small' | 'small' | 'medium' | 'large';
}

export const Logo = ({ size = "medium" }: Props) => {
    let sizeLogo: number;

    switch (size) {
        case "very-small":
            sizeLogo = 34;
            break;
        case "small":
            sizeLogo = 61;
            break;
        case "medium": // Default
            sizeLogo = 88;
            break;
        case "large":
            sizeLogo = 140;
            break;
    }

    return (
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width={sizeLogo}>
                <circle cx="50" cy="50" r="40" fill="#dedededede" />
                <path d="M50 20 L40 70 L60 70 Z" fill="white" />
                <rect x="45" y="45" width="10" height="5" fill="#4CAF50" />
            </svg>
        </div>
    )
};