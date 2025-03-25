import './Usuario.css'
import NavBar from '../componentes/NavBar';
import FooterUsuarios from '../componentes/FooterUsuarios';
import ContGanadores from '../componentes/ContGanadores';


//Seccion usuarios

function CompetenciasFinalizadas(){
    return(
        <div className='ganadoresUsuarios'>
        <NavBar />
        <ContGanadores />
        <FooterUsuarios />
        </div>
    )
};

export default CompetenciasFinalizadas