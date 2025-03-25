import { Link} from 'react-router-dom';
import link1 from '../img/modo-nocturno.png'
import link2 from '../img/cursor.png'
import link3 from '../img/lapiz.png'
import link4 from '../img/basura.png'
import './Contenedores.css'
import Card from 'react-bootstrap/Card';


function ContConfig(){
    return(
        <Card className="contConfiguracion">
            <a ><img src={link1} alt="logo Modo nocturno" className='imgIcon'/></a><p className='enlaceC'>Modo Nocturno</p>
            <a ><img src={link2} alt="logo Cambiar Contraseña" className='imgIcon'/></a><p className='enlaceC'>Cambio Contraseña</p>
            <a ><img src={link3} alt="logo Editar Usuarios" className='imgIcon'/></a><p className='enlaceC'>Editar Usuarios</p>
            <a ><img src={link4} alt="logo Eliminar Usuarios" className='imgIcon'/></a><p className='enlaceC'>Eliminar Usuarios</p>
            <div></div><Link to={'/'} className='enlaceC'>Cerrar Sesion</Link>
        </Card>
    )
};

export default ContConfig