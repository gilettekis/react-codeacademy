import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
// import {Route} from './Route/Route';

// import { HomePage } from './HomePage/HomePage';
// import{ContactsPage} from './ContactsPage/ContactsPage';  taikant lazyloading kitoks importas

import './App.css';

const HomePage =React.lazy(()=> import ('./HomePage/HomePage'));
const ContactsPage=React.lazy(()=> import('./ContactsPage/ContactsPage'));
const AboutPage=React.lazy(()=> import('./AboutPage/AboutPage'));
function App() {

return (
    <div className="App">
      <Link to="/"> Home Page</Link>
      <Link to="/contacts"> Contacts Page</Link>
      <Link to="/about">  About Page</Link>
     
      <Routes>
        <Route path = "/" element ={
          <React.Suspense fallback={<div>Loading...</div>}>
          <HomePage/>
        </React.Suspense>
        }/>
        <Route path="/contacts" element={
          <React.Suspense fallback={<div>Loading...</div>}>
            <ContactsPage />
          </React.Suspense>
        
        }/>
        <Route path="/about" element={
          <React.Suspense fallback={<div>Loading...</div>}>
            <AboutPage />
          </React.Suspense>
        
        }/>
      </Routes>
    </div>
    
  );
      }
export default App;