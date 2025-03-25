import  { useEffect, useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { registerCompetenciaRequest } from '../api/registerAuth.js';

function FormRegistroAtletas() {
    const { register, handleSubmit, reset } = useForm();
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [competencias, setCompetencias] = useState([]);
    const [selectedCompetencia, setSelectedCompetencia] = useState('');
    const [existingRecords, setExistingRecords] = useState([]);
    
    //Logica para enviar los datos del formulario a la base de datos 
    //Y limpiar el formulario mostrando un mensaje de exito si se registra correctamente 

    useEffect(() => {
        const fetchCompetencias = async () => {
            try {
                const response = await axios.get('http://localhost:4000/api/datosCompetencia');
                setCompetencias(response.data);
            } catch (error) {
                console.error("Error al obtener las competencias:", error);
            }
        };

        const fetchExistingRecords = async () => {
            try {
                const response = await axios.get('http://localhost:4000/api/datosCompetencia'); 
                setExistingRecords(response.data);
            } catch (error) {
                console.error("Error al obtener los registros existentes:", error);
            }
        };

        fetchCompetencias();
        fetchExistingRecords();
    }, []);

    const handleSelectChange = (event) => {
        setSelectedCompetencia(event.target.value);
    };
    //Opcion para que la fecha se muestre unicamnete el dia, mes y año

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        return date.toLocaleDateString('es-ES', options);
    };

    const onSubmit = handleSubmit(async (values) => {
        console.log("Valores enviados:", values); 
    
        // Verificación de duplicados
        const isDuplicate = existingRecords.some(record => 
            record.nombre === values.nombre &&
            record.edad === values.edad &&
            record.competencia === selectedCompetencia &&
            record.metodo_pago === values.metodo_pago
        );
    
        if (isDuplicate) {
            setErrorMessage('Este registro ya existe. Por favor, verifica los datos.');
            return;
        }
    
        try {
            const res = await registerCompetenciaRequest(values);
            console.log("Respuesta del servidor:", res); 
            reset(); 
            setMessage('Registrado con éxito!');
            setErrorMessage('');
            setTimeout(() => {
                setMessage('');
                // onClose(); 
            }, 3000);
        } catch (error) {
            console.error("Error al registrar la competencia:", error);
            setErrorMessage('Error al registrar la competencia. Inténtalo de nuevo.');
        }
    });

    return (
        <div className="modalCont">
            <form className='formModal' onSubmit={onSubmit}>
                <label className='label'>Nombre del atleta<input className='inputsecond' type="text" {...register('nombre', { required: true })} /></label>
                <label className='label'>Edad del atleta<input className='inputsecond' type="number" {...register('edad', { required: true })} /></label>
                <label className='label'>Competencia a inscribirse 
                    <select className='categoria'  onChange={handleSelectChange} {...register('competencia', { required: true })}>
                        <option value="">Seleccione una competencia</option>
                        {competencias.map(competencia => (
                            <option key={competencia._id} value={competencia._id}>
                                {competencia.competencia} - {competencia.fecha ? formatDate(competencia.fecha) : 'Fecha no disponible'}
                            </option>
                        ))}
                    </select>
                </label>
                <label>Selecciona Metodo de pago para Inscripcion
                    <select className='inputsecond' {...register('metodo_pago', { required: true })}>
                        <option value="Tarjeta de credito">Tarjeta de Credito</option>
                        <option value="Tarjeta de debito">Tarjeta de Debito</option>
                        <option value="Transferencia Bancaria">Transferencia Bancaria</option>
                        <option value="Efectivo">Efectivo</option>
                    </select>
                </label>
                <button type="submit" className='boton'>Enviar</button>
            </form>
            {message && <p>{message}</p>}
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        </div>
    );
}

export default FormRegistroAtletas;