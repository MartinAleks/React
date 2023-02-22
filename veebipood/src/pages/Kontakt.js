import React, { useState } from 'react'

function Kontakt() {

    const [aadress, määraAadress] = useState("Tallinn");
    const [telefon, määraTelefon] = useState("5512345");
    const [email, määraEmail] = useState("bla@baa.com");
    const [ingliseKeelne, MääraIngliseKeelne] = useState("ei");
   
    const ingliseks = () => {
        määraAadress("London");
        määraTelefon("1231414");
        määraEmail("london@london.com");
        MääraIngliseKeelne("jah");
    }
  return (
    <div>
        <div>{ aadress }</div>
        <div>{ telefon }</div>
        <div>{ email }</div>
    <button onClick={ingliseks}>Muuda inglise keelseks</button>
    { ingliseKeelne === "jah" && <div>Leht on inglise keelne</div>}
    </div>
  );
}

export default Kontakt;