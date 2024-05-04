"use client";

import { Footer, HeaderCart } from "@/app/components/Layout";
import { Separator } from "@/app/components/Shared/Separator/Separator";
import { Container, Header } from "semantic-ui-react";

import styles from "./CartLayout.module.scss";

export function CartLayout({ children, step }) {
  return (
    <div className={styles.contentCard}>
      <HeaderCart step={step} />
      <Separator height={150} />

      <Container>{children}</Container>
      
      <Separator height={70} />
      <Footer />
    </div>
  );
}
