import { useEffect } from "react";
import {
  PRODUCTS_FETCH_LOADING,
  PRODUCTS_FETCH_SUCESS,
  PRODUCTS_FETCH_ERROR,
} from "../context/reducers/products";
import { ADD_SHOOPING_CART } from "../context/reducers/pruductsCart";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

type DataProducts = {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: string;
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
};

export default function useProducts() {
  const { products } = useSelector((state: DataState) => state.stateProducts);

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

  function addProductCart(product: DataProducts) {
    return dispacth(ADD_SHOOPING_CART(product));
  }

  return {
    products,
    addProductCart,
  };
}
