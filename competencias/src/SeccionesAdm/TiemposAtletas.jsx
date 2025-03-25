import './Adm.css'
import NavBar from '../componentes/NavBar';
import FooterAdm from '../componentes/FooterAdm';
// import FormTiempo from '../componentes/Forms/FormTiempo';



function TiempoAtletas(){
    return(
        <div className='seccionTiempo'>
        <NavBar />
        <h2 className='titulos'>Registro Tiempos Atletas</h2>
        {/* <FormTiempo /> */}
        <FooterAdm />
        </div>
    )
};

export default TiempoAtletas