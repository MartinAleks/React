import React, { useRef, useState } from 'react'
import productsFromFile from "../../data/products.json"
import { Link } from 'react-router-dom';

function MaintainProducts() {
  const [products, setProducts] = useState(productsFromFile);
  const searchRef = useRef();

  const deleteProduct = (element) => {
    productsFromFile.splice(element, 1);
    setProducts(productsFromFile.slice());
  }

  const searchFromProducts = () => {
    const filteredProducts = productsFromFile.filter(element => 
      element.name.toLowerCase().includes(searchRef.current.value.toLowerCase()));
    setProducts(filteredProducts);
  }
  
  return (
    <div>
      <input onChange={searchFromProducts} ref={searchRef} type="text" />
      <div>{products.length} pcs</div>
      {products.map((element, index) => 
        <div key={index}>
          <Link to={"/cart/"}>
          <img src={element.image} alt="" />
          <div>{element.id}</div>
          <div>{element.name}</div>
          <div>{element.image}</div>
          <div>{element.price}</div>
          <div>{element.category}</div>
          <div>{element.description}</div>
          <div>{element.active}</div>
          </Link>
          <button onClick={() => deleteProduct(element)}>Add to cart</button>
          <Link to={"/admin/edit-product/" + element.id}><button>Edit</button></Link>
          
        </div>
        )}
    </div>
  )
}

export default MaintainProducts