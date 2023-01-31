import { Button, Title, Grid } from "../../styles";
import { SeeProductsCart } from "../../../../context/reducers/reducer.Cart";
import { useGlobalState } from "../../../../hooks";

export default function HeaderCart() {
  const { dispatch } = useGlobalState();

  return (
    <Grid className="header-cart">
      <Title>Carrinho de compras</Title>
      <Button onClick={() => dispatch(SeeProductsCart(false))}>
        <i className="fas fa-times" aria-hidden="true" />
      </Button>
    </Grid>
  );
}
