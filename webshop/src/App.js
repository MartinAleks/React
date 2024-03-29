import { Link, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from "./pages/public/HomePage";
import Cart from "./pages/public/Cart";
import Shop from "./pages/public/Shops";
import ContactUs from "./pages/public/ContactUs";
import AdminHome from "./pages/admin/AdminHome";
import AddProduct from "./pages/admin/AddProduct";
import EditProduct from "./pages/admin/EditProduct";
import MaintainProducts from "./pages/admin/MaintainProducts";
import MaintainShops from "./pages/admin/MaintainShops";
import MaintainCategories from "./pages/admin/MaintainCategories";
import Container from 'react-bootstrap/Container';
import SingleProduct from "./pages/public/SingleProduct";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useTranslation } from 'react-i18next';
import { useContext } from 'react';
import { CartSumContext } from './store/CartSumContext';
import Login from './pages/public/Login';
import Signup from './pages/public/Signup';
import { AuthContext } from './store/AuthContext';
import NotFound from './pages/public/NotFound';





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

//Lõpuprojekt: Reactis, Firebase üles laetud
//26.04 13.00-14.30 20min 1.lehte 2. huvitavamaid koodilõike

function App() {
  const { t, i18n } = useTranslation();
  const { cartSum } = useContext(CartSumContext);
  const { loggedIn, setLoggedIn } = useContext(AuthContext);

  const updateLang = (newLang) => {
    i18n.changeLanguage(newLang);
    localStorage.setItem("language", newLang);
  }

  const logout = () => {
    setLoggedIn(false);
    sessionStorage.removeItem("token");
  }

  return (
    <div className="App">
      
      
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">Webshop</Navbar.Brand>
          <Nav className="me-auto">
            {loggedIn === true && <Nav.Link as={Link} to="/admin">{t("admin")}</Nav.Link>}
            <Nav.Link as={Link} to="/cart">{t("cart")}</Nav.Link>
            <Nav.Link as={Link} to="/contact">{t("contact")}</Nav.Link>
            <Nav.Link as={Link} to="/shops">{t("shops")}</Nav.Link>
            {loggedIn === false && <Nav.Link as={Link} to="/login">{t("login")}</Nav.Link>}
            {loggedIn === false &&<Nav.Link as={Link} to="/signup">{t("signup")}</Nav.Link>}
            {loggedIn === true && <Nav.Link onClick={logout}>Logi välja</Nav.Link>}
          </Nav>
          <div>{cartSum} €</div>
          <img className="lang" src="/estonia.png" alt="" onClick={() => updateLang("ee")}/>
          <img className="lang" src="/english.png" alt="" onClick={() => updateLang("en")}/>
          
        </Container>
      </Navbar>

      <Routes>
        <Route path="" element={ <HomePage />} />
        <Route path="cart" element={ <Cart />} />
        <Route path="shops" element={ <Shop />} />
        <Route path="product/:id" element={ <SingleProduct />} />
        <Route path="contact" element={ <ContactUs />} />
        { loggedIn === true &&<>
        <Route path="admin" element={ <AdminHome />} />
        <Route path="admin/add-product" element={ <AddProduct />} />
        <Route path="admin/edit-product/:id" element={ <EditProduct />} />
        <Route path="admin/maintain-products" element={ <MaintainProducts />} />
        <Route path="admin/maintain-shops" element={ <MaintainShops />} />
        <Route path="admin/maintain-categories" element={ <MaintainCategories />} />
        </>}
        { loggedIn === false && <Route path="admin/*" element= { <Navigate to="/login" /> } />}
        <Route path="login" element={ <Login />} />
        <Route path="signup" element={ <Signup />} />
        {/* <Route path="*" element={ <Navigate to="/" />} /> */}
        <Route path="*" element={ <NotFound />} />
      </Routes>

      <div className='footer'>SEE ON FOOTER</div>
    </div>
  );
}

export default App;
