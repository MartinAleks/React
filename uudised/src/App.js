import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Avaleht from './pages/Avaleht';
import Uudised from './pages/Uudised';
import Kontakt from './pages/Kontakt';
import Meist from './pages/Meist';
import { useRef, useState } from 'react';
import Seaded from './pages/Seaded';
import Books from './pages/Books';
import Numbrid from './pages/Numbrid';
import LisaUudis from './pages/LisaUudis';
import HaldaUudiseid from './pages/HaldaUudiseid';
import KasutajaPostitus from './pages/KasutajaPostitus';

function App() {
  const [sisselogitud, muudaSisselogitud] = useState("ei");
  const [sonum, muudaSonum] = useState("");
  const kasutajaNimiRef= useRef();
  const paroolRef = useRef();

  const logiSisse = () => {
    if (paroolRef.current.value === "123") {
    muudaSisselogitud("jah");
    muudaSonum(kasutajaNimiRef.current.value + ", oled sisselogitud");
  } else {
    muudaSonum("Vale parool");
  }
}

const logiValja = () => {
  muudaSisselogitud("ei")
  muudaSonum("oled välja logitud!");
}


  return (
    <div >
      <div>{sonum}</div>
      { sisselogitud === "ei" && <div>
        <label>kasutajanimi</label> <br />
        <input ref={kasutajaNimiRef} type="text" /> <br />
        <label>Parool</label> <br />
        <input ref={paroolRef}type="password" /> <br />
      </div> }

      { sisselogitud === "ei" && <button onClick={logiSisse}>Logi sisse</button> }
      { sisselogitud === "jah" && <button onClick={logiValja}>Logi Välja</button> }

      <Link to="/">
        <button>Avalehele</button>
      </Link>
      <Link to="/uudised">
        <button>Uudiste lehele</button>
      </Link>
      <Link to="/kontakt">
        <button>Võta meiega ühendust</button>
      </Link>
      <Link to="/meist">
        <button>Info meist</button>
      </Link>
      <Link to="/books">
        <button>Raamatud</button>
      </Link>
      <Link to="/numbrid">
        <button>Numbrid</button>
      </Link>
      <Link to="/lisa-uudis">
        <button>Lisa uudis</button>
      </Link>
      <Link to="/halda">
        <button>Halda uudiseid</button>
      </Link>
      
      <Routes>
        <Route path='books' element={ <Books />} />
        <Route path='' element={ <Avaleht />} />
        <Route path='uudised' element={ <Uudised />} />
        <Route path='kontakt' element={ <Kontakt />} />
        <Route path='meist' element={ <Meist />} />
        <Route path='numbrid' element={ <Numbrid />} />
        <Route path='lisa-uudis' element={ <LisaUudis /> } />
        <Route path='halda' element = { <HaldaUudiseid /> } />
        <Route path='kasutaja-postitus/:kasutajaId' element={ <KasutajaPostitus />} />
      </Routes>
   
    <Link to="/seaded">
      <button>Seadetesse</button>
    </Link>

    {/* <Routes>
      <Route path='seaded' element= { <Seaded /> } />
    </Routes> */}
    </div>
  );
}

export default App;
