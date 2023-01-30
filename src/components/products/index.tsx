import { ColorRing } from "react-loader-spinner";
import { Container, GridProcucts, ContainerLoading } from "./styles";

import { useProduct, useGlobalState } from "../../hooks";
import ProductItem from "./containers/Product";

export default function Products() {
  const { products, addProductCart } = useProduct();
  const { state } = useGlobalState();
  const { loading } = state.stateProducts;

  if (loading) {
    return (
      <ContainerLoading>
        <ColorRing
          visible={true}
          height="100"
          width="100"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={["#0F52BA", "#0F52BA", "#0F52BA", "#0F52BA", "#0F52BA"]}
        />
      </ContainerLoading>
    );
  }

  return (
    <Container>
      <GridProcucts>
        <ProductItem products={products} addProductCart={addProductCart} />
      </GridProcucts>
    </Container>
  );
}
