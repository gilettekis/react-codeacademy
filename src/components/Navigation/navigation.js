
import { useNavigate} from "react-router-dom";
import { Link } from "react-router-dom"
import './navigation.css'

export const Navigation =({user, onLogin, onLogout})=> {
    const navigate =  useNavigate();
   
   const handleLogin = () => {
    onLogin();
        navigate('/');
   }
    const handleLogout = ()=> {
        onLogout();
        navigate('/login');
    }

    console.log(user);
    return (
        <div style=
        // {{location.pathname !== '/' && <Link to='/'>Home</Link>}}
        {{display:'flex',
         gap:10,
         justifyContent:'center',
         padding:20 }}>
            
     <Link to="/">Home</Link>
      <Link to="/contacts">Contacts</Link>
      {user ? 
      <button onClick={handleLogout}>Logout</button>:
      <button onClick={handleLogin}>Login</button>
      }
     
      
     </div>
    )
}