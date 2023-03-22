import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Ostukorv() {
    const [margid, uuendaMargid] = useState(JSON.parse(localStorage.getItem("margidOstukorvisVõti")) || []);

    const kustuta = (index) => {
        margid.splice(index,1);
        uuendaMargid(margid.slice());
        localStorage.setItem("margidOstukorvisVõti", JSON.stringify(margid));
    }

    const tyhjenda = () => {
        localStorage.setItem("margidOstukorvisVõti", JSON.stringify([]));
        uuendaMargid([]);
      }

  return (
    <div>
        {margid.length > 0 && <button onClick={tyhjenda}>Tühjenda</button>}
        {margid.length === 0 && <div>Ostukorv on tühi. <Link to="/">Tooteid lisama</Link></div>}
        {margid.length > 0 && <div>Ostukorvi esemeid on {margid.length} tk</div>}
        {margid.map((element, index) => 
        <div key={index}>
            {element} 
            <button onClick={() => kustuta(index)}>x</button>
        </div>)}
    </div> );
}

export default Ostukorv