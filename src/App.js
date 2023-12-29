import React from 'react'
import './App.css';
import { SidePanel } from '../src/components'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavBar } from './components';
import { Home, Contact, Skills, Projects, Resume } from './pages';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className='app'>
      <SidePanel/>
      <section className='app_main'>
        <Router>
            <NavBar/>
        <Routes>
            <Route path='/' element= {<Home/>}/>
            <Route path='/skills' element= {<Skills/>}/>
            <Route path='/projects' element= {<Projects/>}/>
            <Route path='/resume' element= {<Resume/>}/>
            <Route path='/contact' element= {<Contact/>}/>
        </Routes>
        </Router>
        <ToastContainer/>
      </section>
    </div>
  );
}

export default App;
