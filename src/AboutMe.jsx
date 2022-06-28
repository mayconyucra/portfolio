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
`;
/// Contenedor general - AboutMe ////

/// Contenedor principal - AboutMe ////
const AboutMePrincipal = styled.div`
  margin: 1rem auto;
  color: white;
  max-width: 80vw;
  padding: 2rem 0;
  display: flex;
`;
/// Contenedor principal - AboutMe ////


/// Contenedor Imagen - AboutMe ////
const PerfilImgContainer = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem 0;
`;
/// Contenedor Imagen - AboutMe ////

// Imagen - Container///
const ImagenContainer = styled.div`
  width: 300px;
  height: 300px;
  ::before{
    content: "";
    width: 300px;
    height: 300px;
    margin: 1rem;
    position: absolute;
    border-right: 2px solid ${GlobalColor.fifeth};
    border-bottom: 2px solid ${GlobalColor.fifeth};
  }
`;
// Imagen - Container///

///  Imagen - AboutMe ////
const ImagenAboutMe = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
`;
///  Imagen - AboutMe ////

/// Contenedor Descripcion - AboutMe ////
const TextDescriptionContainer = styled.div`
  width: 60%;
  margin: 1rem 0;
  padding: 1rem .5rem;
`;
/// Contenedor Descripcion - AboutMe ////

/// Titulo AboutMe ////
const TitleAboutMe = styled.h1`
  color: ${GlobalColor.title};
  word-spacing: .1rem;
  letter-spacing: .1rem;
  padding: 0 2rem;
  font-size: 36px;
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
  p{
    color: ${GlobalColor.fifeth};
    display: initial;
  }
`;
/// Texto AboutMe ////
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
              Hola, mi nombre es <p> Maycon Antony </p>,
              disfruto mucho
              de la programación web Front End, diseño UX/UI, gestión de sistemas de información, bases de datos,
              manejo y administración de sistemas gestores de contenido CMS, 
              IoT, Machine Learning (IA), apasionado por el
              contínuo aprendizaje en nuevas tecnologías y el
              crecimiento profesional en diversas áreas.
              <br /> <br />
              Mi interés es crear cómodas y confortantes experiencias
              orientado a resultados anhelados en cada proyecto.
            </TextAboutMe>
          </TextDescriptionContainer>
        </AboutMePrincipal>

      </ContainerAboutMe>

    </>
  )
}

export default AboutMe
