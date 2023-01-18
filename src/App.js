import './styles/main.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from './components/navbar/navBar'
import Footer from './components/footer/footer'
import Home from './pages/home'
import Contacts from './pages/contacts/contacts';
import ScrollToTop from './utils/scrollToTop';
import ProjectPage from './pages/projectPage/projectPage';
import Projects from './pages/projects/projects';

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <NavBar />
        <Routes>
          <Route
            path="/"
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
