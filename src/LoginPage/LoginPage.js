import { useNavigate } from "react-router-dom";

export const LoginPage =(onLogin) => {
    const navigate = useNavigate();
   const handleLogin = () => onLogin();
   onLogin();
   navigate('/')

    return (
    <div>
       Login from<button onClick={handleLogin}>Login</button>
    </div>
   
    );
};