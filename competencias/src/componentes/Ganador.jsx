/* eslint-disable react/prop-types */
import './Ganadores.css'
import foto from '../img/usuario.png'
import Card from 'react-bootstrap/Card';


function Ganador({competencia, lugar, tiempo, nombre}){

    return(
        <Card style={{ width: '18rem' }} className='contCCreadas' >
            <Card.Img variant="top" src={foto} className='imgIcon' />
            <Card.Body>
                <Card.Title>{competencia?.competencia}</Card.Title>
                <Card.Text>{lugar}</Card.Text>
                <Card.Text>{tiempo}</Card.Text>
                <Card.Text>{nombre?.nombre}</Card.Text>
            </Card.Body>
        </Card>
       
    )
};

export default Ganador