import React, { useRef, useState, useEffect } from 'react'
import { Spinner } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import config from "../../data/config.json"

function EditProduct() {
  const { id } = useParams(); // edit-product/:id App.js
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const product = products.find(element => element.id === Number(id)); //HTMLi defaultValue={product.id}

  const index = products.findIndex(element => element.id === Number(id)); // productsFromFile[index] = UUS_TOODE

  const [message, setMessage] = useState("");
  const idRef = useRef();
  const nameRef = useRef();
  const imageRef = useRef();
  const priceRef = useRef();
  const categoryRef = useRef();
  const descriptionRef = useRef();
  const activeRef = useRef();
  const navigate = useNavigate();


  useEffect(() => {
    fetch(config.categoriesDbUrl)
      .then(res => res.json())
      .then(json => setCategories(json || []))

    fetch(config.productsDbUrl) // --> URL tuleb failist
      .then(res => res.json())
      .then(json => {
        setProducts(json || []);
        setLoading(false);
      });
  }, []);

  const edit = () => {
    if (idRef.current.value === "") {
      setMessage("Can't edit product to empty id!")
    } else {
      setMessage("Product edited: " + nameRef.current.value + "!");
      // [] ERROR: tühi fail {} "[]"
      // ["c", "f", "s"] [4]
      products[index] = {
        "id": Number(idRef.current.value),
        "name": nameRef.current.value,
        "image": imageRef.current.value,
        "price": Number(priceRef.current.value), // numbriline: HTML-s number, JS teisendus Number()
        "category": categoryRef.current.value,
        "description": descriptionRef.current.value,
        "active": activeRef.current.checked // kahendväärtus: HTML-s checkbox, JS: .checked
      }; // TEGELIKKUSES: Lisab andmebaasi

      // TEGELIKULT ANDMEBAASIS EI UUENDATA ---->
      // PEAN ANDMEBAASI SAATMISE TEGEMA
      fetch(config.productsDbUrl, { "method": "PUT", "body": JSON.stringify(products) })
        .then(res => res.json())
        .then(() => navigate("/admin/maintain-products"))
    }
  }

  const checkIdUniqueness = () => {
    const found = products.find(element => element.id === Number(idRef.current.value));
    if (found === undefined) {
      setMessage("");
    } else {
      setMessage("ID is not unique!");
    }
  }

  // const checkIdUniqueness = () => {
  //   const found = productsFromFile.filter(element => element.id === Number(idRef.current.value));
  //   if (found.length === 0) {
  //     setMessage("");
  //   } else {
  //     setMessage("ID is not unique!");
  //   }
  // }


  if (isLoading === true) {
    return <div className="center"><Spinner /></div>
  }

  return (
    <div>
      {product !== undefined && <div>
        {message} <br />
        <label>product's id:</label> <br />
        <input onChange={checkIdUniqueness} ref={idRef} defaultValue={product.id} type="number" /> <br />
        <label>product's name:</label> <br />
        <input ref={nameRef} defaultValue={product.name} type="text" /> <br />
        <label>product's price:</label> <br />
        <input ref={priceRef} defaultValue={product.price} type="number" /> <br />
        <label>product's image:</label> <br />
        <input ref={imageRef} defaultValue={product.image} type="text" /> <br />
        <label>product's category:</label> <br />
        {/* <input ref={categoryRef} defaultValue={product.category} type="text"/> <br /> */}
        <select ref={categoryRef} defaultValue={product.category}>
          {categories.map(element => <option key={element.name}>{element.name}</option>)}
        </select> <br />
        <label>product's description:</label> <br />
        <input ref={descriptionRef} defaultValue={product.description} type="text" /> <br />
        <label>product's active:</label> <br />
        <input ref={activeRef} defaultChecked={product.active} type="checkbox" /> <br />
        {/* <button onClick={() => lisa()}>Sisesta</button> <br /> */}
        <button disabled={message === "ID is not unique!"} onClick={edit}>Edit</button> <br />
      </div>}
      {product === undefined && <div>Product not found</div>}
    </div>
  )
}

export default EditProduct