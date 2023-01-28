import { useEffect, useState } from "react";
import {
  PRODUCTS_FETCH_LOADING,
  PRODUCTS_FETCH_SUCESS,
  PRODUCTS_FETCH_ERROR,
} from "../context/reducers/products";
import { AddShoppingCart } from "../context/reducers/pruductsCart";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

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

type RespondeData = {
  products: DataProducts[];
  count: number;
};

type DataState = {
  stateProducts: {
    products: null | DataProducts[];
    loading: null | boolean;
    error: null | boolean;
  };

  stateShoopingCart: {
    shoopingCart: DataProducts[];
    seeProducts: boolean;
    product: DataProducts;
  };
};

export default function useProducts() {
  const { products } = useSelector((state: DataState) => state.stateProducts);
  const { shoopingCart } = useSelector(
    (state: DataState) => state.stateShoopingCart
  );

  const [addProductCartState, setAddProductCartState] = useState<
    DataProducts[]
  >([]);

  const dispacth = useDispatch();

  useEffect(() => {
    async function RequestProductsAll() {
      try {
        dispacth(PRODUCTS_FETCH_LOADING(true));
        const productsData = await axios.get<RespondeData>(
          "https://mks-challenge-api-frontend.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=ASC"
        );

        const { products } = productsData.data;
        dispacth(PRODUCTS_FETCH_LOADING(false));
        dispacth(PRODUCTS_FETCH_SUCESS(products));
      } catch (error) {
        dispacth(PRODUCTS_FETCH_ERROR(true));
      }
    }

    RequestProductsAll();
  }, []);

  useEffect(() => {
    const setProduct = new Set();

    const filterProducts = addProductCartState.filter((product) => {
      let duplicateProducts = setProduct.has(product.id);
      setProduct.add(product.id);
      return !duplicateProducts;
    });

    if (filterProducts.length) {
      dispacth(AddShoppingCart(filterProducts));
    }
  }, [addProductCartState]);

  useEffect(() => {
    if (shoopingCart.length === 0) {
      setAddProductCartState(shoopingCart);
    }
  }, [shoopingCart]);

  function addProductCart(product: DataProducts) {
    setAddProductCartState([
      ...addProductCartState,
      { ...product, theAmount: 1 , total: Number(product.price) },
    ]);
  }

  return {
    products,
    addProductCart,
  };
}
