import { useEffect, useState } from 'react';
import axios from 'axios';
import NavBar from '../componentes/NavBar';
import './Adm.css'
import FooterAdm from '../componentes/FooterAdm';
import ContCompetenciasAdm from '../componentes/ContCompetenciasCAdm';

//Componente seccion Administrativa


 function CompetenciasCreadas(){
    const [competencia, setCompetencia] = useState([]);
    const [atletas, setAtletas] = useState([]);

    useEffect(() => {
        const fetchCompetencia = async () => {
            try {
                const response = await axios.get('http://localhost:4000/api/datosCompetencia');
                setCompetencia(response.data);
            } catch (error) {
                console.error('Error obteniendo la competencia', error);
            }
        };
        const fetchAletas = async () => {
            try {
                const response = await axios.get('http://localhost:4000/api/datosRegisrosCompetencia');
                setAtletas(response.data);
            } catch (error) {
                console.error('Error obteniendo la competencia', error);
            }
        };

        fetchCompetencia();
        fetchAletas();
    }, []);

    //Cambiar el formato de la fecha a solo dia, mes y año
    
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        return date.toLocaleDateString('es-ES', options);
    };

    // Categorías definidas
    const categorias  = [
        'Competencia de aguas abiertas',
        'Natacion',
        'Acuatlon',
        'Triatlon',
        'Atletismo'
    ];

    // Agrupar competencias por categoría
    const groupedCompetencias = categorias.reduce((acc, categoria) => {
        acc[categoria] = competencia.filter(item => item.competencia.toLowerCase() === categoria.toLowerCase());
        return acc;
    }, {});
    

    return(
        <div className='competenciasCreadas'>
        <NavBar />
        {categorias.map(categoria => (
                <div key={categoria}>
                    <h2 className='tituloCategorias'>{categoria.charAt(0).toUpperCase() + categoria.slice(1)}</h2>
                    {groupedCompetencias[categoria].length > 0 ? (
                        groupedCompetencias[categoria].map(item => (
                            <ContCompetenciasAdm 
                                key={item._id}
                                competencia={item.competencia} 
                                categoria={item.categoria} 
                                sexo={item.sexo}
                                relevo={item.relevo}
                                fecha={formatDate(item.fecha)} 
                                tiempo_limite={formatDate(item.tiempo_limite)} 
                                atletas={atletas.filter(atleta => atleta.competencia === item._id)}
                            />
                        ))
                    ) : (
                        <p>No hay competencias registradas en esta categoría.</p>
                    )}
                </div>
            ))}

        <FooterAdm />
         
            
            
        </div>
    )
};

export default CompetenciasCreadas