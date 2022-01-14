import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Logado from './pages/Logado';


export default function Rotas() {
  return(
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Logado" element={<Logado />} />
      </Routes>
    </BrowserRouter>
  );
}