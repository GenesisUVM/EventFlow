import {useState} from 'react';
import { Link} from 'react-router-dom';
import './Forms.css'
import {useForm} from 'react-hook-form'
import {registerRequest} from '../api/auth'


function FormCreaUsuario(){

    /*Logica para limpiar el formulario y mostrar un mensjae de exito si se registra correctamente */
    const [formData, setFormData] = useState({
        nombre: '',
        correo: '',
        numero: '',
        contrasena:'',
        categoria:'',
        rol:''
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
    const { register, handleSubmit } = useForm();

    const onSubmit = handleSubmit(async(values, event) => {
        console.log(values);
        const res = await registerRequest(values)
        console.log(res)

        event.preventDefault();

        setFormData({
            nombre: '',
            correo: '',
            numero: '',
            contrasena:'',
            categoria:'',
            rol:''
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
        <form onSubmit={onSubmit} className='formCrear'>
            <label className='label'>Ingrese Nombre<input type="text" name="nombre" className="input" {...register( 'nombre', { require : true })} onChange={handleChange} value={formData.nombre}/></label>
            <label className='label'>Ingrese Correo<input type="email" name="correo" className="input" {...register( 'correo', { require : true })} onChange={handleChange} value={formData.correo}/></label>
            <label className='label'>Ingrese Contraseña<input type="text" name="contrasena" className="input" {...register( 'contrasena', { require : true })} onChange={handleChange} value={formData.contrasena}/></label>
            <label className='label'>Ingrese Telefono<input type="number" name="telefono" className="input" {...register( 'numero', { require : true })} onChange={handleChange} value={formData.numero}/></label>
            <label className='label'>Ingrese Categoria en que compite<input type="text" name="categoria" className="input" {...register( 'categoria', { require : true })} onChange={handleChange} value={formData.categoria}/></label>
            <label className='label'>Ingrese rol<input type="text" name="rol" className="input" {...register( 'rol', { require : true })} onChange={handleChange} value={formData.rol}/></label>
            <button type='submit' className="botonIngresar">Ingresar</button>
            <Link to={'/usuarios'} className="botonIngresar">Registrar</Link>
            
        </form>
        <p>{message}</p>
        </div>
    )
};

export default FormCreaUsuario