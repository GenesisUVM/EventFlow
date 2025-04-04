/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom';
import './Contenedores.css'
import Card from 'react-bootstrap/Card';



function ContCompetenciasAdm({competencia, categoria, sexo, fecha,tiempo_limite,atletas}){
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/adm/registroAthletas'); 
    };
    
    return(
        <Card className='contCCreadas' onClick={handleClick}>
            <Card.Text className='textoCompetencias'>Competencia de {competencia}</Card.Text>
            <Card.Text className='textoCompetencias'>Fecha {fecha}</Card.Text>
            <Card.Text className='textoCompetencias'>Categoria de {categoria}</Card.Text>
            <Card.Text className='textoCompetencias'>Sexo {sexo}</Card.Text>
            <Card.Text className='textoCompetencias'>Lista de Competidores</Card.Text>
            <ul className='listaAtletas'>
                {atletas.map(atleta => (
                    <li key={atleta._id}>
                        {atleta.nombre} - {atleta.edad} años
                    </li>
                ))}
            </ul>
            <Card.Text className='textoCompetencias'>Tiempo limite de inscripcion: {tiempo_limite}</Card.Text>
        
        </Card>
    )
};

export default ContCompetenciasAdm;