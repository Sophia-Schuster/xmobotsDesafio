import './App.css';
import React, {useState, useEffect} from 'react';
//import logo from './logo.svg'; remover pois apaguei o logo
//import './App.css'; remover pois tirei todos os css pre determinados
//sempre que eu for usar html em uma pagina preciso importar o React! 
//JSX - javracsript + HTML 
import Landing from './LandingPage/index'
import ProfileModal from './Components/ProfileComponent/ProfileModal';
import Modal from './Components/LoginComponent/LogModal';
import RegModal from './Components/RegisterComponent/RegisterModal';
import FormModal from './Components/FormComponent/FormModal'
import './assets/styles/global.css' //se nao importar meus arquivos de estilizacao nao funciona
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/login' element={<Modal />} />
          <Route path='/register' element={<RegModal />} />
          <Route path='/main' element={<ProfileModal />} />
          <Route path='/form' element={<FormModal />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
