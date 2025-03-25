import NavBar from "../componentes/NavBar"
import FormAdm from "../componentes/FormAdm"
import Footer from "../componentes/Footer"
import './InicioSesiones.css'

function InicioAdmin(){

    return(
        <div className="inicioSesiones">
          <NavBar />
          <FormAdm />
          <Footer />
        </div>
    )
};

export default InicioAdmin