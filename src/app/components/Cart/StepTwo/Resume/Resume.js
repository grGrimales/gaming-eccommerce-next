"use client";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "semantic-ui-react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

import styles from "./Resume.module.scss";
import { calcDiscountedPrice } from "@/utils/functions";
import { Cart } from "@/api/cart";
import { useAuth, useCart } from "@/hooks";

const cartCtrl = new Cart();
export const Resume = ({ games, addressesSelected }) => {
  const router = useRouter();

  const pathname = usePathname();
  const {  nextStep, previousStep } = useCart();

  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const { user } = useAuth();
  const {deleteAllItems} = useCart();

  useEffect(() => {
    let total = 0;
    games?.forEach((game) => {
      const price = calcDiscountedPrice(
        game.attributes.price,
        game.attributes.discount
      );
      total += price * game.quantity;
    });
    setTotal(total.toFixed(2));
  }, [games]);

  const onPay = async () => {
    setLoading(true);
    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);
    const result = await stripe.createToken(cardElement);

    if (result.error) {
      console.error(result.error.message);
      return;
    } else {
      const response = await cartCtrl.paymentCart(
        result.token,
        games,
        user.id,
        addressesSelected
      );

      if (response.status === 200) {
        setLoading(false);
        deleteAllItems();
        goToStepEnd();
        localStorage.setItem("PaymentProcess", "true")
      } else {
        localStorage.setItem("PaymentProcess", "false")

      }
    }
  };

  const goToStepEnd = () => {
    nextStep();
    // const url = `${pathname}?step=3`;
    // router.push(url);
  };

  if (!total) return null;

  return (
    <div className={styles.resume}>
      <h2>Summary</h2>

      <div className={styles.block}>
        <div className={styles.products}>
          {games?.map((game, index) => (
            <div key={game.id} className={styles.product}>
              <div className={styles.info}>
                <p>{game.attributes.title}</p>
                <span>{game.attributes.platform.data.attributes.title}</span>
              </div>
              <span className={styles.price}>
                {game.quantity > 0 && game.quantity} x ${" "}
                {calcDiscountedPrice(
                  game.attributes.price,
                  game.attributes.discount
                )}{" "}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.blockTotal}>
        <div>
          <span>Total</span>
          <span>$ {total}</span>
        </div>

        <Button
          primary
          fluid
          disabled={!addressesSelected}
          onClick={onPay}
          loading={loading}
        >
          Buy
        </Button>
      </div>
    </div>
  );
};
