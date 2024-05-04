import styles from "./Discount.module.scss";

export function Discount({ children, className }) {
    const classes = `${styles.labelDiscount} ${className ? className : ''}`.trim();

    return <span className={classes}>{children}</span>;
}
