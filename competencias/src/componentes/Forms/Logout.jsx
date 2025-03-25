import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';

function LogoutButton() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/iniciosesion");
  };

  return (<Button onClick={handleLogout} variant="danger">Cerrar Sesión</Button>)
}

export default LogoutButton;
