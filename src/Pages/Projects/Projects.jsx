import { Project } from "../../Components/Project/Project";
import wedding from "../../assets/images/weeding-app.png";
import hamster from "../../assets/images/hamsters.png";
import hangman from "../../assets/images/hangman.png";
import { $ProjectWrapper, $Content } from "./styles";

function Projects() {
    return (
        <$ProjectWrapper id="projects">
            <h1>PROJECTS</h1>
            <$Content>
                <Project
                    image={wedding}
                    title="ETC Cleaning AB"
                    text="The wedding photographer is a collective camera ready to document an event from all the different perspectives of the guests. The images are then collected in a cloud service and can be enjoyed by the bride and groom."
                    link="https://github.com/RHermez10/etc"
                />
                <Project
                    reverse="reverse"
                    image={wedding}
                    title="Wedding app"
                    text="The wedding photographer is a collective camera ready to document an event from all the different perspectives of the guests. The images are then collected in a cloud service and can be enjoyed by the bride and groom."
                    link="https://github.com/RHermez10/wedding-camera-app"
                />
                <Project
                    image={wedding}
                    title="Hamster War"
                    text="Hamster War is a full-stack application. The website is a spinoff of Kittenwar, a website where matches between two pictures are randomly selected and visitors vote for the one they find cutest."
                    link="https://github.com/RHermez10/hasmterss-frontend"
                />
                <Project
                    reverse="reverse"
                    image={wedding}
                    title="Hangman"
                    text="A game developed with HTML, CSS and Javascript. The Hangman game generates a random word and let’s the user choose between letters to try to guess correct word. "
                    link="https://github.com/RHermez10/Hangman-project-game"
                />
            </$Content>
        </$ProjectWrapper>
    );
}

export default Projects;
