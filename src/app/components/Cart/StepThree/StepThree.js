'use client';


import { Button, Icon } from 'semantic-ui-react';
import styles from './StepThree.module.scss';
import Link from 'next/link';


export const StepThree = () => {

  const payment = JSON.parse(localStorage.getItem('PaymentProcess'));
  const cart = JSON.parse(localStorage.getItem('cart'));

  const removeItem = () => {
    localStorage.removeItem('PaymentProcess');
  }

  if ( payment == false && !cart  ) return null;
  return (
    <div className={styles.stepThree}>
        <Icon name="check circle outline"  />

        <h2>¡Successful purchase! </h2>
        <Button as={Link} href="/account" primary onClick={removeItem}>
            Go to my account
        </Button>
    </div>
  )
}
