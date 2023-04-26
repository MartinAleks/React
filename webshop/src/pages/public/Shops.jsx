import { useState, useEffect } from 'react';
import Map from '../../components/Map';
import config from "../../data/config.json"


function Shops() {
  const [coordinates, setCoordinates] = useState({lngLat: [59.4378, 24.7574], zoom: 11});
  const [shops, setShops] = useState([]);
  const [dbShops, setDbShops] = useState([]);
  

  useEffect(() => {
     fetch(config.shopsDbUrl)
       .then(res => res.json())
       .then(json => {
         setShops(json || []);
         setDbShops(json || []);
       });
  }, []);


  return (<div>
    
    <button onClick={() => setCoordinates({lngLat: [58.9562, 25.5995], zoom: 7})}>Kõik poed</button>
    <button onClick={() => setCoordinates({lngLat: [59.4378, 24.7574], zoom: 11})}>Kõik Tallinna poed</button>
    <button onClick={() => setCoordinates({lngLat: [59.4277, 24.7193], zoom: 13})}>Kristiine</button>
    <button onClick={() => setCoordinates({lngLat: [59.4218, 24.7934], zoom: 13})}>Ülemiste</button>
    <button onClick={() => setCoordinates({lngLat: [58.3779, 26.7309], zoom: 13})}>Tasku</button>
    <button onClick={() => setCoordinates({lngLat: [58.3864, 24.5030], zoom: 13})}>Port Artur</button>
    
    
    {/* shops.map(elment =
      > <button onClick={() => setCoordinates({lgnLate: [element.longitude], zoom: 13 })})>
      {element.name}
      </button> */}
    <Map mapCoordinaates={coordinates}  />
  </div>)
}

export default Shops;