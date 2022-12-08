import React, {useState} from 'react'
import './styles.css'
import Card from '../../components/Card'
import { useSearchParams } from 'react-router-dom'
import Botao from '../../components/Botao'
import Axios from 'axios'
import { url } from '../../global'

const aoSalvar = (evento) => {
    evento.preventDefault()
    alert("salver")
    debugger;
}
const Certificate = ({Nome}) => {
    const [users, setUsers] = useState([]);
    const res = Axios.get(`${url}users`).then((res) => {
        const data = res.data.filter(i => i.role== "student")
        setUsers(data);

    });

    return (
        <div id="Home">
            <form onSubmit={aoSalvar}>
                <div id='Hello'>
                    <h1>Manage certificates</h1>
                    <h2>{localStorage.getItem('Nome')}</h2>
                </div>
                <div id='Cards'>
                    <Card Title={"Ademilson Chagas"} date={null} type={'Certificate'} hours={44}/>
                    <Card Title={"Ademilson Chagas"} date={null} type={'Certificate'} hours={450}/>
                </div>
                <div id='finishDiv'>
                    <Botao>
                        Finish
                    </Botao>
                </div>
            </form>
        </div>
        )
}

export default Certificate;