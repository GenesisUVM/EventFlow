import { Link} from 'react-router-dom';
import {useState} from 'react';
import './Forms.css'
import {useForm} from 'react-hook-form'


function FormAdm(){
    /*Logica para limpiar el formulario y mostrar un mensjae de exito si se registra correctamente */
    const [formData, setFormData] = useState({
        correo: '',
        contrasena:''
    });
    const [message, setMessage] = useState('');

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    /*Logica para enviar los datos del formulario a la base de datos */
    const { register, handleSubmit, formState: {errors}, } = useForm();

    const onSubmit = handleSubmit(async(values, event) => {
        console.log(values);
        
        event.preventDefault();

        setFormData({
            correo: '',
            contrasena:''
            
        });

        // Muestra el mensaje de éxito
        setMessage('Registrado con éxito!');
        
        //  Ocultar el mensaje después de unos segundos
        setTimeout(() => {
            setMessage('');
        }, 3000);
    })
    
    return(
        <div className='contForm'>
        <form onSubmit={onSubmit} className="formAdm" >
            <label className='label'>Ingrese Correo<input type="email" name="usuario" className="input" {...register( 'correo', { require : true })} onChange={handleChange} value={formData.correo}/></label>
            <label className='label'>Ingrese Contraseña<input type="text" name="contrasena" className="input" {...register( 'contrasena', { require : true })} onChange={handleChange} value={formData.contrasena}/></label>
            <button type='submit' className="botonIngresar">Ingresar</button>
           <Link to={'/crearCompetencia'} className="botonIngresar">Ingresar</Link>

        </form>
        <p>{message}</p>
        </div>
    )
};

export default FormAdm