import React, { useRef, useState, useEffect } from 'react'
// import productsFromFile from "../../data/products.json"
// import categoriesFromFile from "../../data/categories.json"
import config from "../../data/config.json"

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
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
 

  useEffect(() => {
    fetch(config.categoriesDbUrl) // --> URL tuleb failist
      .then(res => res.json())
      .then(json => setCategories(json || []));


    fetch(config.productsDbUrl) // --> URL tuleb failist
      .then(res => res.json())
      .then(json => setProducts(json || []));
  }, []);

  const add = () => {
    if(idRef.current.value === ""){
      setMessage("Can't add product with empty id")
      return;
    } 
    if(/^[A-Z].*/.test(nameRef.current.value) === false){
      setMessage("Can't add product with small letter!")
      return;
    } 
    if(nameRef.current.value === ""){
      setMessage("Can't add product with empty name!")
      return;
    } 
    // if(nameRef.current.value[0].toLowerCase() === nameRef.current.value[0]){
    //   setMessage("Can't add product with small letter!")
    //   return;
    // } 
    if(imageRef.current.value === (" ", "").length === imageRef.current.value.length){
      setMessage("Can't add product image address with empty spaces!")
      return;
    } 
    if (/^\S*$/.test(imageRef.current.value) === false){
      setMessage("Can't add product image address with spaces!")
      return;
    }

    
    
      
      // [] ERROR: tühi fail {} "[]"
      products.push({
        "id":Number(idRef.current.value),
        "name":nameRef.current.value,
        "image":imageRef.current.value,
        "price":Number(priceRef.current.value), // numbriline: HTML-s number, JS teisendus Number()
        "category":categoryRef.current.value,
        "description":descriptionRef.current.value,
        "active":activeRef.current.checked // kahendväärtus: HTML-s checkbox, JS: .checked
      }); // TEGELIKKUSES: Lisab andmebaasi
      
      // SIIA ANDMEBAASI SAATMINE
      fetch(config.productsDbUrl, {"method": "PUT", "body": JSON.stringify(products)})
        .then(res => res.json())
        .then(() => {
          setMessage("Product added to cart: " + nameRef.current.value + "!");
          idRef.current.value = "";
          nameRef.current.value = "";
          imageRef.current.value = "";
          priceRef.current.value = "";
          descriptionRef.current.value = "";
          activeRef.current.value = false;
        })
    

  }
  const checkIdUniqueness = () => {
    const productIds = products.map(product => product.id);
    return !productIds.includes(Number(idRef.current.value));
  }
    
  return (
    <div className="center">
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
    	  {categories.map(element => <option key={element.name}>{element.name}</option> )}
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