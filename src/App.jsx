
import './App.css';
import Aboutpage from './components/aboutpage';
import Homepage from './components/homepage';
import KeralaCard from './components/keralacard';
import Navbarheader from './components/navbar';
import Slider from './components/slider';
import { Routes,Route } from 'react-router-dom';
import { lazy,Suspense } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import { CommentProvider } from './components/componentDrawer';

function App() {
  const Hpage=lazy(()=>import('./components/homepage'))

  return (
    <>
    <CommentProvider>    
      <Navbarheader/>
   
    <Suspense fallback={ <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>}><Routes><Route path='/' element={<Hpage/>}/>
    <Route path="/about" element={<Aboutpage/>}/></Routes>
    </Suspense>
    </CommentProvider>

   

    </>
  )
}

export default App
