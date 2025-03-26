import { useForm } from "react-hook-form";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Form.css";
import Campos from "./Campos";


function FormCreaUsuario(){
// Configura el formulario con react-hook-form
const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
        nombre: "",
        correo: "",
        numero:"",
        contrasena: "",
        categoria:"",
        rol:""
    },
  });

  // Maneja el envío del formulario
  const onSubmit = async (data) => {
    try {
      console.log("Enviando datos:", data); // Verifica qué se está enviando
      const response = await axios.post("http://localhost:4000/api/registro", JSON.stringify(data), {
        headers: {
          "Content-Type": "application/json",
        },
      });
    console.log("Respuesta del servidor:", response.data); 
      reset(); // Resetea el formulario después de enviar
    } catch (error) {
      console.error("Error al registrar el usuario:", error);
    }
  };


    return(
      
            <Form onSubmit={handleSubmit(onSubmit)} className="registroResponsable">
        <h3>Formulario Registro Usuario</h3>

        <Campos
          label="Nombre"
          name="nombre"
          type="name"
          register={register}
          errors={errors}
        />
       
        <Campos
          label="Correo"
          name="correo"
          type="email"
          register={register}
          errors={errors}
        />
        
        <Campos
          label="Contrasena"
          name="contrasena"
          type="password"
          register={register}
          errors={errors}
        />
        <Campos
          label="Numero de Telefono"
          name="numero"
          type="number"
          register={register}
          errors={errors}
        />
        <Campos
          label="Categoria en la que compite"
          name="categoria"
          type="text"
          register={register}
          errors={errors}
        />
         <Campos
          label="Rol"
          name="rol"
          type="text"
          register={register}
          errors={errors}
        />

        <Button variant="primary" type="submit">
          Registrar
        </Button>
      </Form>
       
    )
};

export default FormCreaUsuario