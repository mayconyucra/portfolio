import React from "react";
import styled from "styled-components"
import GlobalColor from "./components/GlobalColors";

const SectionAboutMe = styled.section`
    position: relative;
    height: 100vh;
    background-color: ${GlobalColor.primary};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: ${GlobalColor.paragraph};

`;

const TitleAboutMe = styled.h1`
    
    text-align: center;
    color: ${GlobalColor.title};
    margin: 1rem 0;
`;

const AboutMe = () => {
  return (
    <>
    <SectionAboutMe>
      <TitleAboutMe>Acerca de Mi</TitleAboutMe>
      <p>Still building :)</p>

    </SectionAboutMe>
    </>
  )
}

export default AboutMe
