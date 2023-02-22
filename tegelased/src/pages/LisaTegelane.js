import React, { useRef, useState } from 'react'

function LisaTegelane() {
    const [sonum, uuendaSonum] = useState("");
    const nimiRef = useRef();

    const lisaUusTegelane = () => {
        if (nimiRef.current.value === "") {
            uuendaSonum("Tühja nimega ei saa sisestada");
        } else {
            uuendaSonum("Tegelane lisatud");
        }
    }

  return (
    <div>
        <div>{sonum}</div>
        <label>Tegelase nimi</label> <br />
        <input ref={nimiRef} type="text" /> <br />
        <button onClick={lisaUusTegelane}>Lisa uus</button> <br />
    </div>
  );
}

export default LisaTegelane;