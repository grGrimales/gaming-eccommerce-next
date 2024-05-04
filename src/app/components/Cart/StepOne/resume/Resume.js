"use client";
import { useEffect, useState } from "react";
import styles from "./Reusme.module.scss";
import { calcDiscountedPrice } from "@/utils/functions";
import { useRouter } from "next/navigation";
import { Button } from "semantic-ui-react";
import Link from "next/link";
import { usePathname, useSearchParams } from 'next/navigation'
import { useCart } from "@/hooks";

export const Resume = ({ games }) => {
  const pathname = usePathname()
  const {  nextStep, previousStep } = useCart();

  const router = useRouter();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let totals = {
      original: 0,
      discount: 0,
      price: 0,
    };
    games?.forEach((element) => {
      const price = calcDiscountedPrice(
        element.attributes.price,
        element.attributes.discount
      );

      totals = {
        original: totals.original + element.attributes.price * element.quantity,
        discount:
          totals.discount +
          (element.attributes.price - price) * element.quantity,
        price: totals.price + price * element.quantity,
      };
    });

    setTotal(totals);
  }, [games]);

  const goToStepTwo = () => {
    localStorage.setItem("PaymentProcess", "false");
    nextStep();
    // const url = `${pathname}?step=2`; 
    // router.replace(url);
  };

  if (!total) return null;
  return (
    <div className={styles.resume}>
      <h2>Summary</h2>

      <div className={styles.block}>
        <div className={styles.prices}>
          <div>
            <span>Price Original</span>
            <span>${total.original.toFixed(2)}</span>
          </div>
          <div>
            <span>Discount</span>
            <span>${total.discount.toFixed(2)}</span>
          </div>
          <div>
            <span>Subtotal</span>
            <span>${total.price.toFixed(2)}</span>
          </div>
         
        </div>
        <Button primary onClick={goToStepTwo}>
        Continue with payment
        </Button>

        <Link href="/">
        Continue buying
        </Link>
      </div>
    </div>
  );
};
