"use client";
import Link from "next/link";
import styles from "./GridGames.module.scss";
import { Image, Label } from "semantic-ui-react";
import { Discount, WishlistIcon } from "@/app/components/Shared";
import { calcDiscountedPrice } from "@/utils/functions";

export function GridGames({ games, handleReload }) {
  return (
    <div className={styles.gridGames}>
      {games.map((item) => {
        const game = item.attributes.game.data.attributes;
        const cover = game.cover.data.attributes;

        return (
          <div key={item.attributes.game.data.id} className={styles.game}>
            <Link href={`/${game.slug}`}>
              <div>
                <Image src={cover.url} />
                {game.discount > 0 && (
              <Discount className={styles.discount}>
                {`-${game.discount}%`}
              </Discount>
            )}
              </div>
        
        <div>
          <span>{game.title}</span>
          <span className={styles.price}>{calcDiscountedPrice(game.price, game.discount)}</span>
        </div>
            </Link>
           
            <WishlistIcon gameId={item.attributes.game.data.id}  className={styles.WhislistIcon} removeCallback={handleReload} />
          </div>

        );
      })}
    </div>
  );
}
