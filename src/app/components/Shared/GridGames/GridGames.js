import styles from "./GridGames.module.scss";
import Link from "next/link";
import { Discount } from "../Label";
import { calcDiscountedPrice } from "@/utils/functions";

export function GridGames({ games }) {
  return (
    <div className={styles.gridGames}>
      {games &&
        games.map((game) => (
          <Link
            href={`/${game.attributes.slug}`}
            key={game.id}
            className={styles.game}
          >
            <div>
              <img
                className={styles.game_image}
                src={game.attributes.cover.data.attributes.url}
                alt={game.attributes.cover.data.attributes.name}
              />
              {game.attributes.discount > 0 && (
                <Discount className={styles.discount}>
                  {`-${game.attributes.discount}%`}
                </Discount>
              )}
            </div>

            <div>
              <span>{game.attributes.title}</span>
              <span className={styles.price}>
                $
                {calcDiscountedPrice(
                  game.attributes.price,
                  game.attributes.discount
                )}
              </span>
            </div>
          </Link>
          
        ))}
    </div>
  );
}
