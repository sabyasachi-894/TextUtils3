import { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  
  const [mode,setMode]= useState('primary');

  const [alert,setAlert]=useState(null);
  const showAlert=(message,type) => {
       setAlert({
         msg: message,
         type: type
       })
      setTimeout(() => {
        setAlert(null);
      }, 1500);
  }

  const removeClasses= () => {
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-danger');
  }

  const toggleMode = (cls) => {
    removeClasses();
    document.body.classList.add('bg-'+cls);
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert('Dark mode has been enabled','success');
      document.title='TextUtils- Dark Mode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert('Light mode has been enabled','success');
      document.title='TextUtils- Light Mode';
      // setInterval(() => {
      //   document.title='TextUtils- Light Mode';
      // }, 2000);
      // setInterval(() => {
      //   document.title='Share with friends';
      // }, 1500);
    }
  }
  return (
   <>
   <Router>
   <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
   <Alert alert={alert}/>
   <div className="container my-3">
   <Routes>
          <Route exact path="/about" element={<About mode={mode}/>}>
            </Route>
          <Route exact path="/" element={<TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert}/>}>
            </Route>
    </Routes>
   </div>
   </Router>
   </>
  );
}

export default App;
