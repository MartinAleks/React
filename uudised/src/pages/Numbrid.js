import React, { useState } from 'react'

function Numbrid() {

    const [numbrid, uuedNumbrid]=useState([4, 23, 7, 39, 19, 0, 9, 14, 31, 6]);

    const originaaliTagasi = () => {
        uuedNumbrid([4, 23, 7, 39, 19, 0, 9, 14, 31, 6])
    }
    const sorteeriEsimeseNumbriJargi = () => {
        const sortedNumbrid = numbrid.map(num => num.toString()).sort((a, b) => a.localeCompare(b));
        uuedNumbrid(sortedNumbrid.map(num => parseInt(num, 10)));
      };   
    
    const sorteeriEsimeseNumbriJargiKahanevalt = () => {
        const sortedNumbrid = numbrid.map(num => num.toString()).sort((a, b) => b.localeCompare(a));
        uuedNumbrid(sortedNumbrid.map(num => parseInt(num, 10)));
      };  

    const sorteeriNumbriJargi = () => {
        const sortedNumbrid = numbrid.slice().sort((a, b) => a - b);
        uuedNumbrid(sortedNumbrid);
    };

    const sorteeriNumbriJargiKahanevalt = () => {
        const sortedNumbrid = numbrid.slice().sort((a, b) => b - a);
        uuedNumbrid(sortedNumbrid);
    };

    const suuremadKui8 = () => {
        const filteredNumbrid = numbrid.filter(num => num > 8);
        uuedNumbrid(filteredNumbrid);
    }

    const vaiksemadKui10 = () => {
        const filteredNumbrid = numbrid.filter(num => num < 10);
        uuedNumbrid(filteredNumbrid);
    }

    const paarisArvud = () => {
        const filteredNumbrid = numbrid.filter(num => num % 2 === 0);
        uuedNumbrid(filteredNumbrid);
    }

    const paaritudArvud = () => {
        const filteredNumbrid = numbrid.filter(num => num % 2 !== 0);
        uuedNumbrid(filteredNumbrid);
    }

    const korrutaKahegaKoike = () => {
        const tulem = numbrid.map(x => x * 2);
        uuedNumbrid(tulem);
    }

    const jagaKolmegaKoike = () => {
        const tulem = numbrid.map(x => x / 3);
        uuedNumbrid(tulem);
    }

    const liida10Juurde = () => {
        const tulem = numbrid.map(x => x + 10);
        uuedNumbrid(tulem);
    }

    const lahuta1Juurest = () => {
        const tulem = numbrid.map(x => x - 1);
        uuedNumbrid(tulem);
    }



    

  return (
    <div>
        <button onClick={originaaliTagasi}>Taasta algsed seaded</button>
        <br /> 
        <button onClick={sorteeriEsimeseNumbriJargi}>Sorteeri esimese numbri järgi</button>
        <br />
        <button onClick={sorteeriEsimeseNumbriJargiKahanevalt}>Sorteeri esimese numbri järgi kahanevalt</button>
        <br />
        <button onClick={sorteeriNumbriJargi}>Sorteeri numbrid kasvavas järjekorras</button>
        <br />
        <button onClick={sorteeriNumbriJargiKahanevalt}>Sorteeri numbrid kahanevas järjekorras</button>
        <br />
        <button onClick={suuremadKui8}>Jäta alles arvud suuremad kui 8</button>
        <br />
        <button onClick={vaiksemadKui10}>Jäta alles arvud väiksemad kui 10</button>
        <br />
        <button onClick={paarisArvud}>Jäta alles paarisarvud</button>
        <br />
        <button onClick={paaritudArvud}>Jäta alles paaritud arvud</button>
        <br />  
        <button onClick={korrutaKahegaKoike}>Korruta kõike kahega</button>
        <br />  
        <button onClick={jagaKolmegaKoike}>Jaga kõiki arve kolmega</button>
        <br /> 
        <button onClick={liida10Juurde}>Liida igale arvule 10 juurde</button>
        <br />
        <button onClick={lahuta1Juurest}>Lahuta igast arvust 1</button>
        <br />
             

        {numbrid.map(yksNumber =><div>{yksNumber}</div>)}




    </div>
  )
}

export default Numbrid