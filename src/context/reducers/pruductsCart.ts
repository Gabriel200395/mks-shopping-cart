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
};

const initialState: IntancesCartProducts = {
  shoopingCart: [],
};

const pruductsCart = createSlice({
  name: "CART_PRODUCTS",
  initialState,
  reducers: {
    ADD_SHOOPING_CART(state, action: PayloadAction<PropertesProducts>) {
      return {
        shoopingCart: [...state.shoopingCart, action.payload],
      };
    },
  },
});

export const { ADD_SHOOPING_CART } = pruductsCart.actions;
export default pruductsCart.reducer;
