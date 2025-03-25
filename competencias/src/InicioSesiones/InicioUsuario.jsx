import NavBar from "../componentes/NavBar"
import Footer from "../componentes/Footer"
import FormUsuario from "../componentes/FormUsuario"
import './InicioSesiones.css'

function InicioUsuarios(){

    return(
        <div className="inicioSesiones">
          <NavBar />
          <FormUsuario />
          <Footer />
        </div>
    )
};

export default InicioUsuarios