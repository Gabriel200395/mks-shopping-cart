import { Button, Span, Img, Paragraph, Grid } from "../../styles";
import {
  DecrementProductCart,
  IncrementProductCart,
  RemoveProductCart,
} from "../../../../context/reducers/reducer.Cart";
import { useGlobalState, useProductsCart } from "../../../../hooks";

export default function ProductItemCart() {
  const { dispatch } = useGlobalState();

  const {
    HandleClickDecrementProduct,
    HandleClickIncrementProduct,
    RemoveProductItem,
    productsCart,
  } = useProductsCart();

  return (
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
                  dispatch(RemoveProductCart(RemoveProductItem(product.id)))
                }
              >
                x
              </Button>
            </Grid>
          </Grid>
        );
      })}
    </Grid>
  );
}
