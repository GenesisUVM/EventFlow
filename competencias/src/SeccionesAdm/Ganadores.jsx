import './Adm.css'
import NavBar from '../componentes/NavBar';
import FooterAdm from '../componentes/FooterAdm';
import TiempoAtletas from './TiemposAtletas';

//Seccion administrador

function Ganadores(){
    
    return(
        <div className='seccionGanadores'>
        <NavBar />
        <TiempoAtletas />
        <FooterAdm />
        </div>
    )
};

export default Ganadores