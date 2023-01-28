import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DataProducts } from "../../interfaces";

type IntancesProducts = {
  products: null | DataProducts[];
  loading: null | boolean;
  error: null | boolean;
};

const initialState: IntancesProducts = {
  products: null,
  loading: null,
  error: null,
};

const stateProducts = createSlice({
  name: "PRODUCTS",
  initialState,
  reducers: {
    ProductFetchLoading(_, action: PayloadAction<boolean>) {
      return {
        products: null,
        loading: action.payload,
        error: null,
      };
    },
    ProductsFetchError(_, action: PayloadAction<boolean>) {
      return {
        products: [],
        loading: false,
        error: action.payload,
      };
    },

    ProductsFetchSucess(_, action: PayloadAction<DataProducts[]>) {
      return {
        products: action.payload,
        loading: false,
        error: false,
      };
    },
  },
});

export const { ProductFetchLoading, ProductsFetchError, ProductsFetchSucess } =
  stateProducts.actions;

export default stateProducts.reducer;
