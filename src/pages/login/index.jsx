import React from 'react'
import { useState } from 'react'
import Botao from '../../components/Botao';
import { Cabecalho } from '../../components/Cabecalho';
import CamposLogin from '../../components/CamposLogin';
import './styles.css'
import { useNavigate } from "react-router-dom";
import Axios from 'axios'
import { url } from '../../global';
import { configure } from '@testing-library/react';

const Login = (props) => {

    const navigate = useNavigate();
    localStorage.clear()

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

const aoSalvar = async (evento) => {
    evento.preventDefault()
    try {
    const res = await Axios.post(`${url}login`, {
        username: username,
        password: password
    })
    localStorage.setItem("Authorization", res.data.token)
    localStorage.setItem("Nome", username)
    navigate({
        pathname: "/home",
    })
    } catch(e) {
        alert(e.response.data.error)
    }
}

    return (
        <>
            <div className='login'>
                <div className='cabecalho'>
                    <Cabecalho/>
                </div>
            <section className='formulario'>
                <form onSubmit={aoSalvar}>
                        <h1>Welcome back!</h1>
                        <h3>Sign in to manage your students</h3>
                        <h3>complementary hours.</h3>
                <div>
                <CamposLogin 
                    obrigatorio={true}  
                    placeholder="Username"
                    valor={username}
                    aoAlterado={valor => setUsername(valor)}
                />
                <CamposLogin 
                    obrigatorio={true} 
                    placeholder="Password"
                    valor={password}
                    aoAlterado={valor => setPassword(valor)}
                />
                </div>
                <h5>login is managed by your organization</h5>
                <Botao>
                    Sign In
                </Botao>
            </form>
        </section>
            </div>
        </>
        )
}

export default Login;