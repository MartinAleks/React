import logo from './logo.svg';
import './App.css';

// Link <-- pole vaja veel
// Routes ja Route

// npm install react-router-dom
// BrowserRouter
// failid App.js järgi
// failid ka kustuda
// Firebase üles panna: ainult "Hosting configure files" koht

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
        <Route path="admin/edot-product" element={ <EditProduct />} />
        <Route path="admin/maintain-products" element={ <MaintainProducts />} />
        <Route path="admin/maintain-shops" element={ <MaintainShops />} />
        <Route path="admin/maintain-categories" element={ <MaintainCategories />} />
      </Routes>
    </div>
  );
}

export default App;
