import React from 'react'
import styled, { keyframes } from 'styled-components'
import GlobalColor from './components/GlobalColors';
import {
    SiHtml5,
    SiCss3,
    SiReact,
    SiBootstrap,
    SiStyledcomponents,
    SiGit,
    SiGithub,
    SiStrapi,
    SiWordpress,
    //elementor here
    SiCpanel,
    SiVisualstudiocode,
    SiFigma,
} from "react-icons/si";
import { FaElementor } from "react-icons/fa";
import Titulo from './props/Titulo';

/// Section Skills///
const SectionSkills = styled.section`
    position: relative;
    color: ${GlobalColor.title};
    padding: 2rem 0;
    @media screen and (max-width: 767px){
        padding: .5rem 0;
    }
`;
/// Section Skills///

/// Container Skils///
const ContainerSkills = styled.div`
    max-width: 80vw;
    margin: 0 auto;
    padding: 2rem 0;
    @media screen and (max-width: 767px){
        max-width: 95vw;
    }
`;
/// Container Skils///


/// Titulo - Skills ///

/// Texto - Skills///
const TextSkills = styled.span`
    text-align: center;
    display: block;
    margin: 1rem 0;
    color: ${GlobalColor.paragraph};
    font-size: 18px;
    letter-spacing: .1rem;
    display: block;
    @media screen and (min-width: 768px ) and (max-width: 1023px){
        font-size: 15px;
        margin: .7rem;
    }
    @media screen and (max-width: 767px){
        font-size: 13px;
        margin: .6rem;
    }
`;
/// Texto - Skills///

/// Contenedor de Iconos General///
const ContainerIcons = styled.div`
    display: flex;
    margin: 1rem 0;
    padding: 1.5rem 0;
    flex-wrap: wrap;
    justify-content: center;
`;
/// Contenedor de Iconos General///

/// Div de icono y Titulo///
const EfectGlowing = keyframes`
    from{
        filter: hue-rotate(0deg);
    }
    to{
        filter: hue-rotate(360deg);
    }
`;
const SizeBox = "10.5rem";
const ResponsiveBox = "8rem";
const BoxIconandTitle = styled.div`
    display: block;
    width: ${SizeBox};
    max-width: ${SizeBox};
    min-width: ${SizeBox};
    background-color: ${GlobalColor.primary};
    box-shadow: 
      inset 0 0 10px ${GlobalColor.third},
      0 0 20px ${GlobalColor.primary},
      inset 0 0 5px ${GlobalColor.fourth},
      0 0 20px ${GlobalColor.third},
      inset 0 0 5px ${GlobalColor.secondary};
    text-shadow: 
      0 0 20px ${GlobalColor.secondary},
      0 0 20px ${GlobalColor.secondary},
      0 0 20px ${GlobalColor.secondary},
      0 0 20px ${GlobalColor.secondary};
    border-radius: 10px;
    margin: 1rem;
    text-align: center;
    padding-top: 1rem;
    animation: ${EfectGlowing} 5s linear infinite;
    @media screen and (max-width: 767px){
        width: ${ResponsiveBox};
        max-width: ${ResponsiveBox};
        min-width: ${ResponsiveBox};
    }
`;
/// Div de icono y Titulo///

/// Iconos y Titulo///
const iconos = [
    {
        id: 1,
        icon: SiHtml5,
        titulo: "HTML5"
    },
    {
        id: 2,
        icon: SiCss3,
        titulo: "CSS3"
    },
    {
        id: 3,
        icon: SiReact,
        titulo: "React"
    },
    {
        id: 4,
        icon: SiBootstrap,
        titulo: "Bootstrap"
    },
    {
        id: 5,
        icon: SiStyledcomponents,
        titulo: "Styled Components"
    },
    {
        id: 6,
        icon: SiGit,
        titulo: "Git"
    },
    {
        id: 7,
        icon: SiGithub,
        titulo: "Github"
    },
    {
        id: 9,
        icon: SiStrapi,
        titulo: "Strapi"
    },
    {
        id: 10,
        icon: SiWordpress,
        titulo: "Wordpress"
    },
    {
        id: 11,
        icon: FaElementor,
        titulo: "Elementor"
    },
    {
        id: 12,
        icon: SiCpanel,
        titulo: "CPanel"
    },
    {
        id: 13,
        icon: SiVisualstudiocode,
        titulo: "VS Code"
    },
    {
        id: 14,
        icon: SiFigma,
        titulo: "Figma"
    }
];
const StyledIconos = styled.i`
    color: ${GlobalColor.fifeth};
    font-size: 2.5rem;
    display: block;
    margin: .5rem auto;
    @media screen and (max-width: 767px){
        font-size: 2rem;
    }
`;
const TituloIcons = styled.span`
    display: block;
    color: ${GlobalColor.title};
    margin-top: 1rem;
    padding: 0;
    font-size: medium;
    padding: .5rem 1rem;
    @media screen and (max-width: 767px){
        font-size: smaller;
    }
`;
/// Iconos y Titulo///
const Skills = () => {
    return (
        <>
            <SectionSkills>
                <ContainerSkills>
                    <Titulo posicion="center" titulo ="Habilidades y Herramientas"/>
                    <TextSkills>
                        Mis habilidades, herramientas y tecnologias que utilizo.
                    </TextSkills>
                    <ContainerIcons>
                        {
                            iconos.map(index => (
                                <BoxIconandTitle key={index.id}>
                                    <StyledIconos as={index.icon} />
                                    <TituloIcons>{index.titulo}</TituloIcons>
                                </BoxIconandTitle>
                            ))
                        }
                    </ContainerIcons>
                </ContainerSkills>
            </SectionSkills>
        </>
    )
}

export default Skills