import { Link } from "react-scroll";
import styled, { css, keyframes } from "styled-components"
import GlobalColor from "./components/GlobalColors";
    //Estilos del Contenedor Principal
    const PortadaPrincipal = styled.div`
        height: 100vh;
        position: relative;
        display: flex;
        align-items: end;
        transition: 1s all;
        max-height: 100vh;
    `;
    //Estilos del Contenedor Principal

    ///Contenedor del Titulo general y efecto diagonal
    const Container = styled.div`
        width: 100%;
    `;
    ///Contenedor del Titulo general y efecto diagonal

    //Contenedor del Titulo General
    const ContainerTitle = styled.div`
        margin: 1rem 5rem;
        padding: 0 2rem;
        transition: .5s all;
        @media screen and (min-width: 768px ) and (max-width: 1023px){
            margin: 0;
            padding: 0;      
        }
        @media screen and (max-width: 767px){
            margin: 0;
            padding: 0;
            padding-bottom: 3rem;
        }
    `;
    //Contenedor del Titulo General

    //Contenedor Vacio - Efecto Diagonal
    const ContainerVoid = styled.div`
        width: 100%;
        height: 10vh;
        background-color: ${GlobalColor.primary};
        clip-path: polygon(100% 0%, 100% 100%, 0% 100%);        
        @media screen and (max-width: 767px){
            height: 7vh;
            margin-top: 3rem;
        }
    `;
    //Contenedor Vacio - Efecto Diagonal

    ////Animaciones
    const Animation = keyframes`
        0%{
            opacity: 0;
            transform: translateY(120px);
        }
        100%{
            opacity: 1;
            transform: translateY(0px);  
        }
    `;
    const AnimationStyle = css`
        animation-name: ${Animation};
        animation-duration: 1s;
        animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1.1);
        animation-fill-mode: both;
        position: relative;
    `;
    ////Animaciones

    ///Estilos del Titulo General
    const NameTitle = styled.span`
        display: block;
        color: ${GlobalColor.fifeth};
        letter-spacing: .1rem;
        word-spacing: .3rem;
        padding: .5rem 2rem;
        //${AnimationStyle};
        animation-delay: .4s;
        @media screen and (max-width: 767px){
            font-size: 14px;
        }
    `;
    const MyName = styled.h1`
        color: ${GlobalColor.title};
        word-spacing: .1rem;
        font-size: 64px;
        letter-spacing: .3rem;
        padding: 1rem 2rem;
        //${AnimationStyle};  
        animation-delay: .5s;
        @media screen and (max-width: 767px){
            font-size: 46px;
        }
    `;
    const Employment = styled.h3`
        color: ${GlobalColor.paragraph};
        word-spacing: .1rem;
        font-size: 27px;
        letter-spacing: .2rem;
        padding: 0 2rem;
        font-style: italic; 
        //${AnimationStyle}; 
        animation-delay: .6s;
        @media screen and (max-width: 767px){
            font-size: 18px;
        }
    `;
    const DescriptionJob = styled.p`    
        width: 50vw;
        color: ${GlobalColor.paragraph};
        word-spacing: .1rem;
        font-size: 22px;
        letter-spacing: .05rem;
        padding: 0 2rem;
        margin: 1rem 0;
       // ${AnimationStyle}; 
        animation-delay: .7s;     
       
        @media screen and (max-width: 767px){
            width: 75vw;
            margin: 0;
            padding: 1rem 2rem;
            font-size: 14px;
        }
    `;
    ///Estilos del Titulo General

    ///Boton de Contacto con su Animacion
    const AnimationLink = keyframes`
        0%{
            opacity: 0;
        }
        100%{
            opacity: 1;
        }
  `;
    const ButtonContactMe = styled(Link)`
        padding: 1rem 2rem;
        word-spacing: .1rem;
        margin: 2rem;
        display: inline-block;
        border: 2px solid ${GlobalColor.fifeth};
        text-decoration: none;
        color: ${GlobalColor.fifeth};
        border-radius: 10px;
        transition: .3s;
        animation-delay: 2s;
        animation-name: ${AnimationLink};
        animation-duration: .7s;
        animation-fill-mode: both;
        cursor: pointer;
        &:hover{
            background-color: ${GlobalColor.fourth};
            color: ${GlobalColor.primary};
        }
        @media screen and (max-width: 767px){
            margin: 0 2rem;
            padding: .7rem 1.2rem;
        }
    `;
    ///Boton de Contacto con su Animacion


const Portada = () => {
    return (
        <>
            <PortadaPrincipal>
                <Container>
                    <ContainerTitle>
                        <NameTitle>Hi, my name is</NameTitle>
                        <MyName>Maycon Antony.</MyName>
                        <Employment>Front-End developer</Employment>
                        <DescriptionJob>I'm a software engineer specializing in front end develop, UX/UI design and programming.</DescriptionJob>
                        <ButtonContactMe 
                        to="contact" 
                        spy={true} 
                        smooth={true} 
                        duration={1000}
                        delay={200}>Contact Me</ButtonContactMe>
                    </ContainerTitle>
                    <ContainerVoid />
                </Container>
            </PortadaPrincipal>
        </>
    )
}

export default Portada