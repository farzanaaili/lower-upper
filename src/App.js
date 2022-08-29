import Navbar from "./Componant/Navbar"
import TextForm from "./Componant/TextForm";
import "./App.css"
import { useState } from 'react';

function App() {
    const [mode, setMode] =useState('light');
    const toggleMode=()=>{
       if(mode === 'light'){
    setMode("dark")
    document.body.style.backgroundColor="black"
    document.body.style.color="#fff"

  }else{
    setMode("light")
    document.body.style.backgroundColor="#fff"
    document.body.style.color="#000"

  }
    }
 

  return (
<div className="">
<Navbar title="TechDSF" about="About" cMode={mode} toggleMode={toggleMode}/>
<div className="container m-4">
  <TextForm heading="Text Analysis Area" />
  </div>

</div>

  );
}

export default App;
