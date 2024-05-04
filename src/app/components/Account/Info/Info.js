"use client";
import { useAuth } from "@/hooks";
import styles from "./Info.module.scss";
import { Button, Icon } from "semantic-ui-react";
import { DateTime } from "luxon";

export function Info() {
  const user =
    localStorage.getItem("user") && JSON.parse(localStorage.getItem("user"));

  return (
    <div className={styles.info}>
      <Button icon className={styles.user}>
        <Icon name="user outline" />
      </Button>
      <h3 className={styles.username}>{user?.username}</h3>
      <h4 className={styles.email}>{user?.email}</h4>
      <p className={styles.createdAt}>
        Member since:{" "}
        {DateTime.fromISO(user?.createdAt, { locale: "en" }).toFormat("DDD")}
      </p>
    </div>
  );
}
