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
import "aos/dist/aos.css";
import { useEffect } from 'react';
import AOS from "aos";
export default function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
    });
    // AOS.refresh();
  }, []);

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
