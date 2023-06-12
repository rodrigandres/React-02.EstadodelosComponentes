import React, { useState } from "react";
import SocialButton from "./SocialButton";
import Formulario from "./Formulario";
import AlertMessage from "./Alert"

function Registro() {
    const [message, setMessage] = useState('');
    const [bsStyle, setBsStyle] = useState('danger');

return (
    <>
    <div className='Card'>
    <h1>Crea tu Cuenta</h1>
    <SocialButton/> 
    <p>o usa tu email para registrarte</p>
    <Formulario setMessage={setMessage} setBsStyle={setBsStyle}/>
    <AlertMessage message={message} bsStyle={bsStyle} show={message !== ''}/>
    </div>
    </>
)
}

export default Registro
