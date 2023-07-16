import { LuCopyright } from "react-icons/lu"
import { BsGithub, BsInstagram } from "react-icons/bs"
import { FaLinkedin } from "react-icons/fa"
import { $FooterWrapper, $SocialMediaContent } from "./styles"

function Footer() {
    return (
        <$FooterWrapper>
            <a href="#"> <LuCopyright /> 2023 RAMTA HERMEZ </a>
            <$SocialMediaContent>
                <a href="https://github.com/RHermez10" target="blank"> <BsGithub size={30} /> </a>
                <a href="https://www.linkedin.com/in/ramta-napoleon-hermez-28738b239" target="blank"> <FaLinkedin size={30} /></a>
                <a href="https://www.instagram.com/ramtahermez/" target="blank"> <BsInstagram size={30} /> </a>
            </$SocialMediaContent>
        </$FooterWrapper>
    )
} export default Footer;