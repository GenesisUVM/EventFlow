import './InicioSesiones.css'
import ContConfig from '../componentes/ContConf'
import FooterAdm from '../componentes/FooterAdm'
import NavBar from '../componentes/NavBar'


function ConfAdm(){
    return(
        <div className='configAdmin'>
            <NavBar />
            <ContConfig />
            <FooterAdm />
        </div>
    )
};

export default ConfAdm