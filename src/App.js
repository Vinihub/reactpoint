
import './App.css';
import Navigation from './components/Navigation';
import Carousel from './components/Carousel'
import About from './components/About';
import Courses from './components/Courses';
import Faculty from './components/Faculty';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import Contactus from './components/Contactus';



function App() {
  return (
    <div className="App">
      <Navigation/>
      <Carousel/>
       <About/>
       <Courses/>
       <Faculty/>
       <Testimonials/>
       <Contactus/>
       <Footer/>

    </div>
  );
}

export default App;
