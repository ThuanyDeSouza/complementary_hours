import React from 'react'
import './styles.css'
import Card from '../../components/Card'
import { useSearchParams } from 'react-router-dom'
import Axios from 'axios'
import { url } from '../../global'
import { useState } from 'react'

const Home = () => {
    const [users, setUsers] = useState([]);
    const res = Axios.get(`${url}users`).then((res) => {
        const data = res.data.filter(i => i.role== "student")
        setUsers(data);

    });
    return (
        <div id="Home">
                <div id='Hello'>
                    <h1>Hello, {localStorage.getItem("Nome")}</h1>
                </div>
                <div id='Cards'>
                    {users.map(user => {
                       return <Card Title={user.username} date={new Date(user.created_at)} type={'User'} id={user.id}/>    
                    })
                    }
                </div>
        </div>
        )
}

export default Home;