import axios from "axios"
import { useEffect, useState } from "react";
import { AddProductShoppingCart } from "../context/reducers/reducer.Cart";
import { useGlobalState } from "../hooks";
import { DataProducts } from "../interfaces";
import {
  ProductFetchLoading,
  ProductsFetchSucess,
  ProductsFetchError,
} from "../context/reducers/reducer.Products";

type RespondeData = {
  products: DataProducts[];
  count: number;
};

export default function useProducts() {
  const { state, dispatch } = useGlobalState();

  const { shoopingCart } = state.stateShoopingCart;
  const { products } = state.stateProducts;

  const [addProductCartState, setAddProductCartState] = useState<
    DataProducts[]
  >([]);

  async function RequestProductsAll() {
    try {
      dispatch(ProductFetchLoading(true));
      const productsData = await axios.get<RespondeData>(
        "https://mks-challenge-api-frontend.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=ASC"
      );

      const { products } = productsData.data;
      dispatch(ProductFetchLoading(false));
      dispatch(ProductsFetchSucess(products));
    } catch (error) {
      dispatch(ProductsFetchError(true));
    }
  }

  function ItemsProductsDuplicates() {
    const ProdutoKey = new Set();

    const FilterProductsCart = addProductCartState.filter((product) => {
      let DuplicatesProducts = ProdutoKey.has(product.id);

      if (DuplicatesProducts) {
        setAddProductCartState(
          shoopingCart.map((cartItemProduct) => {
            if (cartItemProduct.id === product.id) {
              return {
                ...cartItemProduct,
                theAmount: cartItemProduct.theAmount + 1,
                total:
                  (cartItemProduct.theAmount + 1) *
                  Number(cartItemProduct.price),
              };
            }

            return cartItemProduct;
          })
        );
      }

      ProdutoKey.add(product.id);
      return !DuplicatesProducts;
    });

    if (FilterProductsCart.length) {
      dispatch(AddProductShoppingCart(FilterProductsCart));
    }
  }

  useEffect(() => {
    RequestProductsAll();
  }, []);

  useEffect(() => {
    ItemsProductsDuplicates();
  }, [addProductCartState]);

  function addProductCart(product: DataProducts) {
    setAddProductCartState([
      ...shoopingCart,
      { ...product, theAmount: 1, total: Number(product.price) },
    ]);
  }

  return {
    products,
    addProductCart,
  };
}
