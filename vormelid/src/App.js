import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from "./pages/public/HomePage";
import Drivers from "./pages/public/Drivers";
import Tracks from "./pages/public/Tracks";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Highlights from './pages/public/Highlights';
import About from './pages/public/About';
import Footer from './components/Footer';



function App() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">F1</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/drivers">{"Drivers"}</Nav.Link>
            <Nav.Link as={Link} to="/tracks">{"Tracks"}</Nav.Link>
            <Nav.Link as={Link} to="/highlights">{"Videos"}</Nav.Link>
            <Nav.Link as={Link} to="/about">{"About"}</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="drivers" element={<Drivers />} />
        <Route path="tracks" element={<Tracks />} />
        <Route path="highlights" element={<Highlights />} />
        <Route path="about" element={<About />} />
      </Routes>
      <div className="App">
        <Footer bg="dark" variant="dark"/>
      </div>
    </div>
  );
}

export default App;
