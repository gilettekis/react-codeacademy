import { useEffect, useState } from "react";

export const Counter =() => {
    // let count = 0;
   const [count, setCount] = useState(0); // grazina array [ count,setCount] pati skaiciu ir funkcija
const [todo, setTodo] =useState(null);
const [isLoading, setIsLoading] = useState(false);
    const handleIncrement = () => {
       setCount(count+1);
    }
    const handleDecrement = () => {
        setCount(count-1);
    }

    useEffect(()=>{
        setIsLoading(true)
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => {
            setTodo(json);
        setIsLoading(false);
         } );
    }, []); ///sitas efektas negali buti nei funcijos nei objekto viduje
    
console.log(todo);
if(isLoading){
    return<div>Is loading</div>
}


    return (
        <>
        <span>{count}</span>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <div>
           <div>{todo?.title}</div> 
            <div>{String(todo?.completed)}</div>
        </div>
        
        </>
    )
}