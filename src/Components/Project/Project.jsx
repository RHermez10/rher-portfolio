import { $ProjectContent, $Title, $Text, $Link, $InfoContent } from "./styles";
export const Project = ({ image, title, text, link }) => {
    return (
        <$ProjectContent>
            <img src={image} height="50" alt="img" />
            <$InfoContent>
                <$Title>{title}</$Title>
                <$Text>{text}</$Text>
                <div>
                    <$Link href="" target="_blank">Live Demo

                    </$Link>
                    <$Link href={link}>
                        Github
                    </$Link>
                </div>
            </$InfoContent>
        </$ProjectContent>
    );
};
