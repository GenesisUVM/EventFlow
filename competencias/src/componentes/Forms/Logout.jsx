import { useNavigate } from "react-router-dom";

function LogoutButton() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/iniciosesion");
  };

  return (<button onClick={handleLogout}>Cerrar Sesión</button>)
}

export default LogoutButton;
