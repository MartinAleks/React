import React, { useRef, useState } from 'react'
import productsFromFile from "../../data/products.json"
import categoriesFromFile from "../../data/categories.json"

function AddProduct() {

  // KODUS: uue toote lisamine
  const [message, setMessage] = useState("Add new product!")
  const idRef = useRef();
  const nameRef = useRef();
  const imageRef = useRef();
  const priceRef = useRef();
  const categoryRef = useRef();
  const descriptionRef = useRef();
  const activeRef = useRef();

  const add = () => {
    if(nameRef.current.value === ""){
      setMessage("Can't add product with empty name!")
    } else if (!checkIdUniqueness(Number(idRef.current.value))) {
      setMessage("Product ID must be unique!");}
    else {
      setMessage("Product added to cart: " + nameRef.current.value + "!");
      // [] ERROR: tühi fail {} "[]"
      productsFromFile.push({
        "id":Number(idRef.current.value),
        "name":nameRef.current.value,
        "image":imageRef.current.value,
        "price":Number(priceRef.current.value), // numbriline: HTML-s number, JS teisendus Number()
        "category":categoryRef.current.value,
        "description":descriptionRef.current.value,
        "active":activeRef.current.checked // kahendväärtus: HTML-s checkbox, JS: .checked
      }); // TEGELIKKUSES: Lisab andmebaasi
      nameRef.current.value = "";
    }

  }

  const checkIdUniqueness = () => {
    const productIds = productsFromFile.map(product => product.id);
    return !productIds.includes(Number(idRef.current.value));
  }
    
  

  return (
    <div>
      {message} <br />
      <label>New product's id:</label> <br />
      <input onChange={checkIdUniqueness} ref={idRef} type="number"/> <br />
      <label>New product's name:</label> <br />
      <input ref={nameRef} type="text"/> <br />
      <label>New product's price:</label> <br />
      <input ref={priceRef} type="number"/> <br />
      <label>New product's image:</label> <br />
      <input ref={imageRef} type="text"/> <br />
      <label>New product's category:</label> <br />
      {/* <input ref={categoryRef} type="text"/> <br /> */}
      <select ref={categoryRef}>
    	  {categoriesFromFile.map(element => <option>{element}</option> )}
      </select> <br />
      <label>New product's description:</label> <br />
      <input ref={descriptionRef} type="text"/> <br />
      <label>New product's active:</label> <br />
      <input ref={activeRef} type="checkbox"/> <br />
      {/* <button onClick={() => lisa()}>Sisesta</button> <br /> */}
      <button onClick={add}>Enter</button> <br />
    </div>
  )
}

export default AddProduct