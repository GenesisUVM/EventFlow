/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import Campos from './Campos';
import SelectF from './SelectFields';

function FormRegistroAtletas() {
    const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm();
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [competencias, setCompetencias] = useState([]);
    const [selectedCompetencia, setSelectedCompetencia] = useState('');
    const [existingRecords, setExistingRecords] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [compResponse, recordsResponse] = await Promise.all([
                    axios.get('http://localhost:4000/api/datosCompetencia'),
                    axios.get('http://localhost:4000/api/datosRegisrosCompetencia')
                ]);
                console.log("Datos recibidos del backend:", compResponse.data); 
                setCompetencias(compResponse.data);
                setExistingRecords(recordsResponse.data);
            } catch (error) {
                console.error("Error al obtener los datos:", error);
            }
        };
        fetchData();
    }, []);

    const handleSelectChange = (event) => {
        const value = event.target.value;
        setSelectedCompetencia(value);
        setValue('competencia', value); // Sincronizar con react-hook-form
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        return date.toLocaleDateString('es-ES', options);
    };

    const onSubmit = async (data) => {
        if (!data.competencia) {
            setErrorMessage('Debes seleccionar una competencia.');
            return;
        }

        
        try {
            console.log("Enviando datos:", data);
            const response = await axios.post("http://localhost:4000/api/registroCompetencia", data, {
                headers: { "Content-Type": "application/json" },
            });
            console.log("Respuesta del servidor:", response.data);
            reset();
            setMessage('Registro exitoso!');
            setErrorMessage('');
            setTimeout(() => setMessage(''), 3000);
        } catch (error) {
            console.error("Error al registrar el tiempo:", error);
            setErrorMessage(error.response?.data?.message || 'Error al registrar la competencia.');
        }
    };

    return (
        <div className="modalCont">
            <form className='formModal' onSubmit={handleSubmit(onSubmit)}>
                <Campos 
                    label="Nombre del atleta"
                    name="nombre"
                    type="text"
                    register={register}
                    errors={errors}
                />

                <Campos 
                    label="Edad del atleta"
                    name="edad"
                    type="number"
                    register={register}
                    errors={errors}
                />

                <SelectF
                    label="Competencia a inscribirse"
                    name="competencia"
                    options={competencias.map(competencia => ({
                        value: competencia._id,
                        label: `${competencia.competencia} - ${competencia.fecha ? formatDate(competencia.fecha) : 'Fecha no disponible'}`
                    }))}
                    onChange={handleSelectChange}
                    register={register}
                    errors={errors}
                />

                <SelectF
                    label="Método de pago"
                    name="metodo_pago"
                    options={[
                        { value: "Tarjeta de credito", label: "Tarjeta de Crédito" },
                        { value: "Tarjeta de debito", label: "Tarjeta de Débito" },
                        { value: "Transferencia Bancaria", label: "Transferencia Bancaria" },
                        { value: "Efectivo", label: "Efectivo" }
                    ]}
                    register={register}
                    errors={errors}
                />

                <button type="submit" className='boton'>Enviar</button>
            </form>

            {message && <p style={{ color: 'green' }}>{message}</p>}
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        </div>
    );
}

export default FormRegistroAtletas;
