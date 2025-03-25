import {Link} from 'react-router-dom';
import './NavBar.css'
import logo from '../img/usuario.png'
import conf from '../img/configuracion.png'
import Nav from 'react-bootstrap/Nav';

function NavBar(){

    return(
        <Nav className="navBar">
            <Link to={'/'}><img src={logo} className='logo' alt='logo'></img></Link>
            <h2 className='nombre'>Athelesync</h2>
            <Link to={'/configuracion'}><img src={conf} className='icon' alt='icono configuracion'></img></Link>
        </Nav>
    )
};

export default NavBar