import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type PropertesProducts = {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: number;
  theAmount: number;
  total: number;
};

type IntancesCartProducts = {
  shoopingCart: PropertesProducts[];
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
    AddProductShoppingCart(state, action: PayloadAction<PropertesProducts[]>) {
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
    IncrementProductCart(state, action: PayloadAction<PropertesProducts[]>) {
      return {
        shoopingCart: action.payload,
        seeProducts: state.seeProducts,
      };
    },

    DecrementProductCart(state, action: PayloadAction<PropertesProducts[]>) {
      return {
        shoopingCart: action.payload,
        seeProducts: state.seeProducts,
      };
    },

    RemoveProductCart(state, action: PayloadAction<PropertesProducts[]>) {
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
