/* eslint-disable react/prop-types */
;
import './Ganadores.css'
import Ganador from './Ganador';


function ContGanadores({ ganadores }) {
    return (
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
    );
}


export default ContGanadores