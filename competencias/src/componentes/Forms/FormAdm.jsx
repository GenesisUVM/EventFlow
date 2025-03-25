import {useState} from 'react';
import { Link} from 'react-router-dom';
import './Form.css'
import axios from "axios";
import {useForm} from 'react-hook-form'
import { useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import InputField from './InputFields';
import Button from "react-bootstrap/Button";


function FormAdm(){
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [error, setError] = useState("");
    const navigate = useNavigate();
  
    const onSubmit = async (data) => {
      try {
        const response = await axios.post("http://localhost:4000/api/login", data, {
          withCredentials: true, // Para que guarde la cookie del token
        });
  
        console.log("Usuario autenticado:", response.data);
        localStorage.setItem("user", JSON.stringify(response.data)); // Guardar usuario en localStorage
  
        navigate("/tablas"); // Redirigir a página protegida
      } catch (error) {
        console.error("Error en login:", error);
        setError(error.response?.data?.message || "Error al iniciar sesión");
      }
    };
  
    return(
        <div className='contForm'>
        <Form onSubmit={handleSubmit(onSubmit)} className='formUsu'>
        <InputField
          label="Correo"
          name="correo"
          type="email"
          register={register}
          errors={errors}
          
        />
        <InputField
          label="Contraseña"
          name="contrasena"
          type="password"
          register={register}
          errors={errors}
        />
        <Button variant="primary" type="submit">
          Iniciar Sesión
        </Button>
            <Link to={'/competenciasDisponibles'} className="botonIngresar">Ingresar</Link>
    
        </Form>
        <p>{error}</p>
        <Link to={'/crearUsuario'} className="linkContraseña">Crear Usuario Nuevo</Link>
          
        </div>
    )
};

export default FormAdm;