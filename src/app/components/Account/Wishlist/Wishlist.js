"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/hooks";
import { Wishlist as WishlistCTRL } from "@/api/wishlist";
import { NoResult } from "../../Shared";
import { GridGames } from "./GridGames";

const wishlistCtrl = new WishlistCTRL();

export function Wishlist() {
  const [wishlist, setWishlist] = useState(null);
  const [reload, setReload] = useState(false);

  const { user } = useAuth();

  const handleReload = () => setReload(!reload); // [2] Crea una función para recargar la lista de deseos
  useEffect(() => {
    async function fetchWishlist() {
      try {
        const response = await wishlistCtrl.getAll(user.id);
        setWishlist(response);
      } catch (error) {
        console.error(error);
      }
    }

    fetchWishlist();
  }, [reload]);
  if (!wishlist || wishlist.length == 0 ) return <NoResult text="You don't have any orders yet" />;
  return <GridGames games={wishlist} handleReload={handleReload} />;
}
