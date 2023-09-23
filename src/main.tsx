import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';

import { Header } from './components/Header';
import { PokemonPage } from './pages/PokemonPage';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pokemon/:id' element={<PokemonPage />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
