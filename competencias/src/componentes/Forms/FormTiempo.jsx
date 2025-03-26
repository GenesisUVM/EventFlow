import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Form.css';

function FormTiempo() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [competencias, setCompetencias] = useState([]);
    const [atletas, setAtletas] = useState([]);
    const [filteredAtletas, setFilteredAtletas] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [compResponse, atleResponse] = await Promise.all([
                    axios.get('http://localhost:4000/api/datosCompetencia'),
                    axios.get('http://localhost:4000/api/datosRegisrosCompetencia')
                ]);
                setCompetencias(compResponse.data);
                setAtletas(atleResponse.data);
            } catch (error) {
                console.error("Error al obtener los datos:", error);
            }
        };
        fetchData();
    }, []);

    const handleSelectChangeComp = (event) => {
        const competenciaId = event.target.value;
        const atletasFiltrados = atletas.filter(atleta => atleta.competencia === competenciaId);
        setFilteredAtletas(atletasFiltrados);
    };

    const onSubmit = async (data) => {
        try {
            console.log("Enviando datos:", data);
            const response = await axios.post("http://localhost:4000/api/registroTiempo", JSON.stringify(data), {
                headers: { "Content-Type": "application/json" },
            });
            console.log("Respuesta del servidor:", response.data);
            reset();
        } catch (error) {
            console.error("Error al registrar el tiempo:", error);
        }
    };

    return (
        <Form onSubmit={handleSubmit(onSubmit)} className='formTiempo'>
            <Form.Group>
                <Form.Label>Selecciona la Competencia en la que participó el atleta</Form.Label>
                <Form.Select {...register('competencia', { required: true })} onChange={handleSelectChangeComp}>
                    <option value="">Selecciona una Competencia</option>
                    {competencias.map(comp => (
                        <option key={comp._id} value={comp._id}>
                            {comp.competencia} - {new Date(comp.fecha).toLocaleDateString('es-ES')}
                        </option>
                    ))}
                </Form.Select>
                {errors.competencia && <p className="error">Este campo es obligatorio</p>}
            </Form.Group>

            <Form.Group>
                <Form.Label>Selecciona el Nombre del atleta</Form.Label>
                <Form.Select {...register('nombre', { required: true })}>
                    <option value="">Selecciona un atleta</option>
                    {filteredAtletas.map(atleta => (
                        <option key={atleta._id} value={atleta._id}>{atleta.nombre}</option>
                    ))}
                </Form.Select>
                {errors.nombre && <p className="error">Este campo es obligatorio</p>}
            </Form.Group>

            <Form.Group>
                <Form.Label>Ingresa el tiempo del atleta</Form.Label>
                <Form.Control type="text" {...register('tiempo', { required: true })} />
                {errors.tiempo && <p className="error">Este campo es obligatorio</p>}
            </Form.Group>
            <Form.Group>
            <Form.Label>Posición en la competencia</Form.Label>
            <Form.Control 
                type="number" 
                {...register('posicion', { required: true })} 
            />
            {errors.posicion && <p className="error">Este campo es obligatorio</p>}
        </Form.Group>

            <Button type="submit" className="botonCrear">Registrar Tiempo</Button>
        </Form>
    );
}

export default FormTiempo;
