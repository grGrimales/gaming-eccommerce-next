"use client";
import { Suspense, useEffect, useState } from "react";
import styles from "./BannerLastGamePublished.module.scss";
import { Game } from "@/api";
import { Container, Image } from "semantic-ui-react";
import Link from "next/link";
import { DateTime } from "luxon";
import { calcDiscountedPrice } from "@/utils/functions";
import { Discount } from "../../Shared";
import Loading from "../../Shared/Loading/Loading";

const gameCtrl = new Game();
export function BannerLastGamePublished() {
  const [game, setGame] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await gameCtrl.getLastPublished();
        setGame(response.data[0]);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const wallpaper = game?.attributes.wallpaper;
  const realeseDate = game
    ? new Date(game?.attributes.realeaseDate).toISOString()
    : "";
  const price = calcDiscountedPrice(
    game?.attributes.price,
    game?.attributes.discount
  );

  if (!game) return <Loading />;
  return (
    <div className={styles.container}>
      <Suspense fallback={<Loading />}>

      <Image src={wallpaper.data.attributes.url} className={styles.wallpaper} />
      <Link className={styles.infoContainer} href={game.attributes.slug}>
        <Container>
          <span className={styles.data}>
            {DateTime.fromISO(realeseDate).minus({ days: 1 }).toRelative()}
          </span>

          <h2>{game.attributes.title}</h2>
          <p className={styles.price}>
            <Discount>-{game.attributes.discount} %</Discount>
            <span className={styles.finalPrice}>${price}</span>
          </p>
        </Container>
      </Link>
      </Suspense>
     
    </div>
  );
}
