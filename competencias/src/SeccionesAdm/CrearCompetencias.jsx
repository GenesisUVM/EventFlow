import './Adm.css'
import NavBar from '../componentes/NavBar';
import FooterAdm from '../componentes/FooterAdm';
// import FormCompetencias from '../componentes/Forms/FormCompetencias';


function CrearCompetencia(){
    return(
        <div className='crearCompeencia'>
        <NavBar />
        <h2 className='titulos'>Crear Competencia</h2>
        {/* <FormCompetencias /> */}
        <div style={{height: 2, background: "#C2FCF7", }}></div>
        <FooterAdm />
        </div>
    )
};

export default CrearCompetencia