import styled from "styled-components"
import GlobalColor from "./components/GlobalColors";
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
const TextPrueba = styled.h1`
    text-align: center;
    color: ${GlobalColor.title};
    font-size: 36px;
    letter-spacing: .1rem;
    padding: 1rem 0;
    @media screen and (min-width: 768px ) and (max-width: 1023px){
        font-size: 30px;
        padding: .5rem 0;
    }
    @media screen and (max-width: 767px){
        font-size: 26px;
        padding: .5rem 0;
    }
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
                <TextPrueba>
                    Still Building :)
                </TextPrueba>
            </BackgroundStyled>
            <ClipPath StringPath="polygon(100% 0, 88% 80%, 27% 30%, 0 100%, 0 0);" />
        </>
    )
}

export default Anyproyects