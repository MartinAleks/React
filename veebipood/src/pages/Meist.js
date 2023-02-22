import React, { useState } from 'react'

function Meist() {
  const [message, määraMessage] = useState("Vali mõni tegevus");
  const[n2itaEmaili, uuendaEmaili] = useState(false);
  const[telefon, uuendaTelefoni] = useState(localStorage.getItem("telefon") || "");
  const[aadress, uuendaAadressi] = useState(localStorage.getItem("aadress") || "");
  


    return (
    <div>
      Meie email: {n2itaEmaili === true && localStorage.getItem("email")}
                  {n2itaEmaili === false && <button onClick={() => uuendaEmaili(true)}>Näita emaili</button> }
      <br />
      Meie telefon: {telefon} 
      { telefon.startsWith("+372") === false && <button onClick={() => uuendaTelefoni("+372" + telefon)}>Lisa suunakood</button>}
      <br />
      Meie aadress: {aadress}
      <button onClick={() => uuendaAadressi(aadress.toUpperCase())}>Aadress suurteks tähtedeks</button>
      <button onClick={() => uuendaAadressi(aadress.toLowerCase())}>Aadress väikesteks tähtedeks</button>
      <br />
      <div>{message}</div>
      <button onClick={() => määraMessage("Selleks saada meile e-mail jobs@html-css-com")}>Kandideeri tööle</button>
      <button onClick={() => määraMessage("Meil on 10 töötajat, kelle info ilmub veebilehele lähiajal")}>Vaata meie töötajaid</button>
      <button onClick={() => määraMessage("Ühenduse võtmiseks mine lehele Kontakt")}>Võta meiega ühendust</button>
    </div>
    )
}

export default Meist