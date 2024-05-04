"use client";
import { Game } from "@/api";
import { useCart } from "@/hooks";
import { CartLayout } from "@/layouts";
import { useEffect, useState } from "react";
import { StepOne, StepTwo } from "../components/Cart";
import { StepThree } from "../components/Cart/StepThree";
import styles from "./Cart.module.scss";
import { Button, Icon } from "semantic-ui-react";
import Link from "next/link";
const gameCtrl = new Game();

export default function CartPage({ searchParams }) {
  const [games, setGames] = useState(null);

  const { currentStep, nextStep, previousStep, cart } = useCart();

  const payment = JSON.parse(localStorage.getItem("PaymentProcess"));



  useEffect(() => {
    (async () => {
      try {
        if (!Array.isArray(cart)) {
          console.error("Cart is not iterable:", cart);
          return;
        }
        if (cart.length > 0) {
          const data = [];
          for (const item of cart) {
            const response = await gameCtrl.getGameById(item.id);
            data.push({ ...response.data, quantity: item.quantity });
          }

          setGames(data);
        }
      } catch (error) {
        console.error(error);
      }
    })();
  }, [cart]);

  if ((!cart || cart.length === 0) && (payment == false || !payment)) {
    return (
      <CartLayout step={currentStep}>
        <div className={styles.empty}>
          <h2>Cart is empty</h2>
          <Button as={Link} href="/" primary>
            Add products to cart
            <Icon name="shopping cart " />
          </Button>
        </div>
      </CartLayout>
    );
  }

  return (
    <CartLayout step={currentStep}>
      {currentStep == 1 && <StepOne games={games} />}
      {currentStep == 2 && <StepTwo games={games} />}
      {currentStep == 3 && <StepThree />}
    </CartLayout>
  );
}
