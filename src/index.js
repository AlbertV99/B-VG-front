import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes,Route,} from "react-router-dom";
import Seguridad from './componentes/menu/Seguridad'
import Documentos from './componentes/menu/Documentos'
import Creditos from './componentes/menu/Creditos'
import Reportes from './componentes/menu/Reportes'
import Estadisticas from './componentes/menu/Estadisticas'
import {Panel as Parametros} from './componentes/Parametro/Panel'
import {Panel as Agrupador} from './componentes/AgrupadorMenu/Panel' 
import {Panel as Banca} from './componentes/Banca/Panel' 
import {Panel as Conceptos} from './componentes/Concepto/Panel' 
import {Panel as Notificaciones} from './componentes/Notificacion/Panel' 
import {Panel as Perfil} from './componentes/Perfil/Panel' 
import {Panel as Usuario} from './componentes/Usuario/Panel' 



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<App />}>
          <Route path="seguridad" element={<Seguridad />} />
          <Route path="parametros" element={<Parametros />} />
          <Route path="agrupador" element={<Agrupador />} />
          <Route path="banca" element={<Banca />} />
          <Route path="concepto" element={<Conceptos />} />
          <Route path="notificacion" element={<Notificaciones />} />
          <Route path="perfil" element={<Perfil />} />
          <Route path="usuario" element={<Usuario />} />
          <Route path="documentos" element={<Documentos />} />
          <Route path="creditos" element={<Creditos />} />
          <Route path="reportes" element={<Reportes />} />
          <Route path="estadisticas" element={<Estadisticas />} />
        </Route>
    </Routes>
  </BrowserRouter>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
