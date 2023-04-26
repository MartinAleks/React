import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function KasutajaPostitus() {
  const { kasutajaId } = useParams();
  const [postitused, uuendaPostitused] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data => {
        const result = data.filter(element => element.userId === Number(kasutajaId));
        uuendaPostitused(result);
      })    
  }, []);

  return (
    <div>
      {postitused.map(element =>
        <div key={element.id}>
          <div><i>{element.userId}</i></div>
          <div><u>{element.Id}</u></div>
          <div><b>{element.title}</b></div>
          <div>{element.body}</div>
        </div> 
      )}
    </div>
  );
}

export default KasutajaPostitus;