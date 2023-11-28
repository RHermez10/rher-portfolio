import { $ProjectContent, $Title, $Text, $Link, $InfoContent } from "./styles";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
export const Project = ({ image, title, text, link, reverse }) => {

    useEffect(() => {
        AOS.init({ duration: 1000 })

    }, [])
    return (
        <$ProjectContent data-aos="zoom-in" reverse={reverse}>
            <img src={image} alt="img" />
            <$InfoContent  >
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
