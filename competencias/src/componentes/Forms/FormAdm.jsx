import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Campos from "./Campos";


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
  
        navigate("adm/crearCompetencia"); // Redirigir a página protegida
      } catch (error) {
        console.error("Error en login:", error);
        setError(error.response?.data?.message || "Error al iniciar sesión");
      }
    };
  
    return(
        <div className='contForm'>
        <Form onSubmit={handleSubmit(onSubmit)} className='formUsu'>
        {error && <p className="error">{error}</p>}
        <Campos
          label="Correo"
          name="correo"
          type="email"
          register={register}
          errors={errors}
          
        />
        <Campos
          label="Contraseña"
          name="contrasena"
          type="password"
          register={register}
          errors={errors}
        />
        <Button variant="primary" type="submit">
          Iniciar Sesión
        </Button>
    
        </Form>
        <Link to={'/crearUsuario'} className="enlaceC">Crear Usuario Nuevo</Link>
          
        </div>
    )
};

export default FormAdm;