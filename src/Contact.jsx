import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import styled, { css } from 'styled-components';
import GlobalColor from './components/GlobalColors';
import { IoCall, IoMailSharp } from "react-icons/io5";
import { SiGooglemaps } from "react-icons/si";

///  Contenedor de la seccion formulario///
const ContainerSectionForm = styled.section`
    position: relative;
    color: ${GlobalColor.title};
    padding: 5rem 0;
`;
///  Contenedor de la seccion formulario///

///  Contenedor del formulario general///
const ContainerForm = styled.div`
    max-width: 80vw;
    margin: 0 auto;
    padding: 2rem 1rem; 
    background-color: ${GlobalColor.secondary};
    box-shadow: 0 0 40px 2px ${GlobalColor.primary};
    border-radius: 10px;
    @media screen and (min-width: 768px ) and (max-width: 1023px){
        max-width: 90vw;
    }
    @media screen and (max-width: 767px){
        max-width: 90vw;
    }
`;
///  Contenedor del formulario general///

///  Texto SendME///
const TextSendMe = styled.h1`
    text-align: center;
    font-size: 36px;
    margin-bottom: 2rem;
    letter-spacing: .1rem;
    @media screen and (min-width: 768px ) and (max-width: 1023px){
        font-size: 30px;
        margin-bottom: 1.3rem;
    }
    @media screen and (max-width: 767px){
        font-size: 26px;
        margin-bottom: 1.2rem;
    }
`;
///  Texto SendME///

///  Texto Random///
const SpanText = styled.span`
    text-align: center;
    font-size: 18px;
    margin: 1rem 0;
    color: ${GlobalColor.paragraph};
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
///  Texto Random///

///  Contenedor Iconos - Formulario///
const ContainerIconsAndForm = styled.div`
    display: flex;
    width: 100%;
    @media screen and (max-width: 767px){
        display: block;
    }    
`;
///  Contenedor Iconos - Formulario///

///  Contenedor Iconos y Datos de Contacto///
const ContainerIconsDate = styled.div`
    width: 35%;
    margin: 1rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 767px){
        width: 100%;
    }
`;
///  Contenedor Iconos y Datos de Contacto///

///  Contenedor Iconos y Datos de Contacto Especifico///
const ContainerIcons = styled.div`
    padding: 1rem 0;
    @media screen and (max-width: 767px){
        padding-bottom: 0;
    }
`;
///  Contenedor Iconos y Datos de Contacto Especifico///

///  Contenedor de Iconos y Datos de Contacto///
const ContainerIconAndDate = styled.div`
    display: flex;
    padding: .7rem 0;
    @media screen and (max-width: 767px){
        padding-bottom: 0;
    }
`;
///  Contenedor de Iconos y Datos de Contacto///

///  Estilos de Iconos de Contacto Especifico///
const StyleIcons = styled.i`
    font-size: 2rem;
    color: ${GlobalColor.fifeth};
    @media screen and (max-width: 767px){
        font-size: 1rem;
        margin: 0 .2rem;
    }
`;
///Estilos de Iconos de Contacto Especifico///

///Estilos de Texto de Datos de Contacto///
const TextDate = styled.span`
    margin: auto 1rem;
    font-size: medium;
    color: ${GlobalColor.title};
    letter-spacing: .1em;
    @media screen and (max-width: 767px){
        font-size: x-small;
        margin: auto .2rem;
    }
`;
///Estilos de Texto de Datos de Contacto///


///  Estilos del Formulario///
const FormStyles = styled.form`
    margin: 1rem 0;
    width: 65%;
    @media screen and (max-width: 767px){
        width: 100%;
    }
`;
const ContainerNameEmail = styled.div`
    width: 100%;
    display: flex;
    margin-top: 1rem;
    @media screen and (min-width: 768px ) and (max-width: 1023px){
        flex-direction: column;
    }
    @media screen and (max-width: 767px){
        flex-direction: column;
    }
`;
const ContainerName = styled.div`
    width: 50%;
    padding: 0 1rem;
    @media screen and (min-width: 768px ) and (max-width: 1023px){
        width: 100%;
    }
    @media screen and (max-width: 767px){
        width: 100%;
    }
