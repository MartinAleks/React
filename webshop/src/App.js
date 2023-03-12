import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from "./pages/HomePage";
import Cart from "./pages/Cart";
import Shop from "./pages/Shop";
import ContactUs from "./pages/ContactUs";
import AdminHome from "./pages/AdminHome";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";
import MaintainProducts from "./pages/MaintainProducts";
import MaintainShops from "./pages/MaintainShops";
import MaintainCategories from "./pages/MaintainCategories";



// Link <-- pole vaja veel
// Routes ja Route

// npm install react-router-dom
// BrowserRouter
// failid App.js järgi
// failid ka kustuda
// Firebase üles panna: ainult "Hosting configure files" koht
// Favicon muuta, nimi muuta index.html sees
// Uus font google.fonts.com
// Toastify

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="" element={ <HomePage />} />
        <Route path="cart" element={ <Cart />} />
        <Route path="shop" element={ <Shop />} />
        <Route path="contact" element={ <ContactUs />} />
        <Route path="admin" element={ <AdminHome />} />
        <Route path="admin/add-product" element={ <AddProduct />} />
        <Route path="admin/edit-product" element={ <EditProduct />} />
        <Route path="admin/maintain-products" element={ <MaintainProducts />} />
        <Route path="admin/maintain-shops" element={ <MaintainShops />} />
        <Route path="admin/maintain-categories" element={ <MaintainCategories />} />
      </Routes>
    </div>
  );
}

export default App;
