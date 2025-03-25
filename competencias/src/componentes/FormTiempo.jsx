/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import axios from 'axios';
import './Forms.css'
import {useForm} from 'react-hook-form'
import {registerTiempoRequest} from '../api/tiempoPost'


function FormTiempo(){
        const { register, handleSubmit, reset } = useForm();
        const [message, setMessage] = useState('');
        const [errorMessage, setErrorMessage] = useState('');
        const [competencias, setCompetencias] = useState([]);
        const [atletas, setAtletas] = useState([]);
        const [selectedCompetencia, setSelectedCompetencia] = useState('');
        const [filteredAtletas, setFilteredAtletas] = useState([]);
        const [selectedAtleta, setSelectedAtleta] = useState('');
        

        useEffect(() => {
           const fetchExistingCompetencias = async () => {
                try {
                    const response = await axios.get('http://localhost:4000/api/datosCompetencia'); 
                    setCompetencias(response.data);
                } catch (error) {
                    console.error("Error al obtener los registros existentes:", error);
                }
            };
            const fetchExistingAtletas = async () => {
                try {
                    const response = await axios.get('http://localhost:4000/api/datosRegisrosCompetencia'); 
                    setAtletas(response.data);
                    console.log(atletas)
                } catch (error) {
                    console.error("Error al obtener los registros existentes:", error);
                }
            };
    
            fetchExistingCompetencias();
            fetchExistingAtletas();
        }, []);
    
   
        const handleSelectChangeComp = (event) => {
            const competenciaId = event.target.value;
            setSelectedCompetencia(competenciaId);
    
            // Filtrar atletas según la competencia seleccionada
            const atletasFiltrados = atletas.filter(atleta => atleta.competencia === competenciaId);
            setFilteredAtletas(atletasFiltrados);
        };
        const handleSelectChangeAtle = (event) => {
            setSelectedAtleta(event.target.value);
        };

         //Opcion para que la fecha se muestre unicamnete el dia, mes y año

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        return date.toLocaleDateString('es-ES', options);
    };
      //Registro del formulario
      
      const onSubmit = handleSubmit(async (values) => {
        console.log("Valores enviados:", values); 
    
        // Verificación de duplicados de las competencias 
        const isDuplicateComp = competencias.some(record => 
            record.competencia === selectedCompetencia &&
            record.nombre === values.nombre &&
            record.tiempo === values.tiempo &&
            record.posicion === values.posicion
        );
    
        if (isDuplicateComp) {
            setErrorMessage('Este registro ya existe. Por favor, verifica los datos.');
            return;
        }
        const lugaresOcupados = competencias.filter(record => record.competencia === selectedCompetencia)
        .map(record => record.posicion);

        if (lugaresOcupados.includes(values.posicion)) {
            setErrorMessage(`Ya hay un atleta registrado en ${values.posicion}.`);
            return;
        }
      
        try {
            const res = await registerTiempoRequest(values);
            console.log("Respuesta del servidor:", res); 
            reset(); 
            setMessage('Registrado con éxito!');
            setErrorMessage('');
            setTimeout(() => {
                setMessage('');
                // onClose(); 
            }, 3000);
        } catch (error) {
            console.error("Error al registrar la competencia:", error.response ? error.response.data : error);
            setErrorMessage('Error al registrar la competencia. Inténtalo de nuevo.');
        }
    });
    
    return(
   <>
            <form onSubmit={onSubmit} className='formTiempo'>
                <label>Selecciona la Competencia en la que participo el atleta</label>
                <select className='categoria' onChange={handleSelectChangeComp}  {...register( 'competencia', { require : true })}>  
                <option value="">Selecciona una Competencia</option>
                    {competencias.map(competencia => (
                            <option key={competencia._id} value={competencia._id}>
                                {competencia.competencia}- {competencia.fecha ? formatDate(competencia.fecha) : 'Fecha no disponible'}
                            </option>
                        ))}
                </select>
                <label>Selecciona el Nombre del atleta</label>
                <select className='categoria' onChange={handleSelectChangeAtle} {...register( 'nombre', { require : true })}>  
                <option value="">Selecciona nombre del atleta</option>
                    {filteredAtletas.map(atleta => (
                        <option key={atleta._id} value={atleta._id}>
                            {atleta.nombre}
                        </option>
                    ))}
                </select>
                <label>Ingresa el tiempo del atleta en la competencia<input className='categoria' type='text' {...register( 'tiempo', { require : true })} /></label>
                
                <button type='submit' className="boton">Registrar Tiempo</button>
                
            </form>
            {errorMessage}
            {message}
            
            </>
    )
};

export default FormTiempo