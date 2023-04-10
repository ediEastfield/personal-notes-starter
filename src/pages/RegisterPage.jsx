import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../utils/api";

function RegisterPage() {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const navigate = useNavigate();

    const onNameChange = (event) => {
        setName(event.target.value);
    }

    const onEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const onPasswordChange = (event) => {
        setPassword(event.target.value);
    }

    async function onRegisterHandler(event) {
        event.preventDefault();

        const { error } = await register({
            name,
            email,
            password
        });
        
        if (!error) {
            navigate('/');
        }
    }

    return (
        <section className='register-page'>
            <h2>Gak perlu serius-serius ya isinya ...</h2>
            <div className='register-input'>
                <input type="text" placeholder="Nama" value={name} onChange={onNameChange} />
                <input type="email" placeholder="Email" value={email} onChange={onEmailChange} />
                <input type="password" placeholder="Password" autoComplete='current-password' value={password} onChange={onPasswordChange} />
                <button type="button" onClick={onRegisterHandler}>Register</button>
            </div>
            <p>Kembali ke <Link to="/">Masuk</Link></p>
        </section>
    )
}

export default RegisterPage;