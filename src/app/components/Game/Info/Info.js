"use client";

import { Container } from "semantic-ui-react";
import styles from "./Info.module.scss";

export function Info({ game }) {

  return (
    <Container className={styles.info}>
      <div className={styles.summary}>
        <p>{game.summary}</p>
      </div>

      <div className={styles.more}>
            <ul>
                <li>
                    <span>Release date: </span> {game.realeaseDate}
                </li>
            </ul>
      </div>
    </Container>
  );
}
