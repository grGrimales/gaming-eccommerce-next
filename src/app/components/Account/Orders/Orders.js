"use client";

import { useEffect, useState } from "react";
import { NoResult } from "../../Shared";
import { Order as OrderCtrl } from "@/api";
import { useAuth } from "@/hooks";
import { Order } from "./Order/Order";


const orderCtrl = new OrderCtrl();
export const Orders = () => {

    const {user } = useAuth();
  const [orders, setOrders] = useState(null);

  useEffect(() => {
    (async () => {
      try {

        const response = await orderCtrl.getAll(user.id);
        setOrders(response?.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  if (!orders) return <NoResult text="You don't have any orders yet" />;
  return <div>

    {orders.map((order) => (

        <Order key={order.id} order={order} />
    ))}
  </div>;
};
