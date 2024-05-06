import React, { useState } from 'react';

const Login = () => {
    const [inputRegister, setInputRegister] = useState('');
    const [text, setText] = useState('');

    const handleInputRegister = (event) => {
        setInputRegister(event.target.value);
    }

    const handleText = () => {
        let validacionLetra = inputRegister.includes("O") || inputRegister.includes("o")
        if (validacionLetra){
            alert("Por favor, ¡Nombres de usuario sin la letra o!")
        }
        if (inputRegister == "" || validacionLetra){
            alert("Usuario inválido para registrarse")
            return
        }
        alert("¡Usuario registrado correctamente!")
        setText(inputRegister);
    }

    return (
        <div>
            <input value={inputRegister} onChange={handleInputRegister} />
            <button onClick={handleText}>Registrarse</button>
            <p>{text}</p>
        </div>
    );
}

export default Login;
