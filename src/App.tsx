import NavBars from './components/NavBars';
import Hero from './components/Hero';
import ProjectsCards from './components/ProjectsCards';
import TechStacks from './components/TechStacks';
import Timeline from './components/Timeline';
import Footer from './components/Footer';
import { UpdateTitleOnScroll } from './hooks/UpdateTitleOnScroll';
import './index.css';
import './App.css';
import "animate.css";

export default function App() {

  UpdateTitleOnScroll();

  return (
    <>
      <main className='flex flex-col bg-prussian'>
        <NavBars/>
        <Hero/>
        <ProjectsCards/>
        <TechStacks/>
        <Timeline/>
        <Footer/>
      </main>
    </>
  )
}
