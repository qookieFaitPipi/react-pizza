// product
export type ProductItemType = {
  id: number;
  key: number;
  imageURL: string;
  price: number;
  product_category: number;
  title: string;
}

// cartProduct
export type CartProductItemType = {
  id: number;
  key: number;
  title: string;
  price: number;
  imageURL: string;
  category: number;
  params: {
    type: number;
    size: number;
  }
}

// productSlice
export interface ProductSliceState {
  productList: ProductItemType[];
  pickProduct: ProductItemType | undefined;
}

// selectSlice
export interface PickSliceState {
  title: string;
  imageURL: string;
  description: string;
  price: number | null;
}

// cartSlice
export interface CartSliceState {
  totalPice: number;
  countProducts: number;
  cart: CartProductItemType[];
}

// filterSlice
export interface FilterSliceState {
  sortType: number;
  categoryType: number;
}

// userSlice
export interface UserSliceState {
  userLogin: string | undefined;
  isEntered: boolean;
}