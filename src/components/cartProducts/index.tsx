import { Container, Button, Span, Title, Img, Paragraph, Grid } from "./styles";
import {
  SeeProductsCart,
  DecrementProductCart,
  IncrementProductCart,
  RemoveProductCart,
} from "../../context/reducers/reducer.Cart";
import { useEffect, useState } from "react";
import { useGlobalState } from "../../hooks";
import { DataProducts } from "../../interfaces";

export default function CartProducts() {
  const { state, dispatch } = useGlobalState();
  const { shoopingCart } = state.stateShoopingCart;

  const [productsCart, setProductsCart] = useState<DataProducts[]>([]);

  function CalculateTheMountProduct(
    id: number,
    theAmount: number,
    total: number
  ) {
    return productsCart.map((product) => {
      if (product.id === id) {
        return {
          ...product,
          theAmount: theAmount,
          total: total,
        };
      }

      return product;
    });
  }

  function HandleClickIncrementProduct(product: DataProducts) {
    let productIdIncrement = CalculateTheMountProduct(
      product.id,
      product.theAmount + 1,
      Number(product.price) * (product.theAmount + 1)
    );

    setProductsCart(productIdIncrement);

    return productIdIncrement;
  }

  function HandleClickDecrementProduct(product: DataProducts) {
    let productIdDecrement = CalculateTheMountProduct(
      product.id,
      product.theAmount - 1,
      Number(product.price) * (product.theAmount - 1)
    );

    setProductsCart(productIdDecrement);

    return productIdDecrement;
  }

  function removeProductItem(id: number) {
    let IdProductItem = productsCart.filter((product) => product.id !== id);

    setProductsCart(IdProductItem);
    return IdProductItem;
  }

  useEffect(() => {
    setProductsCart(shoopingCart);
  }, [shoopingCart]);

  const finalAmountPayable = productsCart
    .reduce((total, state) => {
      return state.total + total;
    }, 0)
    .toLocaleString("pt-BR", { style: "currency", currency: "BRL" }); 

  return (
    <Container>
      <Grid>
        <Grid className="header-cart">
          <Title>Carrinho de compras</Title>
          <Button onClick={() => dispatch(SeeProductsCart(false))}>x</Button>
        </Grid>
        <Grid className="container-products-cart">
          {productsCart.map((product, index) => {
            return (
              <Grid className="product-item-cart" key={index}>
                <Grid className="product-item-grid-cart-elements">
                  <Img src={product.photo} alt={product.photo} height={46} />
                  <Paragraph>{product.name}</Paragraph>
                  <Grid className="product-grid-elements">
                    <Span className="product-text-theAmount">Qnt</Span>
                    <Grid className="product-container-buttons">
                      <Grid className="product-grid-buttons">
                        <Button
                          disabled={product.theAmount <= 1 ? true : false}
                          onClick={() =>
                            dispatch(
                              DecrementProductCart(
                                HandleClickDecrementProduct(product)
                              )
                            )
                          }
                        >
                          -
                        </Button>
                        <Span>{product?.theAmount}</Span>
                        <Button
                          onClick={() =>
                            dispatch(
                              IncrementProductCart(
                                HandleClickIncrementProduct(product)
                              )
                            )
                          }
                        >
                          +
                        </Button>
                      </Grid>
                      <Span className="price">
                        {product?.total?.toLocaleString("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        })}
                      </Span>
                    </Grid>
                  </Grid>
                  <Button
                    className="close"
                    onClick={() =>
                      dispatch(RemoveProductCart(removeProductItem(product.id)))
                    }
                  >
                    x
                  </Button>
                </Grid>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
      <Grid className="container-checkout">
        <Grid className="price">
          <Span>Total:</Span>
          <Span>{finalAmountPayable}</Span>
        </Grid>
        <Button>Finalizar Compra</Button>
      </Grid>
    </Container>
  );
}
