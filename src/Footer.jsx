import styled from "styled-components"
import GlobalColor from "./components/GlobalColors"
import { SiFacebook, SiMessenger, SiLinkedin, SiInstagram, SiReact, SiStyledcomponents, SiGithub } from "react-icons/si";

///Estilos del Contenedor del Footer
const ContainerFooter = styled.section`
    background-color: ${GlobalColor.primary};
    text-align: center;
    position: relative;
    padding: 3rem 1rem;

`;
///Estilos del Contenedor del Footer

///Estilos de texto random
const TextRandom = styled.p`
    color: ${GlobalColor.title};
    margin: 1rem 2rem;
    letter-spacing: .1rem;
    word-spacing: .1rem;
    margin: 1rem 0;
`;
///Estilos de texto random


///Contenedor de los Iconos
const ContainerIcons = styled.div`
    padding: 1rem 0;
    margin: 1rem 0;
`;
///Contenedor de los Iconos

///Estilos de Iconos
const ButtonIcons = styled.a`
    display: inline-flex;
    padding: .7rem;
    background-color: ${GlobalColor.secondary};
    border-radius: 50%;
    border: 1px solid ${GlobalColor.fifeth};
    margin: .7rem;
    font-size: 26px;
    color: ${GlobalColor.fifeth};
    transition: .5s all;
    &:hover{
        border: 1px solid ${GlobalColor.title};
        background-color: initial;
        color: ${GlobalColor.title};
    }        
    @media screen and (max-width: 767px){
        font-size: 18px;
        margin: .5rem;
    }
`;
///Estilos de Iconos

///Estilo de Copyrighttext 
const TextCopyright = styled.span`
    padding: 2rem 0;
    color: ${GlobalColor.paragraph};
    letter-spacing: .1rem;
    span{
        color: ${GlobalColor.fifeth};
    }        
    @media screen and (max-width: 767px){
    }

`;
///Estilo de Copyrighttext


///ultimo estilo
const TextTechnology = styled.p`
    padding: 1rem 0;
    margin: 1rem 0;
    color: ${GlobalColor.fourth};
    font-style: italic;
    font-size: 12px;
`;
///ultimo estilo

const Footer = () => {
    return (
        <ContainerFooter>
            <TextRandom>Every day something new is learned and many things are appreciated.</TextRandom>
            <ContainerIcons>
                <ButtonIcons href="https://github.com/mayconyucra" target="_github"><SiGithub /></ButtonIcons>
                <ButtonIcons href="https://pe.linkedin.com/in/maycon-yucra-avenda%C3%B1o-a9a552226" target="_linkedin"><SiLinkedin /></ButtonIcons>
                <ButtonIcons href="https://fb.com/mayconyucra" target="_facebook"><SiFacebook /></ButtonIcons>
                <ButtonIcons href="https://m.me/mayconyucra" target="_messenger"><SiMessenger /></ButtonIcons>
                <ButtonIcons href="https://www.instagram.com/mayconyucra/" target="_instagram"><SiInstagram /></ButtonIcons>
            </ContainerIcons>
            <TextCopyright>Handcrafted by me © - <span>Maycon</span> .</TextCopyright>
            <TextTechnology>Made with <SiReact /> & <SiStyledcomponents /> - v1.2</TextTechnology>
        </ContainerFooter>
    )
}

export default Footer