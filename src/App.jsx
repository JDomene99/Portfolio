import Navbar from './componets/Navbar/Navbar'
import Abaout from './componets/Abaout/Abaout'
import Skills from './componets/Skills/Skills'
import Projects from './componets/Projects/Projects'
import Contact from './componets/Contact/Contact'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import AnchorLink from 'react-anchor-link-smooth-scroll';
function App() {

  const options = {
    particles: {
      number: {
        value: 20,
        density: {
          enable: true,
          area: 800
        }
      },
      color: {
        value: ["#F0FFF0",]
      },
      shape: {
        type: "circle"
      },
      opacity: {
        value: 1
      },
      size: {
        value: { min: 1, max: 8 }
      },
      
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: false,
        straight: false,
        outModes: "out"
      }
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
        },
        onClick: {
          enable: true,
          mode: "push"
        }
      },
      modes: {
        grab: {
          distance: 140,
          links: {
            opacity: 1
          }
        },
        push: {
          quantity: 4
        }
      }
    }
  };

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <>
     <Particles options={options} init={particlesInit} className="absolute -z-50"/>
      <Navbar/>
      <Abaout/>
      <Skills/>
      <Projects/>
      <Contact/>
      <div className='sticky bottom-10 right-10 w-1/12 ml-[90%] '>
        <AnchorLink href="#nav" ><ArrowUpwardIcon className='bg-indigo-500 rounded-2xl'/></AnchorLink>
      </div>
    </>
  )
}

export default App
