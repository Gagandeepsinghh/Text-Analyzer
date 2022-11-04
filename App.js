import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react'

function App() {
   const [mode, setMode] = useState('light');

  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark')
    }
    else{
      setMode('light')
    }

   }

  return (
  <> 
  <Navbar title="TextUtils" homeText="Home" aboutText="About" mode={mode} toggleMode={toggleMode} />
  <div className={`bg-${mode} text-${mode=="light"?"dark":"light"}`}>
    
  <TextForm heading="Enter the Text to analyze" />
  </div>
  
    </>
  );
}

export default App;
