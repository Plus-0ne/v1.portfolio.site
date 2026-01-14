
import { useEffect } from 'react';
import './App.css';
import NavBars from './components/NavBars';
import Hero from './components/Hero';
import ProjectsCards from './components/ProjectsCards';
import TechStacks from './components/TechStacks';
import Timeline from './components/Timeline';
import Footer from './components/Footer';

function App() {

  useEffect(() => {
    document.title = "Home";
  });

  return (
    <>
      <div className='flex flex-col'>
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
