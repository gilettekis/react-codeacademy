import { UserGreeting } from '../UserGreeting/UserGreeting';
import { GuestGreeting } from '../GuestGreeting/GuestGreeting';
import { LoginButton } from '../LoginButton/LoginButton';
import { LogoutButton } from '../LogoutButton/LogoutButton';

export const Greeting = ({isLoggedIn, unreadMessages}) => {
//     if (isLoggedIn) {
//         return<UserGreeting/>;
//     }

// return<GuestGreeting/>; 

const handleClick = () => {
    prompt ('Test funkcija');
}

const handleLogin =()=> {
prompt ('You have been logged out!')
}
const handleLogout =()=> {
    prompt ('You have successfully logged in!')
    
}
    return (
        <div>
        
            {isLoggedIn ? <UserGreeting name={"Petras"} onClick={handleClick} /> : <GuestGreeting/>}
            {isLoggedIn ? <LogoutButton onClick={handleLogout}/>: <LoginButton onClick={handleLogin}/>}
            {unreadMessages.length > 0 && (
                <h2>You have {unreadMessages.length} unread messages</h2>
            )}
            <button onClick={handleClick}>Test</button>
        </div>
    )
};


//galima restrukturizuoti props ir kiekvianm naujam atsiradus ji darasyti
//const {cindren, kitas props, dar kitas props } = props;
// tada return <div> {children}</div>;   returninam tik pati propsa

//     return <div>{props.children}</div>;
// } ;  
// parasymas gali buti ir toks
// export const Greeting = (props) => <div>{props.children}</div>;

//arba dar paprastesnis budas restrukturizuoti props
//export const Greeting = ({ chindren}) => {
    // return <div> {children}</div>;
//}