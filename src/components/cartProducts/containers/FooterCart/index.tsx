import { Button, Span, Grid } from "../../styles";
import { useProductsCart } from "../../../../hooks";

export default function HeaderCart() {
  const { finalAmountPayable } = useProductsCart();
  return (
    <Grid className="container-checkout">
      <Grid className="price">
        <Span>Total:</Span>
        <Span data-testid="total-payable">{finalAmountPayable}</Span>
      </Grid>
      <Button>Finalizar Compra</Button>
    </Grid>
  );
}
