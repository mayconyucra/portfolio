import React from 'react'
import styled from 'styled-components'
import GlobalColor from './components/GlobalColors';

/// Section Skills///
const SectionSkills = styled.div`
    position: relative;
    color: ${GlobalColor.title};
    padding: 4rem 0;
`;
/// Section Skills///

/// Container Skils///
const ContainerSkills = styled.div`
    max-width: 80vw;
    margin: 0 auto;
    padding: 2rem 1rem;
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
    width: 100%;
    flex-wrap: wrap;
    margin: 1rem 0;
    padding: 0 1rem;
`;
/// Contenedor de Iconos General///


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
                    still building....
                </ContainerIcons>
            </ContainerSkills>
        </SectionSkills>
    </>
  )
}

export default Skills