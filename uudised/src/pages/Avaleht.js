import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";

function Avaleht() {
  const [postitused, uuendaPostitused] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data => uuendaPostitused(data))
  }, []);

  return (<div>
    <div>See on avaleht, nähtav localhost:3000 aadressil</div>
    <img src='https://cdn-icons-png.flaticon.com/512/21/21601.png' alt='' />
    {postitused.map((element, index) =>
      <div key={index}>
        <div><i>{element.userId}</i></div>
        <div><u>{element.Id}</u></div>
        <div><b>{element.title}</b></div>
        <div>{element.body}</div>
        <Link to={"/kasutaja-postitus/" + element.userId}>
        <button>Kõik kasutaja postitused</button>
      </Link>
      </div>
    )}
  </div>);
}

export default Avaleht;