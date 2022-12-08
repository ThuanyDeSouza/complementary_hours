import React from 'react'
import Home from './pages/home';
import Login from './pages/login';
import {Route, Routes, BrowserRouter} from "react-router-dom"
import Certificate from './pages/certificates';


const AppRouter = () => {
  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route element = { <Login/> }  path="/" exact />
            <Route element = { <Home/> }  path="/home" />
            <Route element = { <Certificate/> }  path="/certificates" />
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default AppRouter;