`;
const ContainerEmail = styled.div`
    width: 50%;
    padding: 0 1rem;
    @media screen and (min-width: 768px ) and (max-width: 1023px){
        width: 100%;
    }
    @media screen and (max-width: 767px){
        width: 100%;
    }
`;
const ContainerMessage = styled.div`
    width: 100%;
    padding: 0 1rem;
`;
const InputStyle = css`
    background-color:transparent;
    width: 100%;
    margin: .5rem 0;
    border: none;
    border-radius: 7px;
    color: ${GlobalColor.title};
    font-family: inherit;
    font-size: initial;
    letter-spacing: .05rem;
    border-bottom: 2px solid ${GlobalColor.fifeth};
    padding: 1.5rem;
    &::placeholder{
        color: ${GlobalColor.fifeth};
    }    
    @media screen and (max-width: 767px){
        padding: 1.3rem;
        margin: .7rem 0;
        font-size: smaller;
        border-bottom: 1px solid ${GlobalColor.fifeth};
    }
`;
const Input = styled.input`
    ${InputStyle};
`;
const Textarea = styled.textarea`
    ${InputStyle};
    
    &::-webkit-scrollbar{
      width: 10px;
      background-color: ${GlobalColor.primary};
    }
    &::-webkit-scrollbar-thumb{
      background-color: ${GlobalColor.third};
      border-radius: 10px;
    }
`;

///Boton Enviar Formulario///
const ContainerButtonSend = styled.div`
    display: flex;
    justify-content: end;
    padding: 0 1rem;
`;
const ButtonSend = styled.input`
    background-color: transparent;
    margin-top: 1rem;
    border: 2px solid ${GlobalColor.fifeth};
    padding: 1rem 2rem;
    border-radius: 5px;
    color: ${GlobalColor.fifeth};
    letter-spacing: .1rem;
    transition: .5s;
    cursor: pointer;
    &:hover{
        background-color: ${GlobalColor.fourth};
        color: ${GlobalColor.primary};
    }
    @media screen and (max-width: 767px){
        width: 100%;
    }
`;
///Boton Enviar Formulario///

const Contact = () => {

    ////// FORMULARIO - EMAILJS/////
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            `${process.env.REACT_APP_SERVICE_ID}`,
            `${process.env.REACT_APP_TEMPLATE_ID}`,
            form.current,
            `${process.env.REACT_APP_PUBLIC_KEY}`)
            .then(() => {
                alert("Mensaje enviado :)")
                window.location.replace('');
            }, (error) => {
                alert(error.text)
            });
    };
    ////// FORMULARIO - EMAILJS/////

    return (
        <><ContainerSectionForm id="contact">
            <ContainerForm>
                <TextSendMe>Envíame un Mensaje</TextSendMe>
                <SpanText>¿Tiene alguna pregunta o propuesta, o solo desea saludarme? :)</SpanText>

                <ContainerIconsAndForm>
                    <ContainerIconsDate>
                        <ContainerIcons>
                            <ContainerIconAndDate>
                                <StyleIcons as={SiGooglemaps} />
                                <TextDate>Puno, Perú</TextDate>
                            </ContainerIconAndDate>
                            <ContainerIconAndDate>
                                <StyleIcons as={IoCall} />
                                <TextDate>+51 962 731 736</TextDate>
                            </ContainerIconAndDate>
                            <ContainerIconAndDate>
                                <StyleIcons as={IoMailSharp} />
                                <TextDate>mayconyucra@gmail.com</TextDate>
                            </ContainerIconAndDate>
                        </ContainerIcons>
                    </ContainerIconsDate>


                    <FormStyles ref={form} onSubmit={sendEmail} >
                        <ContainerNameEmail>
                            <ContainerName>
                                <Input type="text" name="name" required placeholder="Nombres y Apellidos" />
                            </ContainerName>
                            <ContainerEmail>
                                <Input type="email" name="email" required placeholder="Su correo" />
                            </ContainerEmail>
                        </ContainerNameEmail>
                        <ContainerMessage>
                            <Textarea rows="5" name="message" required placeholder="Su mensaje" />
                        </ContainerMessage>
                        <ContainerButtonSend>
                            <ButtonSend type="submit" value="Enviar" />
                        </ContainerButtonSend>
                    </FormStyles>

                </ContainerIconsAndForm>
            </ContainerForm>
        </ContainerSectionForm>
        </>
    )
}

export default Contact
