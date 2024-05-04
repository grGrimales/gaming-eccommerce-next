"use client";

import styles from "./Payment.module.scss";
import { CardElement } from "@stripe/react-stripe-js";
export const Payment = () => {

    const CARD_OPTIONS = {
        iconStyle: 'solid',
        style: {
          base: {
            iconColor: '#909090',
            color: '#fff',
            fontWeight: 500,
            fontSize: '16px',
            '::placeholder': {color: '#909090'},
          },
          invalid: {
            iconColor: '#ffc7ee',
            color: '#ffc7ee',
          },
        },
      };
  return (
    <div className={styles.payment}>
      <h2>Payment methods</h2>
      <div className={styles.block}>
        <CardElement  options={CARD_OPTIONS} />
      </div>
    </div>
  );
};
