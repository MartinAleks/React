import React, { useEffect, useState } from 'react'

function ParcelMachine() {
    const [parcelMachines, setParcelMachines] = useState([]);

    useEffect(() => { //kui lehele tulles, kohe tehakse API päring
        fetch("https://www.omniva.ee/locations.json") // VÕTAB ALATI AEGA 0.1s-1s
            .then(res => res.json())
            .then(json => setParcelMachines(json));
    }, []);

    return (
        <div>
            <select>
                {parcelMachines.filter(pm => pm.A0_NAME === "EE").map(pm => <option key={pm.NAME}>{pm.NAME}</option>)}
            </select>
        </div>
    )
}

export default ParcelMachine
