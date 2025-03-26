import {useForm} from 'react-hook-form'
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Form.css'
import Campos from './Campos';
import SelectF from './SelectFields';

 // OBjeto con los options de ambos select

 const competencias = [
    { value: 'Competencia de aguas abiertas', label: 'Competencia de aguas abiertas'},
    { value: 'Natacion', label: 'Natacion' },
    { value: 'Acuatlon', label: 'Acuatlon' },
    { value: 'Triatlon', label: 'Triatlon' },
    { value: 'Atletismo', label: 'Atletismo' }
  ];
  const categorias = [
    {value: 'Infatil 6-12', label:'Infantil 6-12'},
    {value: 'Juvenil 13-17', label:'Juvenil 13-17'},
    {value: 'Adulto 18-30', label:'Adulto 18-30'},
    {value: 'Aldulto 31-49', label:'Adulto 31-49'},
    {value: 'Aldulto 31-49', label:'Adulto 31-49'},
    {value: 'Aldulto 50-70', label:'Adulto 50-70 '},
    {value: 'Aldulto 71 en adelante', label:'Adulto 71 en adelante '},
  ]
  const sexo =[
    {value: 'Femenino', label: 'Femenino'},
    {value: 'Masculino', label: 'Masculino'},
    {value: 'Mixto', label: 'Mixto'},
  ]


function FormCompetencias(){
       
  
    
  const { register,
    handleSubmit,
    reset,
    formState: { errors }, 
} = useForm({
    competencia: '',
    categoria: '',
    sexo: '', 
    relevo :'', 
    fecha:'', 
    tiempo_limite:'', 
    
});


const onSubmit = async (data) => {
    try {
      console.log("Enviando datos:", data); // Verifica qué se está enviando
      const response = await axios.post("http://localhost:4000/api/competencia", JSON.stringify(data), {
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
   
            <Form onSubmit={handleSubmit(onSubmit)} className='formCrearCompetencia'>
                <SelectF
                    label="competencias"
                    name="competencia"
                    options={competencias}
                    register={register}
                    errors={errors}
                />
                <SelectF
                    label="categoria"
                    name="categoria"
                    options={categorias}
                    register={register}
                    errors={errors}
                />
                <SelectF
                    label="sexo"
                    name="sexo"
                    options={sexo}
                    register={register}
                    errors={errors}
                />
                
                

               
                <label>Selecciona si es una competencia de relevo</label>
                <select className='categoria' name="" id="" {...register( 'relevo', { require : true })} > 
                    <option value="si">Si</option>
                    <option value="no">No</option>
                </select>
                <Campos
                    label="Fecha competencia"
                    name="fecha"
                    type="date"
                    register={register}
                    errors={errors}
                    />
                    <Campos
                    label="tiempo limite para registrarse"
                    name="tiempo_limite"
                    type="date"
                    register={register}
                    errors={errors}
                    />
                   <Button type='submit' className="botonCrear">Crear Competencia</Button>
                
            </Form>

            
     
    )
};

export default FormCompetencias