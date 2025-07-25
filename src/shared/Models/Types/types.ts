import type { AuthItem } from "../Interfaces/interface";

export type DataProperties = {
  key: string;
  brand: string;
  image: string;
  text: string;
  star: number;
  price: number;
};

export type SigninData = {
  token: string;
  id: string;
};

export type UserDataType = {
  Name: string;
  Email: string;
  Password: string;
  Address: string;
  Region: string;
  Zipcode: string;
};

export type OrderDataType = {
  Text: string;
  Brand: string;
  Quantity: number;
  Price: number;
};
export type CartDataType = {
  Quantity: number;
  FinalPrice: number;
  Product: DataProperties;
};

export type ShoppingcartProviderProps = {
  children: React.ReactNode;
};

export type MyContextType = {
  login: (
    idToken: string | null,
    localId: string | null,
    expirationDate: any
  ) => void;
  checkAuthTimeout: (expirationTime: number) => void;
  registeruserData: (regData: UserDataType) => void;
  logout: () => void;
  checkAuthState: () => void;
  userData: UserDataType;
  authData: AuthItem;
  orderData: OrderDataType;
  cartItem: CartDataType;
  orderdataHandler: (finalorderData: OrderDataType) => void;
  cartdataHandler: (cartData: CartDataType) => void;
  cartremoveHandler: () => void;
};

export type FormEvent = React.FormEvent<HTMLFormElement>;
export type MouseEvent = React.MouseEvent<HTMLButtonElement>;
export type ChangeEvent = React.ChangeEvent<HTMLInputElement>;
