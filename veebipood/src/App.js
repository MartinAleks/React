import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Avaleht from './pages/Avaleht';
import Ostukorv from './pages/Ostukorv';
import LisaToode from './pages/LisaToode';
import Seaded from './pages/Seaded';
import Meist from './pages/Meist';
import Kontakt from './pages/Kontakt';

// HTML elemente on 2 erinevat:
// 1. algus ja lõpu tag, lõpp on kaldkriipsuga tag nimetuse ees
//  kõige standardsem, omadused/seadistused alguse sisse
// 2. self-closing, tagi nimetuse järel on kaldkriips
//  kui me teame ette, et midagi kunagi kahe tagi vahele
// pole mõtet kirjutada

function App() {
  return (
    <div className="App">
      <Link to="/">
      <img src="https://i.pinimg.com/550x/d2/50/c9/d250c95a44debaec2c4239ff486164bc.jpg" alt="Italian Trulli"/>
      </Link>

      
      <Link to="/ostukorv">
      <button className="nupp">Ostukorv</button>
      </Link>

      <Link to="/lisa-toode">
      <button className="nupp">Lisa toode</button>
      </Link>

      <Link to="/seaded">
      <button className="nupp">Seaded</button>
      </Link>

      <Link to="/meist">
      <button className="nupp">Meist</button>
      </Link>

      <Link to="/kontakt">
      <button className="nupp">Kontakt</button>
      </Link>

      {/* localhost:3000/avaleht */}
      <Routes>
        <Route path="" element={ <Avaleht/>}/>
        <Route path="ostukorv" element={ <Ostukorv/> }/>
        <Route path="lisa-toode" element={ <LisaToode/> }/>
        <Route path="seaded" element={ <Seaded /> }/>
        <Route path="meist" element={ <Meist /> }/>
        <Route path="kontakt" element={ <Kontakt /> }/>
        
      </Routes>





    </div>
  );
}

export default App;
