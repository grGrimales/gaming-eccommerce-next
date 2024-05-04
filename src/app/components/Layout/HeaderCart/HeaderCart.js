
import Link from "next/link";
import styles from "./HeaderCart.module.scss";
import { Icon, Image } from "semantic-ui-react";
import classNames from 'classnames';

export function HeaderCart({ step }) {
  const steps = [
    { number: 1, title: "Basket" },
    { number: 2, title: "Pay" },
    { number: 3, title: "Confirmation" },
  ];


  const currentStep = Number(step);

  return (
    <div className={styles.headerCart}>
      <div className={styles.left}>
        <Link href={"/"}>
          <Image src="/images/logo.png" alt="logo" width={100} height={100} />
        </Link>
      </div>
      <div className={styles.center}>
        {steps.map((step) => {
          const stepClasses = classNames(styles.step, {
            [styles.active]: step.number === currentStep,
            [styles.success]: step.number < currentStep,
          });

          return (
            <div key={step.number} className={stepClasses}>
              <span className={styles.number}>
                <Icon name="check" />
                {step.number}
              </span>
              <span>{step.title}</span>
              <span className={styles.space}></span>
            </div>
          );
        })}
      </div>
      <div className={styles.right}>

        <Icon name="lock" />

        <div className={styles.right__pago}>
        <span>Pay safe</span>
            <span>Acceder</span>
        </div>
      </div>
    </div>
  );
}
