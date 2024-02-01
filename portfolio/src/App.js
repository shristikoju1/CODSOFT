import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Skills from "./components/skill/skill";
import Works from "./components/Works/works";
import Clients from "./components/Clients/clients";
import Contact from "./components/Contact/contact";
import Proficiency from './components/proficiency/proficiency';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skills/>
      <Proficiency/>
      <Works/>
      <Clients/>
      <Contact/>

    </div>
  );
}

export default App;
