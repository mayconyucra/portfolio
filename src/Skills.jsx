import React from 'react'
import styled from 'styled-components'
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

/// Section Skills///
const SectionSkills = styled.section`
    position: relative;
    color: ${GlobalColor.title};
    padding: 4rem 0;
`;
/// Section Skills///

/// Container Skils///
const ContainerSkills = styled.div`
    max-width: 80vw;
    margin: 0 auto;
    padding: 2rem 0;
`;
/// Container Skils///

/// Titulo - Skills ///
const TitleSkills = styled.h1`
    text-align: center;
    font-size: 36px;
    letter-spacing: .1rem;
    padding: 1rem 0;
    span{
        color: ${GlobalColor.fifeth};
    }
    @media screen and (min-width: 768px ) and (max-width: 1023px){
        font-size: 30px;
        padding: .5rem 0;
    }
    @media screen and (max-width: 767px){
        font-size: 26px;
        padding: .5rem 0;
    }
`;
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
const BoxIconandTitle = styled.div`
    display: block;
    width: 10.5rem;
    max-width: 10.5rem;
    min-width: 10.5rem;
    background-color: ${GlobalColor.secondary};
    box-shadow: 0 0 40px 2px ${GlobalColor.primary};
    border-radius: 10px;
    margin: .5rem 1rem;
    text-align: center;
    padding-top: 1rem;
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
`;
const TituloIcons = styled.span`
    display: block;
    color: ${GlobalColor.title};
    margin-top: 1rem;
    padding: 0;
    font-size: medium;
    padding: .5rem 1rem;
`;
/// Iconos y Titulo///
const Skills = () => {
    return (
        <>
            <SectionSkills>
                <ContainerSkills>
                    <TitleSkills>
                        Habilidades <span>&</span> Herramientas
                    </TitleSkills>
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