import { $Wrapper, $Button, $Animation } from "./styles"
import { TypeAnimation } from 'react-type-animation';
function Home() {
    return (
        <$Wrapper id="home">
            <div>
                <h1>RAMTA NAPOLEON HERMEZ</h1>
                <$Animation>
                    <TypeAnimation
                        sequence={[
                            'Junior Frontend\n Developer',
                        ]}
                        speed={35}
                    />
                </$Animation>
                <$Button href="#projects">Check out my projects</$Button>
            </div>
        </$Wrapper>
    )
}

export default Home;