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

type DataState = {
  stateProducts: {
    products: null | DataProducts[];
    loading: null | boolean;
    error: null | boolean;
  };

  stateShoopingCart: {
    shoopingCart: DataProducts[];
    seeProducts: boolean;
  };
};

export default function GlobalState() {
  const state = useSelector((state: DataState) => state);
  const dispatch = useDispatch();

  return {
    state,
    dispatch,
  };
}
