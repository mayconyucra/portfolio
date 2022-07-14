import { createGlobalStyle } from "styled-components"
import Portada from "../media/portada.png"
import GlobalColor from "./GlobalColors";
    //Definicion de estilos globales///
    const GlobalStyles = createGlobalStyle`
   
    *{
        padding: 0;
        margin: 0;        
        box-sizing: border-box;
    }
    body{
        background: url(${Portada});
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        background-attachment: fixed;
        margin: 0;
        font-family: "Roboto","Calibre","Inter","San Francisco","SF Pro Text",-apple-system,system-ui,sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        &::before{
            content: "";
            width: 100%;
            position: fixed;
            height: 100%;
            background: #000000d5;
        }
    }
    body::-webkit-scrollbar{
      width: 10px;
      background-color: ${GlobalColor.primary};
    }
    body::-webkit-scrollbar-thumb{
      background-color: ${GlobalColor.third};
      border-radius: 10px;
    }
    `;   
const GlobalStyle = () => {
    return (
        <GlobalStyles />
    )
}

export default GlobalStyle