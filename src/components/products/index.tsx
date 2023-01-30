import { Container, GridProcucts } from "./styles";

import ProductItem from "./containers/Product";

export default function Products() {
  return (
    <Container>
      <GridProcucts>
        <ProductItem />
      </GridProcucts>
    </Container>
  );
}
