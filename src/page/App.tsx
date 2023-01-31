import Navbar from "../components/navbar";
import Products from "../components/products";
import Footer from "../components/footer";
import CartProducts from "../components/cartProducts";
import { useGlobalState } from "../hooks";
import { SeeProductsCart } from "../context/reducers/reducer.Cart";
import { useEffect } from "react";

function App() {
  const { state, dispatch } = useGlobalState();
  const { shoopingCart, seeProducts } = state.stateShoopingCart; 


  useEffect(() => {
    if (shoopingCart.length < 1) {
      dispatch(SeeProductsCart(false));
    }
  }, [shoopingCart]); 



  return (
    <>
      <Navbar />
      <Products />
      <Footer />
      {seeProducts && <CartProducts />}
    </>
  );
}

export default App;
