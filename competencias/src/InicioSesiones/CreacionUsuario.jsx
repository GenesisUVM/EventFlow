import NavBar from "../componentes/NavBar"
import FormCreaUsuario from "../componentes/FormCrearUSuario"
import Footer from "../componentes/Footer"

function CreacionUsuario(){

    return(
    <div className="crearUsuario">
        <NavBar />
        <FormCreaUsuario />
        <Footer />
    </div>
    )
};

export default CreacionUsuario