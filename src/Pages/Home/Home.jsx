import { $Wrapper, $Button, $Animation } from "./styles";
import profile from "../../assets/images/profile.png";
function Home() {
    return (
        <$Wrapper id="home">
            <div>
                <img src={profile} alt="" />
                <h1>RAMTA HERMEZ</h1>
                <$Animation>Frontend Developer</$Animation>
                <p>
                    I build responsive, user-friendly web applications. Open to remote
                    opportunities
                </p>
                <$Button href="#projects">View my work</$Button>
            </div>
        </$Wrapper>
    );
}

export default Home;
