import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type PropertesProducts = {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: string;
};

type IntancesProducts = {
  products: null | PropertesProducts[];
  loading: null | boolean;
  error: null | boolean;
};

const initialState: IntancesProducts = {
  products: null,
  loading: null,
  error: null,
};

const productsReducers = createSlice({
  name: "PRODUCTS",
  initialState,
  reducers: {
    PRODUCTS_FETCH_LOADING(_, action: PayloadAction<boolean>) {
      return {
        products: null,
        loading: action.payload,
        error: null,
      };
    },
    PRODUCTS_FETCH_ERROR(_, action: PayloadAction<boolean>) {
      return {
        products: [],
        loading: false,
        error: action.payload,
      };
    },

    PRODUCTS_FETCH_SUCESS(_, action: PayloadAction<PropertesProducts[]>) {
      return {
        products: action.payload,
        loading: false,
        error: false,
      };
    },
  },
});

export const {
  PRODUCTS_FETCH_ERROR,
  PRODUCTS_FETCH_LOADING,
  PRODUCTS_FETCH_SUCESS,
} = productsReducers.actions;

export default productsReducers.reducer;
