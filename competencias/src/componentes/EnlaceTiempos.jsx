import { Link} from 'react-router-dom';
import mas from '../img/mas.png'
import './Contenedores.css'

function EnlaceTiempos(){
    return(
        <div className='botonMas'>
            <Link to={'/adm/registroTiempoAthletas'}><img src={mas} alt='Simbolo mas' className='imgMas' /></Link>
        </div>
    )
};

export default EnlaceTiempos