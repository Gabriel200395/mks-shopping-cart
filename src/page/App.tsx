import Navbar from "../components/navbar";
import Products from "../components/products";
import Footer from "../components/footer";
import CartProducts from "../components/cartProducts";
import { useGlobalState } from "../hooks";

function App() {
  const { state } = useGlobalState();
  const { seeProducts } = state.stateShoopingCart; 



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
