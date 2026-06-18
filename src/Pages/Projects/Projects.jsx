import { Project } from "../../Components/Project/Project";
import wedding from "../../assets/images/weeding-app.png";
import etc from "../../assets/images/etc.png";
import developer from "../../assets/images/developer-dashboard.png"
import { $ProjectWrapper, $Content } from "./styles";

function Projects() {
    return (
        <$ProjectWrapper id="projects">
            <h1>WORK</h1>
            <$Content>
                <Project
                    image={etc}
                    title="ETC Cleaning AB"
                    text="Developed Website for ETC Cleaning AB, a premier cleaning service provider. The platform effortlessly showcases their expertise, offering clients a user-friendly experience to discover and connect with exceptional cleaning solutions."
                    live="https://etc-cleaning.se/"
                    github="https://github.com/RHermez10/etc"
                />
                <Project
                    reverse="reverse"
                    image={developer}
                    title="Developer Dashboard"
                    text="Developer Dashboard is a productivity application built with Next.js, TypeScript, Tailwind CSS, and Zustand. It allows developers to manage projects, track job applications, and visualize skill progress while showcasing responsive design, state management, accessibility, and performance optimization."
                    live="https://developer-app-alpha.vercel.app/"
                    github="https://github.com/RHermez10/developer-app"
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
