import { Container, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AboutUs from "../features/about/AboutUs";
import Catalog from "../features/catalog/Catalog";
import ProductDetails from "../features/catalog/ProductDetails";
import ContactUs from "../features/contact/ContactUs";
import HomePage from "../features/home/HomePage";
import Header from "./Header";
import 'react-toastify/dist/ReactToastify.css';
import NotFound from "../errors/NotFound";
import BasketPage from "../features/basket/BasketPage";
import { useStoreContext } from "../context/StoreContext";
import { getCookie } from "../util/util";
import agent from "../api/agent";
import LoadingComponent from "./LoadingComponents";
import CheckoutPage from "../features/checkout/CheckoutPage";

function App() {
  //set the basket
  const { setBasket } = useStoreContext();
  const [loading, setLoading] = useState(true);

  //to go and get the basket when our plaication loads
  useEffect(() => {
    const customerId = getCookie('customerId'); //debe coincidir en como hemos llamado la cookie
    //si tenemos el customerId
    if (customerId) {
      agent.Basket.get()
        .then(basket => setBasket(basket))//podemos usar nuestro metodo setBasket desde nuestro context
        .catch(error => console.log(error)) //catch cualquier error
        .finally(() => setLoading(false)) //
    }
    else{
      setLoading(false);
    }
  }, [setBasket]) //la funcion basket no va a cambiar despues de "set" el loading, va a ser llamado una vez

  const [darkMode, setDarkMode] = useState(false);
  const paletteType = darkMode ? 'dark' : 'light';

  const theme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: paletteType === 'light' ? '#eaeaea' : '#121212'
      }
    }
  })

  function handleThemeChange() {
    setDarkMode(!darkMode);
  }

  if (loading) return <LoadingComponent message="Initializing app..." />

  return (
    <ThemeProvider theme={theme}>
      <ToastContainer position="bottom-right" hideProgressBar />
      <CssBaseline />
      <Header darkMode={darkMode} handleThemeChange={handleThemeChange} />
      <Container>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/catalog/:id" element={<ProductDetails />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/basket" element={<BasketPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </ThemeProvider>
  );
}

export default App;
