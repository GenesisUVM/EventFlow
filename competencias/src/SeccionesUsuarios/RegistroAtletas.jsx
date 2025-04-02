import './Usuario.css'
import FormRegistroAtletas from '../componentes/Forms/FormRegistroAtletas';
import NavBar from '../componentes/NavBar';
import FooterUsuarios from '../componentes/FooterUsuarios';

function RegistroAthletas(){
    return(
        <div className='registroAtletas'>
        <NavBar />
        <h2 className='titulosU'>Registro Atletas</h2>
        <FormRegistroAtletas />
        <FooterUsuarios />
        </div>
    )
};

export default RegistroAthletas;