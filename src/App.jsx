import Navbar from './componets/Navbar/Navbar'
import Abaout from './componets/Abaout/Abaout'
import Skills from './componets/Skills/Skills'
import Projects from './componets/Projects/Projects'
import Contact from './componets/Contact/Contact'
// import Aside from './componets/Aside/Aside'
import { Routes, Route } from "react-router";
function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Abaout/>} />
        <Route path="/skills" element={  <Skills/>} />
        <Route path="/projects" element={   <Projects/>} />
        <Route path="/contact" element={ <Contact/>} />
      </Routes>
      
    </>
  )
}

export default App
