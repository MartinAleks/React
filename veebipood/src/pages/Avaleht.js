//rfce tekitab template!!

import React, { useState } from 'react'

function Avaleht() {
    const [kogus, uuendaKogus] = useState(12); //numbriline ala toote hind, kogus, arvutused
    const [sonum, uuendaSonum] = useState(""); //sõnaline - isikukood, telefoninumber
    const [laigitud, uuendaLaigitud] = useState(false); //boolean

    function nulli() {
        uuendaKogus(0);
        uuendaSonum("Kogus nullitud!");
    }

    function vahenda() {
        uuendaKogus(kogus -1);
        uuendaSonum("Kogus vähendatud!");
    }

    function suurenda() {
        uuendaKogus(kogus +1);
        uuendaSonum("Kogus suurendatud!");
    }

  return (
    <div>

        {laigitud === true && <img src="/laigitud.svg" alt="" />}
        {laigitud === false && <img src="/mittelaigitud.svg" alt="" />}
        <button onClick={() => uuendaLaigitud(!laigitud)}>Muuda laigitut</button>
        <div>{sonum}</div>
        {/* { kogus !== 0 && <button onClick={nulli}>Nulli</button>} */}
        { kogus >  0 && <button onClick={nulli}>Nulli</button>}
        <button disabled={kogus === 0} onClick={vahenda}>-</button>
        {kogus}
        <button onClick={suurenda}>+</button>
    </div>
  )
}

export default Avaleht

