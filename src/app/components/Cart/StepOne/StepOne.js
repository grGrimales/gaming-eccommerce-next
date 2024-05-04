import { Basket } from "./Basket";
import styles from "./StepOne.module.scss";
import { Resume } from "./resume";

export const StepOne = ({ games }) => {
  return (
    <div className={styles.StepOne}>
      <div className={styles.center}>
       <Basket games={games}/>
      </div>

      <div className={styles.right}>
        <Resume games={games}/>
      </div>
    </div>
  );
};
