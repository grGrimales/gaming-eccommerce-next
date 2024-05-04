"use client";
import { Dropdown, Icon, Image } from "semantic-ui-react";
import styles from "./Basket.module.scss";
import { calcDiscountedPrice } from "@/utils/functions";
import { CartContext } from "@/contexts";
import { useContext } from "react";

export const Basket = ({ games }) => {

    const options =  Array.from(Array(6).keys()).map((i) => ({
        key: i + 1,
        text: i + 1,
        value: i + 1,
    }));

    const { changeQuantityItem, deleteItem } = useContext(CartContext);

  return (
    <div className={styles.basket}>
      <h2>Cart</h2>

      <div className={styles.block}>
        {games?.map((game) => (
          <div className={styles.product} key={game.id}>
            <Image src={game.attributes.cover.data.attributes.url} />
            <div>
              <div className={styles.info}>
                <div>
                  <p>{game.attributes.title}</p>
                  <p>{game.attributes.platform.data.attributes.title}</p>
                </div>
                  <Icon name="trash alternate online" link  onClick={() => deleteItem(game.id)} />
              </div>
              <div className={styles.quantity}>
                <Dropdown className="number" options={options} selection value={game.quantity}  compact  onChange={(_, data) => changeQuantityItem(game.id, data.value)}/>

                <span> ${calcDiscountedPrice(game.attributes.price, game.attributes.discount)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
