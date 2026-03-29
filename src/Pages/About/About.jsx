import { $AboutWrapper } from "./styles";

function About() {
    return (
        <$AboutWrapper id="about">
            <div data-aos="zoom-in" data-aos-once="true">
                <h1>ABOUT</h1>
                <div>
                    <p>
                        I’m a frontend developer based in Sweden, focused on building clean,
                        responsive, and user-friendly web applications. I work with HTML,
                        CSS, JavaScript, and React to turn ideas into real, functional
                        products. My background in customer-focused roles has strengthened
                        my attention to detail, problem-solving, and ability to create
                        solutions that truly meet user needs. I enjoy working in
                        collaborative, remote environments and continuously improving my
                        skills through real-world projects.
                    </p>
                </div>
            </div>
        </$AboutWrapper>
    );
}

export default About;
