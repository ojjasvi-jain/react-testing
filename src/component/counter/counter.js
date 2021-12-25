import {React, useState} from 'react';

const Counter =()=>{

    const [value , setValue] =  useState(0);
    
    const increment = ()=>{
        setValue(c=>c+1);
     
    } 
    const decrement = ()=>{
        setValue(c=>c-1)
    } 

 return(
     <>  
       <div>count : {value} </div>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
     </>
 );

}


export default Counter;