import { useEffect, useState } from 'react';
import axios from 'axios';
import './Usuario.css'
import NavBar from '../componentes/NavBar';
import FooterUsuarios from '../componentes/FooterUsuarios';
import ContGanadores from '../componentes/ContGanadores';


//Seccion usuarios

function CompetenciasFinalizadas(){
    const [ganadores, setGanadores] = useState([]);

    useEffect(() => {
        const fetchGanadores = async () => {
            const response = await axios.get('http://localhost:4000/api/datosGanadores');
            console.log(response.data);
            const data = response.data;

            const agrupadoPorCompetencia = data.reduce((acc, item) => {
                const compId = item.competencia._id || item.competencia;
                if (!acc[compId]) acc[compId] = [];
                acc[compId].push(item);
                return acc;
            }, {});

            const ganadoresConPosiciones = Object.values(agrupadoPorCompetencia).flatMap(grupo => {
                grupo.sort((a, b) => parseFloat(a.tiempo.replace(':', '.')) - parseFloat(b.tiempo.replace(':', '.')));
                return grupo.map((item, index) => ({
                    ...item,
                    posicion: index + 1
                }));
            });

            setGanadores(ganadoresConPosiciones);
        };

        fetchGanadores();
    }, []);

    return (
        <div className='ganadoresUsuarios'>
            <NavBar />
            <ContGanadores ganadores={ganadores} />
            <FooterUsuarios />
        </div>
    );
}


export default CompetenciasFinalizadas