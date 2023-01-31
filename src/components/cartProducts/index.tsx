import { Container, Grid } from "./styles";
import { HeaderCart, ProductItemCart, FooterCart } from "./containers";

export default function CartProducts() { 
  return (
    <Container>
      <Grid>
        <HeaderCart />
        <ProductItemCart />
      </Grid>
      <FooterCart />
    </Container>
  );
}
