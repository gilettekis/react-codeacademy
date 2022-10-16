
import {Greeting} from './Greeting/Greeting';
import './App.css';

function App() {
  return (
    <div className="App">
      <Greeting isLoggedIn={true} unreadMessages = {[1,1,2,3,6,8,9,10]}/>
    </div>
  );
}

export default App;