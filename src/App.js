import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import Childs from "./child";

function App() {

  const [count ,setcount] = useState(0);
  const [day, setday] = useState(true);

  

  return (
   <React.Fragment>

     <div className={`box ${day ? 'setdays' : ''}`} >
       <h1>Good {day ? "Morning" : "Night"} </h1>
       <br />
       <button onClick={() => {setday(!day)}} >Change Day</button>
     </div>

<div className="boxs">
<h1><Childs counter={count} /></h1>

<button onClick={()=>{setcount(count + 1)}}>Increment</button>

&nbsp;<button onClick={()=>setcount(count - 1)} >Decrement</button>
</div>
  

   </React.Fragment>
   
  );
}

export default App;
