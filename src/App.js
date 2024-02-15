import { useEffect, useState } from "react";
import './index.css';

const App =() => {
  const [advise,setAdvise]= useState('');


  const fetchAdvise =async()=>{

    try{
      const res = await fetch('https://api.adviceslip.com/advice');
      const output = await res.json();
      setAdvise(output.slip.advice);
      console.log(output.slip);
    
    }
    catch(error){
        console.log('Something went wrong');
    }
  }
  
  useEffect(()=>{
 
    fetchAdvise();
  },[]);

  console.log("Render: ", advise);
  
  return (
    <div className="App">
      <div className="card">
        <h1 className="heading">{advise}</h1>
        <button className="button" onClick={fetchAdvise}>
        <span>Generate a Quote!</span>
        </button>
      </div>
    </div>
  );
}

export default App;

