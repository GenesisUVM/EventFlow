import { Link} from 'react-router-dom';
import enlace1 from '../img/mas.png'
import enlace2 from '../img/calendario.png'
import enlace3 from '../img/copa.png'
import './Footer.css'
import Nav from 'react-bootstrap/Nav';


function FooterAdm(){
    return(
        <Nav className="footerAdmi">
            <Link to={'/adm/crearCompetencia'} ><img src={enlace1} alt='Enlaces Vistas Perfiles Usuarios' className='linkIcons' /></Link>
            <Link to={'/adm/competencias'} ><img src={enlace2} alt='Enlaces Vistas Perfiles Usuarios' className='linkIcons' /></Link>
            <Link to={'/adm/registroTiempoAthletas'} ><img src={enlace3} alt='Enlaces Vistas Perfiles Usuarios' className='linkIcons' /></Link>
        </Nav>
    )
};

export default FooterAdm