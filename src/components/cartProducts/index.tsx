import { Container, Button, Span, Title, Img, Paragraph, Grid } from "./styles";
import { useSelector, useDispatch } from "react-redux";
import {
  SeeProductsCart,
  DecrementProductCart,
  IncrementProductCart,
} from "../../context/reducers/pruductsCart";
import { useState } from "react";

export default function CartProducts() {
  type DataProducts = {
    id: number;
    name: string;
    brand: string;
    description: string;
    photo: string;
    price: number;
    theAmount: number;
    total: number;
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

  const [productsCart, setProductsCart] =
    useState<DataProducts[]>(shoopingCart);

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
      product.price * (product.theAmount + 1)
    );

    setProductsCart(productIdIncrement);

    return productIdIncrement;
  }

  function HandleClickDecrementProduct(product: DataProducts) {
    let productIdDecrement = CalculateTheMountProduct(
      product.id,
      product.theAmount - 1,
      product.price * (product.theAmount - 1)
    );

    setProductsCart(productIdDecrement);

    return productIdDecrement;
  }

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
                        <Span>{product.theAmount}</Span>
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
                        {product.total.toLocaleString("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        })}
                      </Span>
                    </Grid>
                  </Grid>
                  <Button className="close">x</Button>
                </Grid>
              </Grid>
            );
          })}
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
