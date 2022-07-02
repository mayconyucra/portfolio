import React from "react";
import styled from "styled-components"
import GlobalColor from "./components/GlobalColors";
import Perfil from "./media/perfil.png";

/// Contenedor general - AboutMe ////
const ContainerAboutMe = styled.section`
  padding: 3rem 0;
  position: relative;
  background-color: ${GlobalColor.primary};
  color: white;
  @media screen and (min-width: 768px ) and (max-width: 1023px){
    padding: 1rem 0;
  }
  @media screen and (max-width: 767px){
    padding: .5rem 0;
  }
`;
/// Contenedor general - AboutMe ////

/// Contenedor principal - AboutMe ////
const AboutMePrincipal = styled.div`
  margin: 1rem auto;
  color: white;
  max-width: 80vw;
  padding: 2rem 0;
  display: flex;
  @media screen and (min-width: 768px ) and (max-width: 1023px){
    max-width: 90vw;
    margin: .5rem auto;
    flex-direction: column;
    padding:1rem 0;
  }
  @media screen and (max-width: 767px){
    margin: 0 1rem;
    max-width: 97vw;
    flex-direction: column;
  }
`;
/// Contenedor principal - AboutMe ////

/// Contenedor Imagen - AboutMe ////
const PerfilImgContainer = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem 0;
  @media screen and (min-width: 768px ) and (max-width: 1023px){
    width: 100%;
    margin-top: 0;
  }
  @media screen and (max-width: 767px){
    width: 100%;
  }
`;
/// Contenedor Imagen - AboutMe ////

// Imagen - Container///
const tamañoNormal = "300px";
const tamañoTablet = "180px";
const tamañoSmartphone = "130px";
const ImagenContainer = styled.div`
  width: ${tamañoNormal};
  height: ${tamañoNormal};
  ::before{
    content: "";
    width: ${tamañoNormal};
    height: ${tamañoNormal};
    margin: 1rem;
    position: absolute;
    border-right: 2px solid ${GlobalColor.fifeth};
    border-bottom: 2px solid ${GlobalColor.fifeth};
  }
  @media screen and (min-width: 768px ) and (max-width: 1023px){
    width: ${tamañoTablet};
    height: ${tamañoTablet};
    ::before{
      width: ${tamañoTablet};
      height: ${tamañoTablet};
    }
  }
  @media screen and (max-width: 767px){
    width: ${tamañoSmartphone};
    height: ${tamañoSmartphone};
    ::before{
      width: ${tamañoSmartphone};
      height: ${tamañoSmartphone};
      margin: .5rem;
    }
  }
`;
// Imagen - Container///

///  Imagen - AboutMe ////
const ImagenAboutMe = styled.img`
  width: 100%;
  height: 100%;
`;
///  Imagen - AboutMe ////

/// Contenedor Descripcion - AboutMe ////
const TextDescriptionContainer = styled.div`
  width: 60%;
  margin: 1rem 0;
  padding: 1rem .5rem;
  @media screen and (min-width: 768px ) and (max-width: 1023px){
    width: 100%;
  }
  @media screen and (max-width: 767px){
    width: 100%;
  }
`;
/// Contenedor Descripcion - AboutMe ////

/// Titulo AboutMe ////
const TitleAboutMe = styled.h1`
  color: ${GlobalColor.title};
  word-spacing: .1rem;
  letter-spacing: .1rem;
  padding: 0 2rem;
  font-size: 36px;
  @media screen and (min-width: 768px ) and (max-width: 1023px){
    padding: 0 .5rem;
    text-align: center;
  }
  @media screen and (max-width: 767px){
    font-size: 26px;
    text-align: center;
  }
`;
/// Titulo AboutMe ////

/// Texto AboutMe ////
const TextAboutMe = styled.p`
  display: block;
  margin: 2rem 1rem;
  padding: 1rem;
  color: ${GlobalColor.paragraph};
  font-size: larger;
  letter-spacing: 1px;
  word-spacing: .1rem;
  text-align: justify;
  line-height: 1.8rem;
  span{
    color: ${GlobalColor.fifeth};
    display: initial;
  }
  @media screen and (min-width: 768px ) and (max-width: 1023px){
    margin: 0;
    padding: 1rem .5rem;
  }
  @media screen and (max-width: 767px){
    margin: 0;
    padding: 1rem 0;
    font-size: smaller;
  }
`;
/// Texto AboutMe ////

/// Clip - path ////
const ContainerVoid2 = styled.div`
    width: 100%;
    height: 10vh;
    background-color: ${GlobalColor.primary};
    clip-path: polygon(0% 0%, 100% 0%, 80.2% 100%);       
    @media screen and (max-width: 767px){
       height: 5vh;
    }
    `;
/// Clip - path ////
const AboutMe = () => {
  return (
    <>
      <ContainerAboutMe>
        <AboutMePrincipal>
          <PerfilImgContainer>
            <ImagenContainer>
              <ImagenAboutMe src={Perfil} alt="Maycon Antony" loading="loading..." />
            </ImagenContainer>
          </PerfilImgContainer>
          <TextDescriptionContainer>
            <TitleAboutMe>Acerca de Mi</TitleAboutMe>
            <TextAboutMe>
              Hola, mi nombre es <span>Maycon Antony</span>,
              disfruto mucho
              de la programación web Front-End, diseño UX/UI, gestión de sistemas de información,
              manejo y administración de sistemas gestores de contenido CMS. 
              Apasionado por el
              contínuo aprendizaje en nuevas tecnologías y el
              crecimiento profesional en diversas áreas.
              <br /> <br />
              Mi interés es crear cómodas y confortantes experiencias
              orientado a resultados anhelados en cada proyecto.
            </TextAboutMe>
          </TextDescriptionContainer>
        </AboutMePrincipal>
      </ContainerAboutMe>
      <ContainerVoid2/>
    </>
  )
}

export default AboutMe
