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
    const Ring = keyframes` 
        0% {
            width: 30px;
            height: 30px;
            opacity: 1;
        }
        100% {
            width: 200px;
            height: 200px;
            opacity: 0;
        }
`;
const ContainerButtonContact = styled.div`
        margin: 1.5rem 2rem;
        display: inline-block;
        animation-delay: 2s;
        animation-name: ${AnimationLink};
        animation-duration: .7s;
        animation-fill-mode: both;
    `;
const ButtonContactMe = styled(Link)`
        font-weight: bolder;
        padding: 1rem 2rem;
        letter-spacing: .1rem;
        text-decoration: none;
        color: ${GlobalColor.primary};
        background-color: ${GlobalColor.third};
        box-shadow: 0 0 10px ${GlobalColor.fourth};
        border-radius: 30px;
        transition: all 0.3s ease-in-out 0s;
        position: relative;
        cursor: pointer;
        &:hover, &:focus{
            background-color: ${GlobalColor.primary};
            color: ${GlobalColor.fifeth};
            box-shadow: 0 0 10px ${GlobalColor.primary};
        }
        &:hover::before, &:focus::before{
            opacity: 1;
        }
        &::before{
            content: '';
            border-radius: 30px;
            min-width: calc(100% + 12px);
            min-height: calc(100% + 12px);
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            opacity: 0;
            transition: all .3s ease-in-out 0s;
            border: 3px solid ${GlobalColor.fifeth};
            box-shadow: 0 0 10px ${GlobalColor.fifeth};;
        }
        &::after{
            content: '';
            width: calc(100% + 3px); 
            height: calc(100% + 3px);
            border-radius: 100%;
            border: 3px solid ${GlobalColor.fifeth};
            position: absolute;
            z-index: -1;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            animation: ${Ring} 1.5s infinite;
        }
        &:hover::after, &:focus::after{
            animation: none;
            display: none;
        }
        @media screen and (max-width: 767px){
            margin: 0;
            padding: .9rem 1.2rem;
        }
    `;
///Boton de Contacto con su Animacion


const Portada = () => {
    return (
        <>
            <PortadaPrincipal>
                <Container>
                    <ContainerTitle>
                        <NameTitle>Hola! Mi nombre es</NameTitle>
                        <MyName>Maycon Antony.</MyName>
                        <Employment>Bachiller en Ciencias de la Ingeniería de Sistemas</Employment>
                        <DescriptionJob>Especializado en la programación Front-End y CMS Managment</DescriptionJob>
                        <ContainerButtonContact>
                            <ButtonContactMe
                                to="contact"
                                spy={true}
                                smooth={true}
                                duration={1000}
                                delay={200}>Contactar</ButtonContactMe>
                        </ContainerButtonContact>
                    </ContainerTitle>
                    <ContainerVoid />
                </Container>
            </PortadaPrincipal>
        </>
    )
}

export default Portada