import { Link} from 'react-router-dom';
import enlace2 from '../img/calendario.png'
import enlace3 from '../img/copa.png'
import './Footer.css'
import Nav from 'react-bootstrap/Nav';


function FooterUsuarios(){
    return(
        <Nav className="footerAdmi">
            <Link to={'/competenciasDisponibles'} ><img src={enlace2} alt='Enlaces Vistas Perfiles Usuarios' className='linkIcons' /></Link>
            <Link to={'/competenciasFinalizadas'} ><img src={enlace3} alt='Enlaces Vistas Perfiles Usuarios' className='linkIcons' /></Link>
        </Nav>
    )
};

export default FooterUsuarios