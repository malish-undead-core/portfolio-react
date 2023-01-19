import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from './components/navbar/navBar'
import Footer from './components/footer/footer'
import Home from './pages/home'
import Contacts from './pages/contacts/contacts';
import ScrollToTop from './utils/scrollToTop';
import ProjectPage from './pages/projectPage/projectPage';
import Projects from './pages/projects/projects';
import './styles/main.css'

function App() {
  return (
    <div className="app">
      <Router>
        <ScrollToTop />
        <NavBar />
        <Routes>
          <Route
            path="/portfolio-react"
            element={<Home />}
          />
          <Route
            path="/projects"
            element={<Projects />}
          />
          <Route
            path="/projectPage/:id"
            element={<ProjectPage />}
          />
          <Route
            path="/contacts"
            element={<Contacts />}
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
