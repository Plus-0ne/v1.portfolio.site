import './App.css';
import NavBars from './components/NavBars';
import Hero from './components/Hero';
import ProjectsCards from './components/ProjectsCards';
import TechStacks from './components/TechStacks';
import Timeline from './components/Timeline';
import Footer from './components/Footer';
import { UpdateTitleOnScroll } from './hooks/UpdateTitleOnScroll';
import "animate.css";

function App() {

  UpdateTitleOnScroll();

  return (
    <>
      <div className='flex flex-col body'>
        <NavBars/>
        <Hero/>
        <ProjectsCards/>
        <TechStacks/>
        <Timeline/>
        <Footer/>
      </div>
    </>
  )
}

export default App
