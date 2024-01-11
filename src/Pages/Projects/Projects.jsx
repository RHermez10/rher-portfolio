import { Project } from "../../Components/Project/Project";
import wedding from "../../assets/images/weeding-app.png";
import etc from "../../assets/images/etc.png";
import cityGame from "../../assets/images/city-game.png";
import ettc from "../../assets/images/ettc.png";
import { $ProjectWrapper, $Content } from "./styles";

function Projects() {
    return (
        <$ProjectWrapper id="projects">
            <h1>PROJECTS</h1>
            <$Content>
                <Project
                    image={ettc}
                    title="ETC Cleaning AB"
                    text="Developed Website for ETC Cleaning AB, a premier cleaning service provider. The platform effortlessly showcases their expertise, offering clients a user-friendly experience to discover and connect with exceptional cleaning solutions."
                    live="https://etc-cleaning.se/"
                    github="https://github.com/RHermez10/etc"
                />
                <Project
                    reverse="reverse"
                    image={cityGame}
                    title="City Clash"
                    text="City Clash is a fun and engaging spinoff of the classic KittenWar game, where users can vote for their favorite cities in head-to-head matches. City Clash is the perfect game to celebrate and showcase your favorite cities."
                    live="https://city-game-usah.onrender.com"
                    github="https://github.com/RHermez10/cities-clash/tree/main"
                />
                <Project
                    image={wedding}
                    title="Wedding app"
                    text="The wedding photographer is a collective camera ready to document an event from all the different perspectives of the guests. The images are then collected in a cloud service and can be enjoyed by the bride and groom."
                    live="https://wedding-vesj.onrender.com"
                    github="https://github.com/RHermez10/wedding-camera-app"
                />
            </$Content>
        </$ProjectWrapper>
    );
}

export default Projects;
