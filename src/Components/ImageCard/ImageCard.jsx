import { $ImageCard, $Title, $Overlay, $Link } from "./styles";
export const ImageCard = ({ image, title, link }) => {
    return (
        <$ImageCard>
            <img src={image} alt="img" />
            <$Overlay>
                <$Title>{title} </$Title>
            </$Overlay>
            <div>
                <$Link href={link} target="_blank">
                    Open project
                </$Link>
            </div>
        </$ImageCard>
    );
};