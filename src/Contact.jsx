import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import styled from 'styled-components';
import GlobalColor from './components/GlobalColors';

const ContainerSectionForm = styled.section`
    position: relative;
    height: 100vh;
    min-height: 100vh;
    color: ${GlobalColor.title};

`;
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
        <><ContainerSectionForm >
            <form ref={form} onSubmit={sendEmail}id="contact">
                <label>Nombre</label>
                <input type="text" name="name" required />

                <label>Correo Electrónico</label>
                <input type="email" name="email" required />

                <label>Número de Celular</label>
                <input type="tel" name="number"
                    required />
                <small>+51 912-345-678</small>

                <label>Mensaje</label>
                <textarea name="message" required />

                <input type="submit" value="Enviar" />
            </form>
        </ContainerSectionForm>
        </>
    )
}

export default Contact
