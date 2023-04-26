import React, { useRef, useState } from 'react'
import config from "../data/config.json"

function LisaJook() {
    const jookRef = useRef();
    const [joogid, setJoogid] = useState([]);

    useEffect(() => {
        fetch(config.joogidDbUrl)
            .then(res => res.json())
            .then(json => setJoogid(json || []));
    }, []);

    function lisaUusJook() {
        joogid.push({"nimi": jookRef.current.value});
        fetch(config.joogidDbUrl, {"method": "PUT", "body": JSON.stringify(joogid)});
    }


  return (
    <div>
        <label>Lisa uus jook:</label>
        <input ref={jookRef} type="text" />
        <button onClick={() => lisaUusJook()}>Sisesta</button>
    </div>
  )
}

export default LisaJook