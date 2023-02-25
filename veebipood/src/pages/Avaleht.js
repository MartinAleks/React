//rfce tekitab template!!

import React, { useState } from 'react'

// tumesinine - JS liigitused (function, const, let, var), HTML liigitus/tag (imh, div, input, button),
// boolean JS, HTML, undefined (tühjus) - tegemist on sissekirjutatud sõnaga JacaScripti, mis on väärtus
// tavaline sinine - muutuja, mida muudetakse
// helesinine - JS sissekirjutatud sõna, mille kaudu saan teha funktiosnaalsusi (localStorage)
// HTML-s sissekirjutatud sõna, mis on tagi omadus (className, src, disabled, onClick, ref, type)
// suure tähega roheline - JS-s tegemist on uue klassiga (new Date())
//          HTML-s sisseimporditud koht (peab olema üleval import ... from "...")
// kollane - funktiooniga, mis lõppeb kasutades sulgudega, mille sulgude sees antakse väärtusi
//      funktioone saan korduvalt kasutada
// oranž (virsik) - jutumärkides väärtus
// roheline- numbriline väärtus
// valge - JS-s igasugused märgid, HTMLs on teksti välja näitamine
// tumeroheline - kommentaar
// tuhm kollane - funktsioon pole kasutatud
// tuhm sinine - muutujat pole kasutatud
// sulud (kandilised, loogelised, tavalised) värvuvad kollaseks, lillakaks, siniseks, seda teeb Visual Studio Code
//      see ei oma tähendust, sellega näidatakse milline on paariline

// =    annab väärtust /liigitust
// === kontrollib kas vasak ja parem pool ühtivad (täiesti identsed), kaks võrdusmärki Reactis ei sobi, see ei kontrolli tüüpi
// >   <   >=   <=    suurem, väiksem, suurem/võrdne, väiksem/võrdne
// => funktsiooni loomise ajal kui kasutan const nimi = () => {}
// ;  rea lõpetamise tähis, mis pole kohustuslik, neid ei panda loogeliste sulgude lõppu
// () tähistavad funktsiooni, nende sees antakse uusi väärtusi
// [] tähistavad väärtuste kogum (array), useState abil genereeritakse 2-ne kogum
// {} koodiblokk    function {}            if () {} else {}         
//    HTMLs on tegemist Javascriptiga {kogus} onClick={suurenda} {true && btn}
// && kui vasakpoolne on tõde, siis parempoolset näidatakse
// || kui vasakpoolne on tühjus, siis võetakse parempoolne
// !  väärtus on vastupidine !== ei ole võrdne      !true ---> false
// ?  :    lühendatud if else (ternary operator) kas on tõsi? teen seda kui on : teen seda kui ei ole
// "" '' pole vahet kumba kasutada, aga ei saa niimoodi "'    '""

// 1. Selles samas projektis sarnaseid asju tehtud
// 2. kas mul on varasemates projektide või kodus tehtud projektides sarnaseid asju tehtud
// 3. guugeldamine + selle järgi iseseisev kirjutamine






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

    // <button onClick={() => uuendaLaigitud("uus väärtus")}>Muuda laigitut</button>
    //  <button onClick={uuendaLaigitud}>Muuda laigitut</button>
    // EI TOHI:
    //  <button onClick={uuendaLaigitud("uus väärtus")}>Muuda laigitut</button>
    // too many re-renders. React limits the number of renders to rpevent an infinite loop.
    
  return (
    <div>

        {laigitud === true && <img src="/laigitud.svg" alt="" />}
        {laigitud === false && <img src="/mittelaigitud.svg" alt="" />}
        <button onClick={() => uuendaLaigitud(!laigitud)}>Muuda laigitut</button>
        <div>{sonum}</div>
        {/* { kogus !== 0 && <button onClick={nulli}>Nulli</button>} */}
        { kogus >  0 && <button onClick={nulli}>Nulli</button>}
        <button disabled={kogus === 0} onClick={vahenda}>-</button>
        <span className={ kogus <= 10 ? "kollane" : "roheline"}>{kogus}</span>
        <button onClick={suurenda}>+</button>
    </div>
  )
}

export default Avaleht

