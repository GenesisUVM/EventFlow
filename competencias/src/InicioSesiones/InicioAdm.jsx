import NavBar from "../componentes/NavBar"
import FormAdm from "../componentes/Forms/FormAdm"
import './InicioSesiones.css'

function InicioAdmin(){

    return(
        <div className="inicioSesiones">
          <NavBar />
          <FormAdm />
        </div>
    )
};

export default InicioAdmin