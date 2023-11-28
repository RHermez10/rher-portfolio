import { Project } from "../../Components/Project/Project";
import wedding from "../../assets/images/weeding-app.png";
import hamster from "../../assets/images/hamsters.png"
import hangman from "../../assets/images/hangman.png"
import { $ProjectWrapper, $Content } from "./styles"

function Projects() {
    return (
        <$ProjectWrapper id="projects">
            <h1>PROJECTS</h1>
            <$Content>
                <Project image={wedding} title="Wedding app" text="The wedding photographer is a collective camera ready to document an event from all the different perspectives of the guests. The images are then collected in a cloud service and can be enjoyed by the bride and groom." link="https://github.com/RHermez10/wedding-camera-app" />
            </$Content>
        </$ProjectWrapper>
    );
}

export default Projects;