import styled from "styled-components"
import GlobalColor from "./components/GlobalColors";
import Titulo from "./props/Titulo";
const BackgroundStyled = styled.div`
    position: relative;
    background-color: ${GlobalColor.primary};
    height: 100vh;
    width: 100%;
    padding: 4rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
`;
/// Separadores Clip Path////
const ClipPath = styled.div`    
    width: 100%;
    height: 10vh;
    background-color: ${GlobalColor.primary};
    -webkit-clip-path: ${({ StringPath }) => StringPath};;
    clip-path: ${({ StringPath }) => StringPath};       
    @media screen and (max-width: 767px){
        height: 5vh;
    }
`;
/// Separadores Clip Path////
const Anyproyects = () => {
    return (
        <>
            <ClipPath StringPath="polygon(72.8% 35.8%, 100% 0%, 100% 100%, 0% 100%, 16.6% 26.3%);" />
            <BackgroundStyled>
                <Titulo posicion ="center" titulo="Algunos de mis Proyectos...(en construcción ...)"/>
            </BackgroundStyled>
            <ClipPath StringPath="polygon(100% 0, 88% 80%, 27% 30%, 0 100%, 0 0);" />
        </>
    )
}

export default Anyproyects