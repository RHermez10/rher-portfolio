import { $ImageCard, $Title, $Text, $InfoContent } from "./styles";
import { Button } from "../../Components/Button/Button"
export const ImageCard = ({ image, title, link }) => {
    return (
        <$ImageCard>
            <img src={image} height="50" alt="img" />
            <$InfoContent>
                <$Title>{title}</$Title>
                <$Text>The wedding photographer is a collective camera ready to document an event from all the different perspectives of the guests. The images are then collected in a cloud service and can be enjoyed by the bride and groom.</$Text>
                <div>
                    <Button text="Live Demo" />
                    <Button text="Github" />
                </div>

            </$InfoContent>
        </$ImageCard>
    );
};