import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Courses from './pages/Courses';
import Hobbies from './pages/Hobbies';
import Work from './pages/Work';

function App() {
  return (
    <div>
      <img className='main-picture' src='https://img.freepik.com/free-vector/blue-technology-digital-banner-design_1017-32257.jpg?w=826&t=st=1676561789~exp=1676562389~hmac=17c1b01b828835f4da23a7c5003d162a1560be9bd2b99215339f444c3f08631d' alt='' />
      <div className="rectangle"></div>

      <div className='navigation-pictures'>
        <Link className="main-link" to="work">
        <img src='https://artbreeder.b-cdn.net/imgs/fc44fbda2666a86bb1394320.jpeg' alt='' />
        <p>Tööde lehele</p>
        </Link>
        <Link className="main-link" to="hobbies">
        <img src='https://artbreeder.b-cdn.net/imgs/75dd681dcd9de27afe50c6c9e4d3.jpeg' alt='' />
        <p>Hobide lehele</p>
        </Link>
        <Link className="main-link" to="courses">
        <img src='https://artbreeder.b-cdn.net/imgs/ab6da4dbb8bd13de168a053d5bb2.jpeg' alt='' />
        <p>Kursuste lehele</p>
        </Link>
      </div>

      <iframe className="video" width="560" height="315" src="https://www.youtube.com/embed/1LkOa7Ky2ak" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <Routes>
        <Route path="work" element={ <Work/> } />
        <Route path="hobbies" element={ <Hobbies/> } />
        <Route path="courses" element={ <Courses/> } />
      </Routes>

      <a className='facebook-button' href='https://www.facebook.com/jee'>
        <img src='/facebook.png' alt='' />
        <span>Facebook</span>
      </a>

    </div>
  );
}

export default App;
