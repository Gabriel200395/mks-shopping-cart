export interface DataProducts {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: string;
  theAmount: number;
  total: number;
}

export interface DataState {
  stateProducts: {
    products: null | DataProducts[];
    loading: null | boolean;
    error: null | boolean;
  };

  stateShoopingCart: {
    shoopingCart: DataProducts[];
    seeProducts: boolean;
  };
}
