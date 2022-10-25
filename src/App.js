

import { useEffect, useState } from 'react';
import './App.css';


function App() {
const [count, setCount] = useState(0);


useEffect(()=> {
console.log('Component Mounted');
}, []); //jeigu tuscia array, funcija bus igyvendinta, tik kai bus mountinta
  
const handleIncrement = (event)=> {
  setCount (count+1);
  console.log(count);
}
  const handleIncerementKeyDown = (event)=>{
  console.log('Key Down');
}
const handleIncerementKeyUp = (event) => {
  console.log ('Key Up');
}
const handleInputChange = (event) => {
  console.log(event.target.value);
}
const handleSubmit = (event) => {
  event.preventDefault();
  console.log('Submit');
}
const handleInputBlur = () => {
  console.log('Blur elment')
}
return (
    <div className="App">
      <form onSubmit={handleSubmit}/>
      {count}
      <button 
      // onKeyUp={handleIncerementKeyUp}
      onKeyDown={handleIncerementKeyDown} 
      onClick={handleIncrement}>
        Increment
        </button>
        <input onChange={handleInputChange} onBlur={handleInputBlur}></input>
    </div>
  );
}

export default App;