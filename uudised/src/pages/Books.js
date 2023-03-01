import React, { useState } from 'react'

function Books() {
    const [raamatud, uuendaRaamatud] = useState(["The Great Gatsby", "War and Peace", "Hamlet", "Moby Dick", "Trainspotting", "Fight Club"]);

    const originaaliTagasi = () => {
        uuendaRaamatud(["The Great Gatsby", "War and Peace", "Hamlet", "Moby Dick", "Trainspotting", "Fight Club"]);
    }
    const sorteeriAZ = () => {
        raamatud.sort((a, b) => a.localeCompare(b));
        uuendaRaamatud(raamatud.slice());
    }

    const sorteeriZA = () => {
        raamatud.sort((a, b) => a.localeCompare(b) * -1);
        uuendaRaamatud(raamatud.slice());
    }

    const sorteeriPikkuseJargi = () => {
        raamatud.sort((a, b) => a.length - b.length);
        uuendaRaamatud(raamatud.slice());
    }

    const sorteeriSonuArvuJargi = () => {
        raamatud.sort((a, b) => a.split(" ").length - b.split(" ").length);
        uuendaRaamatud(raamatud.slice());
    }

    const filtreeriThegaAlgavad = () => {
        const tulem = raamatud.filter(yksRaamat => yksRaamat.startsWith("The"));
        uuendaRaamatud(tulem);
    }

    const filtreeriSisaldabAnd = () => {
        const tulem = raamatud.filter(yksRaamat => yksRaamat.includes(" and "));
        uuendaRaamatud(tulem);
    }

    const filtreeriRohkemKui10 = () => {
        const tulem = raamatud.filter(yksRaamat => yksRaamat.length > 10);
        uuendaRaamatud(tulem);
    }

    const filtreerivahemKui7 = () => {
        const tulem = raamatud.filter(yksRaamat => yksRaamat.length < 7);
        uuendaRaamatud(tulem);
    }

    const asendaVaikesteks = () => {
        const tulem = raamatud.map(yksRaamat => yksRaamat.toLowerCase());
        uuendaRaamatud(tulem);
    }

    const asendaSuurteks = () => {
        const tulem = raamatud.map(yksRaamat => yksRaamat.toUpperCase());
        uuendaRaamatud(tulem);
    }

    const asendaPunktTaha = () => {
        const tulem = raamatud.map(yksRaamat => yksRaamat + ".");
        uuendaRaamatud(tulem);
    }

    const asendaHuuumarkTaha = () => {
        const tulem = raamatud.map(yksRaamat => yksRaamat + "!");
        uuendaRaamatud(tulem);
    }


  return (
    <div>
        <button onClick={originaaliTagasi}>Tagasi originaal sättedesse</button>
        <br />
        <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
        <br />
        <button onClick={sorteeriZA}>Sorteeri Z-A</button>
        <br />
        <button onClick={sorteeriPikkuseJargi}>Sorteeri tähtede arvu järgi kasvavalt</button>
        <br />
        <button onClick={sorteeriSonuArvuJargi}>Sorteeri sõnade arvu järgi kasvavalt</button>
        <br />
        <button onClick={filtreeriThegaAlgavad}>Filtreeri "The"ga algavad nimed</button>
        <br />
        <button onClick={filtreeriSisaldabAnd}>Filtreeri "and" sisaldavad sõnad</button>
        <br />
        <button onClick={filtreeriRohkemKui10}>Jäta alles rohkemate tähemärkidega sõnad kui 10</button>
        <br />
        <button onClick={filtreerivahemKui7}>Jäta alles vähemate tähemärkidega sõnad kui 7</button>
        <br />
        <button onClick={asendaVaikesteks}>Pane kõik väikesteks tähtedeks</button>
        <br />
        <button onClick={asendaSuurteks}>Pane kõik suurteks tähtedeks</button>
        <br />
        <button onClick={asendaPunktTaha}>Pane punkt lõppu</button>
        <br />
        <button onClick={asendaHuuumarkTaha}>Pane hüüumärk lõppu</button>



        {raamatud.map(yksRaamat =><div>{yksRaamat}</div>)}
    </div>
  )
}

export default Books
