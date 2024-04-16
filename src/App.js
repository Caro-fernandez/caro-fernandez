import '../src/assets/css/App.css'
import Navbar from './components/Navbar';
import Home from './components/Home';
import UpButton from './components/UpButton';
import Estudios from './components/Estudios'
import Cursos from './components/Cursos';
import Proyectos from './components/Proyectos';
import Contacto from './components/Contacto';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
    <Navbar/>
    <Home/>
    <Estudios/>
    <Cursos/>
    <UpButton/>
    <Proyectos/>
    <Contacto/>
    <UpButton/>
    <Footer/>
    </div>
  );
}

export default App;
