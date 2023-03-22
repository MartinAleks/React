import React, { useState } from 'react'

function Meist() {
  const[kontakt, n2itaKontakt] = useState("");
  const tootajad = [
    {nimi: "Arvo Pärt", ala: "Uudisklippide taustamuusika", telefon: "+31312312"},
    {nimi: "Kelly Sildaru", ala: "Püstolreporter", telefon: "+313124123"},
    {nimi: "Edward Von Lõngus", ala: "Uudiste kujundamine", telefon: "+3131231231"},
    {nimi: "Kerli Kõiv", ala: "Välisturgude spetsialist", telefon: "+314312312"},
    {nimi: "Arvo Pärt", ala: "Uudisklippide taustamuusika", telefon: "+31312312"},
    {nimi: "Kelly Sildaru", ala: "Püstolreporter", telefon: "+313124123"},
    {nimi: "Edward Von Lõngus", ala: "Uudiste kujundamine", telefon: "+3131231231"},
    {nimi: "Kerli Kõiv", ala: "Välisturgude spetsialist", telefon: "+314312312"},
    
  ]
  const [valitud, uuendaValitud] = useState("");

  const v6taYhendust = (tootaja) => {
    n2itaKontakt(tootaja.telefon);
    uuendaValitud(tootaja.nimi);

  }



  return ( <div>
    <div>See on meist leht, nähtav localhost:3000/meist aadressil</div>
    <div>Meie töötajad:</div>
    <div>{valitud}</div>
    <div>{kontakt}</div>
    <br />
    <div>{tootajad.map(tootaja =>
      <div className={tootaja.nimi === valitud ? "valitud" : undefined}>
        <div>{tootaja.nimi}</div>
        <div>{tootaja.ala}</div>
        <button onClick={() => v6taYhendust(tootaja)}>Võta ühendust</button>
        <br /> <br />
    </div> )}
    </div>

    </div>)}
    


export default Meist;