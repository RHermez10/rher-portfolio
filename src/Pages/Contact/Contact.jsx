import { Input } from "../../Components/Input/Input";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { CiMail } from "react-icons/ci";
import { Toaster, toast } from "sonner";
import { $FormWrapper, $Form, $SendButton, $MailIcon } from "./styles";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

function Contact() {

    useEffect(() => {
        AOS.init({ duration: 1000 })

    }, [])

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm("service_ojbudqo", "template_a1s3ojq", form.current, "G-kRjv62qtUQSoRaj")
            .then(
                (result) => {
                    toast("Thank you. I will get in touch shortly!");
                    console.log(result.text);
                },
                (error) => {
                    toast("Message failed to send");
                    console.log(error.text);
                }
            );
        e.target.reset();
    };

    return (
        <>
            <Toaster position="top-center" />
            <$FormWrapper data-aos="fade-up" data-aos-once="true" id="contact">
                <div>
                    <h1>CONTACT</h1>
                    <h3>Get in touch!</h3>
                    <$MailIcon href="mailto:ramta97@hotmail.com"> <CiMail /> ramta97@hotmail.com </$MailIcon>
                </div>
                <$Form ref={form} onSubmit={sendEmail}>
                    <div>
                        <label>Name</label>
                        <Input type="text" name="name" />
                    </div>
                    <div>
                        <label>Email</label>
                        <Input type="text" name="email" />
                    </div>
                    <div>
                        <label>Message</label>
                        <textarea rows="7" name="message"></textarea>
                    </div>
                    <$SendButton>Send a message</$SendButton>
                </$Form>
            </$FormWrapper>
        </>
    );
}
export default Contact;