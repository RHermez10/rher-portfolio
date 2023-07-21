import { ImageCard } from "../../Components/ImageCard/ImageCard";
import wedding from "../../assets/images/weeding-app.png";
import events from "../../assets/images/events.png"
import hamster from "../../assets/images/hamsters.png"
import hangman from "../../assets/images/hangman.png"
import { $ProjectWrapper, $Content } from "./styles"

function Projects() {
    return (
        <$ProjectWrapper id="projects">
            <h1>PROJECTS</h1>
            <$Content>
                <ImageCard image={wedding} title="Wedding app" link="https://github.com/RHermez10/wedding-camera-app" />
                <ImageCard image={events} title="Events app" link="https://booking-ticket-tau.vercel.app/" />
                <ImageCard image={hamster} title="hamster war" link="https://hamsters-projectt.onrender.com/" />
                <ImageCard image={hangman} title="Hangman game" link="https://hangman-project-game.vercel.app/" />
            </$Content>
        </$ProjectWrapper>
    );
}

export default Projects;