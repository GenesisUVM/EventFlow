import 'vite/modulepreload-polyfill'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import InicioAdmin from './InicioSesiones/InicioAdm';
import CreacionUsuario from './InicioSesiones/CreacionUsuario';
import ConfAdm from './InicioSesiones/Configuracion';
import CompetenciasCreadas from './SeccionesAdm/CompetenciasCreadas';
import CrearCompetencia from './SeccionesAdm/CrearCompetencias';
import Ganadores from './SeccionesAdm/Ganadores';
import CompetenciasDisponibles from './SeccionesUsuarios/CompetenciasDisponibles';
import CompetenciasFinalizadas from './SeccionesUsuarios/CompetenciasFinalizadas';
import RegistroAthletas from './SeccionesUsuarios/RegistroAtletas';
import TiempoAtletas from './SeccionesAdm/TiemposAtletas';
import ProtectedRoute from './hooks/ProtectedRoute';

function App() {
   return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<InicioAdmin  />} />
        <Route path='/crearUsuario' element={<CreacionUsuario  />} />
        <Route path='/competencias' element={<CompetenciasCreadas  />} />
        <Route path='/competenciasDisponibles' element={<CompetenciasDisponibles  />} />
        <Route path='/competenciasFinalizadas' element={<CompetenciasFinalizadas  />} />
        <Route path='/registroAthletas' element={<RegistroAthletas  />} />
        <Route element={<ProtectedRoute />}>
        <Route path='/configuracion' element={<ConfAdm  />} />
        <Route path='/crearCompetencia' element={<CrearCompetencia  />} />
        <Route path='/registroTiempoAthletas' element={<TiempoAtletas  />} />
        <Route path='/ganadores' element={<Ganadores  />} />
        
        </Route>
      </Routes> 
    </BrowserRouter> 
  )
}

export default App
