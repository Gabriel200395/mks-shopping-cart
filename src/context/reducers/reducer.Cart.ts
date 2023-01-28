import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DataProducts } from "../../interfaces";

type IntancesCartProducts = {
  shoopingCart: DataProducts[];
  seeProducts: boolean;
};

const initialState: IntancesCartProducts = {
  shoopingCart: [],
  seeProducts: false,
};

const stateCart = createSlice({
  name: "CartProduts",
  initialState,
  reducers: {
    AddProductShoppingCart(state, action: PayloadAction<DataProducts[]>) {
      return {
        shoopingCart: action.payload,
        seeProducts: state.seeProducts,
      };
    },

    SeeProductsCart(state, action: PayloadAction<boolean>) {
      return {
        shoopingCart: state.shoopingCart,
        seeProducts: action.payload,
      };
    },
    IncrementProductCart(state, action: PayloadAction<DataProducts[]>) {
      return {
        shoopingCart: action.payload,
        seeProducts: state.seeProducts,
      };
    },

    DecrementProductCart(state, action: PayloadAction<DataProducts[]>) {
      return {
        shoopingCart: action.payload,
        seeProducts: state.seeProducts,
      };
    },

    RemoveProductCart(state, action: PayloadAction<DataProducts[]>) {
      return {
        shoopingCart: action.payload,
        seeProducts: state.seeProducts,
      };
    },
  },
});

export const {
  AddProductShoppingCart,
  SeeProductsCart,
  IncrementProductCart,
  DecrementProductCart,
  RemoveProductCart,
} = stateCart.actions;
export default stateCart.reducer;
