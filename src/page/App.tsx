import Navbar from "../components/navbar";
import Products from "../components/products";
import Footer from "../components/footer";
import CartProducts from "../components/cartProducts";
import { useEffect } from "react";
import { SeeProductsCart } from "../context/reducers/reducer.Cart";
import { useGlobalState } from "../hooks";

//loading projeto
//teste projeto
//arrumar css

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
