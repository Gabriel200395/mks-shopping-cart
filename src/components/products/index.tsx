import { Container, GridProcucts } from "./styles";

import { useProduct } from "../../hooks";
import ProductItem from "./containers/Product";

export default function Products() {
  const { products, addProductCart } = useProduct();

  return (
    <Container>
      <GridProcucts>
        <ProductItem products={products} addProductCart={addProductCart} />
      </GridProcucts>
    </Container>
  );
}
