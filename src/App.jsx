
import './App.css'
import About from './Components/About';
import Blog from './Components/Blog';
import Gallery from './Components/Gallery';
import Home from './Components/Home';
import Recipe from './Components/Recipe';
import Contact from './Components/Contact';
import Reservation from './Components/Reservation';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';

function App() {


  return (
    <>
     <BrowserRouter>
    <Routes>
      <Route  path='/' element={<Home/>}/>
      <Route extract path='/about' element={<About/>}/>
      <Route extract path='/recipe' element={<Recipe/>}/>
      <Route extract path='/gallery' element={<Gallery/>}/>
      <Route extract path='/reservation' element={<Reservation/>}/>
      <Route extract path='/blog' element={<Blog/>}/>
      <Route extract path='/contact' element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
