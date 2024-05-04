import styles from "./NoResult.module.scss";


export function NoResult({text}) {
    return (
        <>
        <div className={styles.noResult}>
            <p>{text}</p>
        </div>
        </>
    );
}