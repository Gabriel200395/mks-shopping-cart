import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type PropertesProducts = {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: string;
};

type IntancesCartProducts = {
  shoopingCart: [] | PropertesProducts[];
  seeProducts: boolean;
};

const initialState: IntancesCartProducts = {
  shoopingCart: [],
  seeProducts: false,
};

const pruductsCart = createSlice({
  name: "CART_PRODUCTS",
  initialState,
  reducers: {
    AddShoppingCart(state, action: PayloadAction<PropertesProducts>) {
      return {
        shoopingCart: [...state.shoopingCart, action.payload],
        seeProducts: false,
      };
    },

    SeeProductsCart(state, action: PayloadAction<boolean>) {
      return {
        shoopingCart: state.shoopingCart,
        seeProducts: action.payload,
      };
    },
  },
});

export const { AddShoppingCart, SeeProductsCart } = pruductsCart.actions;
export default pruductsCart.reducer;
