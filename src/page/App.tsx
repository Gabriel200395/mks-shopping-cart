import Navbar from "../components/navbar";
import Products from "../components/products";
import Footer from "../components/footer";

//configurar redux projeto
//fazer requisição de produtos
//fazer parte logica de incrementar e decrementar
//fazer calculo de produtos
//quantidade produtos carrinho
//abrir modal de cart 
//loading projeto

function App() {
  return (
    <>
      <Navbar />
      <Products />
      <Footer />
      {/*       <CartProducts />
       */}{" "}
    </>
  );
}

export default App;
