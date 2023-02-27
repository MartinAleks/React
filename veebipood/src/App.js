import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Avaleht from './pages/Avaleht';
import Ostukorv from './pages/Ostukorv';
import LisaToode from './pages/LisaToode';
import Seaded from './pages/Seaded';
import Meist from './pages/Meist';
import Kontakt from './pages/Kontakt';
import Poed from './pages/Poed';
import { useState } from 'react';

// HTML elemente on 2 erinevat:
// 1. algus ja lõpu tag, lõpp on kaldkriipsuga tag nimetuse ees
//  kõige standardsem, omadused/seadistused alguse sisse
// 2. self-closing, tagi nimetuse järel on kaldkriips
//  kui me teame ette, et midagi kunagi kahe tagi vahele
// pole mõtet kirjutada

function App() {                          // ????????????
  const [aktiivneURL, uuendaAktiivneURL] = useState(window.location.href.split("localhost:3000")[1]);
  const [VeebisaidiVarv, uuendaVeebisaidiVarv] = useState("light");
  // KODUS 


  return (
    <div className = {VeebisaidiVarv === "dark" ? "dark-mode" : "light-mode"}>
      <button onClick={() => uuendaVeebisaidiVarv("dark")}>Dark mode</button>
      <button onClick={() => uuendaVeebisaidiVarv("light")}>Light mode</button>
      <Link to="/">
      <img className="pilt"  onClick={() => uuendaAktiivneURL("/")} src="https://i.pinimg.com/550x/d2/50/c9/d250c95a44debaec2c4239ff486164bc.jpg" alt="Italian Trulli"/>
      </Link>

      
      <Link to="/ostukorv">
      <button className={aktiivneURL === "/ostukorv" ? "aktiivne-url" : undefined} onClick={() => uuendaAktiivneURL("/ostukorv")}>Ostukorv</button>
      </Link>

      <Link to="/lisa-toode">
      <button className={aktiivneURL === "/lisa-toode" ? "aktiivne-url" : undefined} onClick={() => uuendaAktiivneURL("/lisa-toode")}>Lisa toode</button>
      </Link>

      <Link to="/seaded">
      <button className={aktiivneURL === "/seaded" ? "aktiivne-url" : undefined} onClick={() => uuendaAktiivneURL("/seaded")}>Seaded</button>
      </Link>

      <Link to="/meist">
      <button className={aktiivneURL === "/meist" ? "aktiivne-url" : undefined} onClick={() => uuendaAktiivneURL("/meist")}>Meist</button>
      </Link>

      <Link to="/kontakt">
      <button className={aktiivneURL === "/kontakt" ? "aktiivne-url" : undefined} onClick={() => uuendaAktiivneURL("/kontakt")}>Kontakt</button>
      </Link>

      <Link to="/poed">
      <button className={aktiivneURL === "/poed" ? "aktiivne-url" : undefined} onClick={() => uuendaAktiivneURL("/poed")}>Poed</button>
      </Link>

      {/* localhost:3000/avaleht */}
      <Routes>
        <Route path="" element={ <Avaleht/>}/>
        <Route path="ostukorv" element={ <Ostukorv/> }/>
        <Route path="lisa-toode" element={ <LisaToode/> }/>
        <Route path="seaded" element={ <Seaded /> }/>
        <Route path="meist" element={ <Meist /> }/>
        <Route path="kontakt" element={ <Kontakt /> }/>
        <Route path="poed" element={ <Poed /> }/>
        
      </Routes>





    </div>
  );
}

export default App;
