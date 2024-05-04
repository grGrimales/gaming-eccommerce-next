"use client";
import { Image } from "semantic-ui-react";
import styles from "./HeaderWallpaper.module.scss";

export function HeaderWallpaper({ image }) {
  return (
    <div className={styles.headerWallpaper}>
      <Image src={image} alt="wallpaper" />
    </div>
  );
}
