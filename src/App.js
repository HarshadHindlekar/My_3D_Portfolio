import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { lazy, Suspense, useEffect } from 'react';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { MissionLayout } from './components/MissionLayout';
import { SectionLoader } from './components/LoadingShell';

const Skills = lazy(() => import("./components/Skills").then((module) => ({ default: module.Skills })));
const Projects = lazy(() => import("./components/Projects").then((module) => ({ default: module.Projects })));
const Testimonials = lazy(() => import("./components/Testimonials").then((module) => ({ default: module.Testimonials })));
const Contact = lazy(() => import("./components/Contact").then((module) => ({ default: module.Contact })));
const Footer = lazy(() => import("./components/Footer").then((module) => ({ default: module.Footer })));

function App() {
  useEffect(() => {
    localStorage.setItem('attempts', '0');
    document.body.classList.add('react-ready');

    const loader = document.getElementById('app-root-loader');
    const removeLoader = window.setTimeout(() => {
      loader?.remove();
    }, 360);

    return () => window.clearTimeout(removeLoader);
  }, []);

  return (
    <div className="App">
      <NavBar />
      <MissionLayout>
        <Banner />
        <Suspense fallback={<SectionLoader section="skills" label="Calibrating core systems" />}>
          <Skills />
        </Suspense>
        <Suspense fallback={<SectionLoader section="projects" label="Loading launchpad" />}>
          <Projects />
        </Suspense>
        <Suspense fallback={<SectionLoader section="testimonials" label="Opening signal channel" />}>
          <Testimonials />
        </Suspense>
        <Suspense fallback={<SectionLoader section="contact" label="Aligning contact orbit" />}>
          <Contact />
        </Suspense>
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </MissionLayout>
    </div>
  );
}

export default App;
