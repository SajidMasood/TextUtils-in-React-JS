
import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {
  // whether dark mode is enabled or not | state
  const [mode, setMode] = useState('light');

  // alert state | alert is an obj | method showAlert
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type,
      });
      setTimeout(() => {
        setAlert(null);
      }, 3000);
  }


  const toggleMode = ()=>{
    if (mode === 'light') {
      setMode('dark');
      // all web page set bg
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode has been enabled", "success"); // call alert
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "success"); // call alert
    }
    
  }
  return (
   <>
    {/* props */}
    {/* <Navbar title="Text Utils" aboutText="About Us" home="HOME"/> */}
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />

    {/* alert here */}
    <Alert alert={alert}/>

    {/* calling another component */}
    <div className="container my-3">
      <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>

      {/* calling about components */}
      {/* <About/> */}
    </div>
   </>
  );
}

export default App;
