import Navbar from "../components/navbar";
import Products from "../components/products";
import Footer from "../components/footer";
import CartProducts from "../components/cartProducts";
import { useSelector } from "react-redux";

//fazer parte logica de incrementar e decrementar
//fazer calculo de produtos
//abrir modal de cart

//loading projeto
//refatorar projeto

function App() {
  type DataProducts = {
    id: number;
    name: string;
    brand: string;
    description: string;
    photo: string;
    price: string;
    theAmount: number;
  };

  type DataState = {
    stateShoopingCart: {
      shoopingCart: DataProducts[];
      seeProducts: boolean;
    };
  };

  const { seeProducts } = useSelector(
    (state: DataState) => state.stateShoopingCart
  );

  console.log(seeProducts);
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
