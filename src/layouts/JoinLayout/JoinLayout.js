'use client';
import { useRouter } from "next/navigation";

import styles from "./JoinLayout.module.scss";
import {Icon, Image} from "semantic-ui-react";
import Link from "next/link";
import { useAuth } from "@/hooks";

export const JoinLayout = (props) => {
  const { children } = props;
  const router = useRouter();

  const {user} = useAuth();

 if(user){
      router.push('/');
      return null;
 }
  return (
    <div className={styles.container}>
      <div className={styles.topBar}>
        <Link href="/"><Image src="/images/logo.png"/> </Link>
        <Link href="/"><Icon name="close"/></Link>
      </div>
      <div className={styles.blockLeft}>{children}</div>

      <div className={styles.blockRight}></div>
    </div>
  );
};
