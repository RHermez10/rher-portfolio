import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { $Header, $Logo, $Navigation, $NavLink, $Button } from "./styles";
import "../../App.css";

function Navigation() {
    const [open, setOpen] = useState(false);
    return (
        <$Header>
            <$Logo>RHermez</$Logo>
            <$Button onClick={() => setOpen(!open)}>
                {open ? <FaTimes size={35} /> : <FaBars size={35} />}
            </$Button>
            <$Navigation open={open}>
                <$NavLink onClick={() => setOpen(false)} href="#">HOME </$NavLink>
                <$NavLink onClick={() => setOpen(false)} href="#about">ABOUT ME</$NavLink>
                <$NavLink onClick={() => setOpen(false)} href="#projects">PROJECTS</$NavLink>
                <$NavLink onClick={() => setOpen(false)} href="#contact">CONTACT</$NavLink>
            </$Navigation>
        </$Header>
    );
}

export default Navigation;