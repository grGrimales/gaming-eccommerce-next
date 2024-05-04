"use client";
import Link from "next/link";
import styles from "./TopBar.module.scss";
import { Image } from "semantic-ui-react";
import { AccountPage } from "../Account/Account";
import { MenuPage } from "../Menu";

export function TopBar({ isOpenSearch }) {

  return (
    <div className={styles.topBar}>
      <div className={styles.left}>
        <Link href="/">
          <Image src="/images/logo.png" alt="Gaming" />
        </Link>
      </div>

      <div className="center">
        <MenuPage
          isOpenSearch={isOpenSearch}
   
        />
      </div>

      <div className={styles.right}>
        <AccountPage />
      </div>
    </div>
  );
}
