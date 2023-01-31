import {useEffect } from "react";
import { Button, Span, Img, Paragraph, Grid } from "../../styles";
import {
  DecrementProductCart,
  IncrementProductCart,
  RemoveProductCart,
  SeeProductsCart,
} from "../../../../context/reducers/reducer.Cart";
import { useGlobalState, useProductsCart } from "../../../../hooks";

export default function ProductItemCart() {
  const { dispatch, state } = useGlobalState();

  const { shoopingCart } = state.stateShoopingCart;
  const {
    HandleClickDecrementProduct,
    HandleClickIncrementProduct,
    RemoveProductItem,
    productsCart,
  } = useProductsCart();

  useEffect(() => {
    if (shoopingCart.length < 1) { 
      dispatch(SeeProductsCart(false));
    }
  }, [shoopingCart]);

  return (
    <Grid className="container-products-cart">
      {productsCart.map((product, index) => {
        return (
          <Grid className="product-item-cart" key={index}>
            <Grid className="product-item-grid-cart-elements">
              <Img src={product.photo} alt={product.photo} height={46} />
              <Paragraph data-testid="name-product">{product.name}</Paragraph>
              <Grid className="product-grid-elements">
                <Span className="product-text-theAmount">Qnt</Span>
                <Grid className="product-container-buttons">
                  <Grid className="product-grid-buttons">
                    <Button
                      role-item="icrement"
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
                    <Span data-testid="count-product">
                      {product?.theAmount}
                    </Span>
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
                  <Span data-testid="price-product" className="price">
                    {product?.total?.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </Span>
                </Grid>
              </Grid>
              <Button
                data-testid="delete-product"
                className="close"
                onClick={() =>
                  dispatch(RemoveProductCart(RemoveProductItem(product.id)))
                }
              >
                <i className="fas fa-times" aria-hidden="true" />
              </Button>
            </Grid>
          </Grid>
        );
      })}
    </Grid>
  );
}
