import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  // Switch,
  Routes, 
  Route
  // Link
} from "react-router-dom";

function App() {
  // usestate for dark/light mode
  const [mode, setMode] = useState("light");
  
  // usestate for alert 
  const [alert, setAlert] = useState(null);

  // buttons to switch
  // const blueToggle = document.getElementById('blueToggleSwitch');
  // const orangeToggle = document.getElementById('orangeToggleSwitch');
  // const darkToggle = document.getElementById('flexSwitchCheckDefault');

  // function to set alert message and its type
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  // function to toggle between light/dark theme
  const toggleMode = () => {
    const orangeToggle = document.getElementById('orangeToggleSwitch');
    const blueToggle = document.getElementById('blueToggleSwitch');
    if(mode === 'light'){
      setMode("dark");
      document.body.style.backgroundColor= '#042743'; //'#212529';
      showAlert("dark mode has been enabled", "success");
      document.title = 'textutils - dark mode';
      // blinking titles might be used for notification as well
      // setInterval(() => {
      //   document.title = 'coded by v <3';
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'made with <3';
      // }, 1500);

      orangeToggle.setAttribute('disabled', '');
      blueToggle.setAttribute('disabled', '');
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("light mode has been enabled", "success");
      document.title = 'textutils - light mode';
      orangeToggle.removeAttribute('disabled');
      blueToggle.removeAttribute('disabled');
    }
  }

  // function to switch to blue theme
  const toggleTheme1 = () => {
      const orangeToggle = document.getElementById('orangeToggleSwitch');
      const darkToggle = document.getElementById('flexSwitchCheckDefault');
      if(mode === 'light'){
      setMode("dark");
      document.body.style.backgroundColor= 'blue'; //'#212529';
      showAlert("blue mode has been enabled", "success");
      document.title = 'textutils - blue theme';
      orangeToggle.setAttribute('disabled', '');
      darkToggle.setAttribute('disabled', '');
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("light mode has been enabled", "success");
      // dynamic title
      document.title = 'textutils - light mode';
      orangeToggle.removeAttribute('disabled');
      darkToggle.removeAttribute('disabled');
    }
  }

  // function to switch to orange theme
  const toggleTheme2 = () => {
    const blueToggle = document.getElementById('blueToggleSwitch');
    const darkToggle = document.getElementById('flexSwitchCheckDefault');
    if(mode === 'light'){
      setMode("dark");
      document.body.style.backgroundColor= 'orange'; //'#212529';
      showAlert("orange mode has been enabled", "success");
      document.title = 'textutils - orange theme';
      blueToggle.setAttribute('disabled', '');
      darkToggle.setAttribute('disabled', '');
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("light mode has been enabled", "success");
      // dynamic title
      document.title = 'textutils - light mode';
      blueToggle.removeAttribute('disabled');
      darkToggle.removeAttribute('disabled');
    }
  }
  return (
    <>
    {/* prop declaration */}
    <Router>
    <Navbar user="shamsi" mode={mode} toggleMode={toggleMode} toggleTheme1={toggleTheme1} toggleTheme2={toggleTheme2}/>
    <Alert alert={alert} />
    <div className="container my-3">
      {/* if we use 'exact' keyword before path then it does exact matching else it does partial matching which results in errors sometimes while rendering the components
        /users --> component 1
        /users/home --> component 1 */}
      <Routes>
            <Route exact path="/about" element={<About />} />
            <Route exact path="/" element={<TextForm title="text analyzer" showAlert={showAlert} mode={mode} />} />
      </Routes>
      {/* <About /> */}
    </div>
    </Router>
    {/* default prop value */}
    {/* <Navbar /> */}
    </>
  );
}

export default App;
