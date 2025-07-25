import type { DataProperties } from "../Types/types";

export interface AuthItem {
  token: string | null;
  userId: string | null;
  expireTime: any;
}

export interface slicedmachineDatatype {
  key: string;
  brand: string;
  image: string;
  text: string;
  star: number;
  price: number;
}

export interface ElectroniclistChildProps {
  key: string;
  electronicdata: DataProperties;
}

export interface OrderModalSummaryProps {
  show: boolean;
  onHide: () => void;
  finaldetail: DataProperties;
  finalprice: number;
  quantity: number;
}

export interface LoginData {
  email: string;
  password: string;
  returnSecureToken: boolean;
}
