import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { login } from "../utils/api";

function LoginPage({ loginSuccess }) {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const onEmailChangeHandler = (event) => {
        setEmail(event.target.value);
    }

    const onPasswordChangeHandler = (event) => {
        setPassword(event.target.value);
    }

    async function onLogin(event) {
        event.preventDefault();
        
        const { error, data } = await login({ email, password});

        if (!error) {
            loginSuccess(data);
        }
    }

    return (
        <section className='login-page'>
            <h2>Silakan masuk untuk melanjutkan ...</h2>
            <div className='login-input'>
                <input type="email" placeholder='Email' value={email} onChange={onEmailChangeHandler} />
                <input type="password" placeholder='Password' value={password} onChange={onPasswordChangeHandler} />
                <button type="button" onClick={onLogin}>Masuk</button>
            </div>
            <p>Belum punya akun? <Link to="/register">Daftar di sini.</Link></p>
        </section>
    );
}

LoginPage.propTypes = {
    loginSuccess: PropTypes.func.isRequired,
}

export default LoginPage;