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
  name: "Products",
  initialState,
  reducers: {
    ProductFetchLoading(_, action: PayloadAction<boolean>) {
      return {
        products: null,
        loading: action.payload,
        error: null,
      };
    },
    ProductsFetchError(state, action: PayloadAction<boolean>) {
      return {
        products: [],
        loading: state.loading,
        error: action.payload,
      };
    },

    ProductsFetchSucess(state, action: PayloadAction<DataProducts[]>) {
      return {
        products: action.payload,
        loading: state.loading,
        error: false,
      };
    },
  },
});

export const { ProductFetchLoading, ProductsFetchError, ProductsFetchSucess } =
  stateProducts.actions;

export default stateProducts.reducer;
