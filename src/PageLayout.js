import {Navigate, Outlet} from 'react-router-dom';
import { Navigation } from './components/Navigation/navigation';
export const PageLayout =(user, onLogout) => {
    if(!user){
        <Navigate to = "/login"/>
    }
    return (
    <div>
         <Navigation onLogout = {onLogout}/>
         Page Layout
         <Outlet/>
         </div>
    );
};