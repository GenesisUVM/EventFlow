import './Usuario.css'
import Navbar from '../componentes/Navbar';
import FooterAdm from '../componentes/FooterAdm';
import FormRegistroAtletas from '../componentes/Forms/FormRegistroAtletas';

function RegistroAthletas(){
    return(
        <div className='registroAtletas'>
        <Navbar />
        <h2 className='titulosU'>Registro Atletas</h2>
        <FormRegistroAtletas />
        <FooterAdm />
        </div>
    )
};

export default RegistroAthletas;