import { Container, Button, Span, Title, Img, Paragraph, Grid } from "./styles";
import cart from "../../assets/icons/apple-watch.png";
import { useSelector, useDispatch } from "react-redux";
import { SeeProductsCart } from "../../context/reducers/pruductsCart";

export default function CartProducts() {
  type DataProducts = {
    id: number;
    name: string;
    brand: string;
    description: string;
    photo: string;
    price: string;
  };

  type DataState = {
    stateShoopingCart: {
      shoopingCart: DataProducts[];
      seeProducts: boolean;
    };
  };

  const dispatch = useDispatch();
  const { shoopingCart } = useSelector(
    (state: DataState) => state.stateShoopingCart
  );

  return (
    <Container>
      <Grid>
        <Grid className="header-cart">
          <Title>Carrinho de compras</Title>
          <Button onClick={() => dispatch(SeeProductsCart(false))}>x</Button>
        </Grid>
        <Grid className="container-products-cart">
          <Grid className="product-item-cart">
            <Grid className="product-item-grid-cart-elements">
              <Img src={cart} alt={cart} height={46} />
              <Paragraph>Apple Watch Series 4 GPS</Paragraph>
              <Grid className="product-grid-elements">
                <Span className="product-text-theAmount">Qnt</Span>
                <Grid className="product-container-buttons">
                  <Grid className="product-grid-buttons">
                    <Button>-</Button>
                    <Span>1</Span>
                    <Button>+</Button>
                  </Grid>
                  <Span className="price">R$300</Span>
                </Grid>
              </Grid>
              <Button className="close">x</Button>
            </Grid>
          </Grid>
          <Grid className="product-item-cart">
            <Grid className="product-item-grid-cart-elements">
              <Img src={cart} alt={cart} height={46} />
              <Paragraph>Apple Watch Series 4 GPS</Paragraph>
              <Grid className="product-grid-elements">
                <Span className="product-text-theAmount">Qnt</Span>
                <Grid className="product-container-buttons">
                  <Grid className="product-grid-buttons">
                    <Button>-</Button>
                    <Span>1</Span>
                    <Button>+</Button>
                  </Grid>
                  <Span className="price">R$300</Span>
                </Grid>
              </Grid>
              <Button className="close">x</Button>
            </Grid>
          </Grid>
          <Grid className="product-item-cart">
            <Grid className="product-item-grid-cart-elements">
              <Img src={cart} alt={cart} height={46} />
              <Paragraph>Apple Watch Series 4 GPS</Paragraph>
              <Grid className="product-grid-elements">
                <Span className="product-text-theAmount">Qnt</Span>
                <Grid className="product-container-buttons">
                  <Grid className="product-grid-buttons">
                    <Button>-</Button>
                    <Span>1</Span>
                    <Button>+</Button>
                  </Grid>
                  <Span className="price">R$300</Span>
                </Grid>
              </Grid>
              <Button className="close">x</Button>
            </Grid>
          </Grid>{" "}
          <Grid className="product-item-cart">
            <Grid className="product-item-grid-cart-elements">
              <Img src={cart} alt={cart} height={46} />
              <Paragraph>Apple Watch Series 4 GPS</Paragraph>
              <Grid className="product-grid-elements">
                <Span className="product-text-theAmount">Qnt</Span>
                <Grid className="product-container-buttons">
                  <Grid className="product-grid-buttons">
                    <Button>-</Button>
                    <Span>1</Span>
                    <Button>+</Button>
                  </Grid>
                  <Span className="price">R$300</Span>
                </Grid>
              </Grid>
              <Button className="close">x</Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid className="container-checkout">
        <Grid className="price">
          <Span>Total:</Span>
          <Span>R$798</Span>
        </Grid>
        <Button>Finalizar Compra</Button>
      </Grid>
    </Container>
  );
}
