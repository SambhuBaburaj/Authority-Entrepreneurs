import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import NavBar from './Pages/NavBar';
import Home from './Pages/Home';
import About from './Pages/About';
import FormSubmition from './Pages/FormSubmition';
import Slideshow from './Pages/Slideshow';
import TiktakToe from './Pages/TiktakToe';
import LazyLoading from './Pages/LazyLoading';
function App() {
  return (
  <Routes>
<Route element={<NavBar/>} path=''>

<Route element={<Home/>} path='/' />
<Route element={<About/>} path='/about' />
<Route element={<FormSubmition/>} path='/form' />
<Route element={<TiktakToe/>} path='/tiktaktoe' />
<Route element={<Slideshow/>} path='/slideshow' />
<Route element={<LazyLoading/>} path='/lazyloading' />


</Route>
  </Routes>
  );
}

export default App;
