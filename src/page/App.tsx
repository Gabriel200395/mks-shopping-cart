import Navbar from "../components/navbar";
import Products from "../components/products";
import Footer from "../components/footer";
import CartProducts from "../components/cartProducts";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { SeeProductsCart } from "../context/reducers/reducer.Cart";

//mudar nome do arquivo reducers  
//state global aplicação 
//arrumar nomes de funções!


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

  const { seeProducts, shoopingCart } = useSelector(
    (state: DataState) => state.stateShoopingCart
  );

  const dispatch = useDispatch();

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
