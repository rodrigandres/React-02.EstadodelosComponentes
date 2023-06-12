import React, { useState } from "react";
import {Form, Button} from 'react-bootstrap';

function Formulario({setMessage, setBsStyle}) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const dataValidate = (e) => {
        e.preventDefault();

        //Validar Email
        if(!isValidEmail(email)){
            setMessage('Por favor, ingrese un email válido')
            return;
        }

        //Validar formato contraseñas
        if(password!==confirmPassword){
            setMessage('Las contraseñas no coinciden')
            return;
        }

        //Validar campos vacios
        if (name === '' || email === '' || password === '' || confirmPassword === ''){
            setMessage('Completa todos los campos')
            return;
        }
        setName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setMessage('');

        setMessage('Formulario enviado correctamente');
        setBsStyle('success');
    }

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    return (
        <>
            <Form onSubmit={dataValidate}>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Control type="text" placeholder="Nombre" value={name} onChange={(e) => setName(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="tuemail@ejemplo.com" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPasswordConfirm">
                <Form.Control type="password" placeholder="Confirma tu contraseña" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
            </Form.Group>
            <Button className="btn btn-success btn-block w-100 pt-1 pb-1" type="submit">Registrarse</Button>
            </Form>
            </>
        );
        }

    export default Formulario;