import { CartContext } from "@/contexts";
import { useContext } from "react";


export const useCart = () => useContext(CartContext);