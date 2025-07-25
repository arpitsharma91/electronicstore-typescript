import { createContext, useContext, useState } from "react";
import type { AuthItem } from "../Models/Interfaces/interface";
import type {
  UserDataType,
  OrderDataType,
  CartDataType,
  ShoppingcartProviderProps,
  MyContextType,
} from "../Models/Types/types";

const UserContext = createContext({} as MyContextType);

export const Shoppingcontext = () => {
  return useContext(UserContext);
};

export const ShoppingcartProvider = ({
  children,
}: ShoppingcartProviderProps) => {
  const [authData, setAuthdata] = useState<AuthItem>({
    token: null,
    userId: null,
    expireTime: null,
  });
  const [userData, setUserdata] = useState<UserDataType>({
    Name: "",
    Email: "",
    Password: "",
    Address: "",
    Region: "",
    Zipcode: "",
  });
  const [orderData, setOrderdata] = useState<OrderDataType>({
    Text: "",
    Brand: "",
    Quantity: 0,
    Price: 0,
  });
  const [cartItem, setCartItem] = useState<CartDataType>({
    Quantity: 0,
    FinalPrice: 0,
    Product: { key: "", brand: "", image: "", text: "", star: 0, price: 0 },
  });

  const login = (
    idToken: string | null,
    localId: string | null,
    expirationDate: any
  ) => {
    setAuthdata({
      token: idToken,
      userId: localId,
      expireTime: expirationDate,
    });
  };
  const logout = () => {
    setAuthdata({
      token: null,
      userId: null,
      expireTime: null,
    });
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("expirationDate");
  };
  const registeruserData = (data: UserDataType) => {
    setUserdata({
      Name: data.Name,
      Email: data.Email,
      Password: data.Password,
      Address: data.Address,
      Region: data.Region,
      Zipcode: data.Zipcode,
    });
  };
  const checkAuthTimeout = (expirationTime: number) => {
    setTimeout(() => {
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
      localStorage.removeItem("expirationDate");
      logout();
    }, expirationTime * 1000);
  };

  const checkAuthState = () => {
    const token: string | null = localStorage.getItem("token");
    const id: string | null = localStorage.getItem("userId");
    const time: any = localStorage.getItem("expirationDate");
    setAuthdata({
      token: token,
      userId: id,
      expireTime: time,
    });
  };

  const orderdataHandler = (finalorderData: OrderDataType) => {
    setOrderdata({
      Text: finalorderData.Text,
      Brand: finalorderData.Brand,
      Quantity: finalorderData.Quantity,
      Price: finalorderData.Price,
    });
    cartremoveHandler();
  };

  const cartdataHandler = (cartData: CartDataType) => {
    setCartItem({
      Quantity: cartData.Quantity,
      FinalPrice: cartData.FinalPrice,
      Product: cartData.Product,
    });
  };

  const cartremoveHandler = () => {
    setCartItem({
      Quantity: 0,
      FinalPrice: 0,
      Product: { key: "", brand: "", image: "", text: "", star: 0, price: 0 },
    });
  };

  return (
    <UserContext.Provider
      value={{
        login,
        checkAuthTimeout,
        registeruserData,
        logout,
        checkAuthState,
        userData,
        authData,
        orderData,
        cartItem,
        orderdataHandler,
        cartdataHandler,
        cartremoveHandler,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
