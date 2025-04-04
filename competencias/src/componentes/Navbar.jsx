import {Link} from 'react-router-dom';
import './NavBar.css'
import conf from '../img/configuracion.png'
import Nav from 'react-bootstrap/Nav';

function NavBar(){

    return(
        <Nav className="navBar">
            <h2 className='nombre'>Event Flow</h2>
            <Link to={'/adm/configuracion'}><img src={conf} className='icon' alt='icono configuracion'></img></Link>
        </Nav>
    )
};

export default NavBar