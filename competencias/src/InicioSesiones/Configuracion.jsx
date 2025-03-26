import './InicioSesiones.css'
import ContConfig from '../componentes/ContConf'
import NavBar from '../componentes/NavBar'


function ConfAdm(){
    return(
        <div className='configAdmin'>
            <NavBar />
            <ContConfig />
        </div>
    )
};

export default ConfAdm