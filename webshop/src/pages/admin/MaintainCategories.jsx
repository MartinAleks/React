import React, { useEffect, useRef, useState } from 'react'
// import categoriesFromFile from "../../data/categories.json"
import { ToastContainer, toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import config from "../../data/config.json";
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';


function MaintainCategories() {
  const [categories, setCategories] = useState([]);
  const categoryRef = useRef();
  const { t } = useTranslation();

  useEffect(() => {
    fetch(config.categoriesDbUrl)
      .then(res => res.json())
      .then(json => setCategories(json || [])); // || []
  }, []);

  const deleteCategory = (index) => {
    categories.splice(index, 1);
    //setCategories(categories.slice());
    fetch(config.categoriesDbUrl, { "method": "PUT", "body": JSON.stringify(categories) })
      .then(res => res.json())
      .then(() => {
        setCategories(categories.slice());
        //categoryRef.current.value = "";
        toast.success(t("succesfully deleted"));
      })
  }

  const addCategory = ($event) => {
    // console.log($event);
    if ($event.code === "Enter" || $event.type === "click") { // 1. kui tegemist on hiireklikiga siia funktsiooni sisenemisega
      // 2. kui tegemist on enter klahvivajutusega siia funktsiooni sisenemisega
      categories.push({ "name": categoryRef.current.value });
      // JA LISAKS --> muutma AddProductis ja EditProductis ka, et mul objekt kuju
      fetch(config.categoriesDbUrl, { "method": "PUT", "body": JSON.stringify(categories) })
        .then(res => res.json())
        .then(() => {
          setCategories(categories.slice());
          categoryRef.current.value = "";
          toast.success(t("succesfully added"));
        })

    }
  }

  return (
    <div className="center">
      < ToastContainer />
      <div className='categories'>
        {categories.map((element, index) => (
          <div key={index} className="category">
            <span>{element.name}</span>
            <Button variant="contained" onClick={() => deleteCategory(index)}>x</Button>
          </div>
        ))} <br />
        <label>Category</label> <br />
        <TextField label="Category"  onKeyUp={addCategory} inputRef={categoryRef} type="text" /> <br />
        <Button onClick={addCategory}>Add</Button>
      </div>
    </div>
  )
}

export default MaintainCategories