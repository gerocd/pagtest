import React from "react";
import { useState } from "react";
import './homelog.css'
import { Link } from "react-router-dom";

const HomeReg = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [registered, setRegistered] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }

    const handleRegister = () => {
        if (localStorage.getItem(username)) {
            alert('El usuario ya esta registrado');
            return;
        }

        localStorage.setItem(username, password);
        setRegistered(true);

        setUsername('');
        setPassword('');
    }

    return (

        <div className="content_box">
            <div className="caja">
                <div className="box_img">
                    <img src="/O.jpg" alt="logo" />
                </div>
                <h1 className='txt_log'>Register</h1>
                <form>
                    <div className="content__main">
                        {registered ? (
                            <h2>Registro Exitoso</h2>)
                            : (<div className='content__main_inp' >
                                <div className='content__main_inp'>
                                    
                                    <input
                                        className="box_txt"
                                        type="text"
                                        placeholder="Usuario"
                                        value={username}
                                        onChange={handleUsernameChange}
                                    />
                                </div>
                                <div className='content__main_inp'>
                                    
                                    <input
                                        className="box_txt"
                                        type="password"
                                        placeholder="Contraseña"
                                        value={password}
                                        onChange={handlePasswordChange}
                                    />
                                </div>
                                <div className="contenedor_btn">
                                    <Link to='/login'>
                                        <button onClick={handleRegister}> Registrarse </button>
                                        </Link>
                                </div>

                            </div>
                            )}
                    </div>
                </form>
            </div>
        </div>
    )
}
export default HomeReg