import React, { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap';
import { useParams, } from 'react-router-dom'
import config from "../../data/config.json"

function SingleProduct() {
  const { id } = useParams(); // id järgi
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(config.productsDbUrl) // --> URL tuleb failist
      .then(res => res.json())
      .then(json => {
        setProducts(json || []);
        setLoading(false);
      });
  }, []);
  // const found = productsFromFile[ id ]; //failist järjekorranumbriga
  const found = products.find(element => element.id === Number(id));

  if (isLoading === true) {
    return <div className="center"><Spinner /></div>
  }

  return (
    <div>
      {found === undefined && <div>Toodet ei leitud!</div>}
      {found !== undefined &&
        <div>
          <div>{found.name}</div>
          <div>{found.price} €</div>
          <img src={found.image} alt="" />
          <div>{found.category}</div>
          <div>{found.price}</div>
          <div>{found.description}</div>
          <div>{found.active}</div>
        </div>}
    </div>
  )
}

export default SingleProduct