import { $Wrapper, $Button, $Animation } from "./styles"
import profile from "../../assets/images/profile.png"
function Home() {
    return (
        <$Wrapper id="home">
            <div>
                <img src={profile} alt="" />
                <h1>RAMTA HERMEZ</h1>
                <$Animation>
                    Frontend Developer
                </$Animation>
                <$Button href="#projects">Check out my projects</$Button>
            </div>
        </$Wrapper>
    )
}

export default Home;