import styled from "styled-components"
import GlobalColor from "../components/GlobalColors";
const TitleStyle = styled.h1`
    text-align: ${({position}) => position};
    color: ${GlobalColor.title};
    word-spacing: .1rem;
    letter-spacing: .1rem;
    padding: 0 2rem;
    font-size: 36px;
    @media screen and (min-width: 768px ) and (max-width: 1023px){
        padding: 0 .5rem;
        font-size: 30px;
    }
    @media screen and (max-width: 767px){
        font-size: 26px;
        text-align: center;
    }
`;
const Titulo = ({titulo, posicion}) => {
  return (
    <TitleStyle position={posicion}>{titulo}</TitleStyle>
  )
}

export default Titulo