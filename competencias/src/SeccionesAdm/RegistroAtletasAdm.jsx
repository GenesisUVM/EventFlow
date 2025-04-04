import '../SeccionesUsuarios/Usuario.css'
import FormRegistroAtletas from '../componentes/Forms/FormRegistroAtletas';
import NavBar from '../componentes/NavBar';
import FooterAdm from '../componentes/FooterAdm';

function RegistroAthletasAdm(){
    return(
        <div className='registroAtletas'>
        <NavBar />
        <h2 className='titulosU'>Registro Atletas</h2>
        <FormRegistroAtletas />
        <FooterAdm />
        </div>
    )
};

export default RegistroAthletasAdm;