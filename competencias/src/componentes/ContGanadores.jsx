import { useEffect, useState } from 'react';
import axios from 'axios';
import './Ganadores.css'
import Ganador from './Ganador';




function ContGanadores(){

    const [ganadores, setGanadores] = useState([]);

    useEffect(() => {
        const fetchGanadores = async () => {
            try {
                const response = await axios.get('http://localhost:4000/api/datosGanadores');
                console.log(response.data)
                setGanadores(response.data);
            } catch (error) {
                console.error('Error obteniendo los competidores', error);
            }
        };
        

        fetchGanadores();
    }, []);

    return(
        <div className='ganadores'>
        {ganadores.length > 0 ? (
                ganadores.map(item => (
                    <Ganador 
                        key={item._id}
                        lugar={item.posicion} 
                        tiempo={item.tiempo} 
                        nombre={item.nombre} 
                        competencia={item.competencia} 
                    />
                ))
            ) : (
                <p>No hay registros disponibles.</p>
            )}
        </div>
    )
};

export default ContGanadores