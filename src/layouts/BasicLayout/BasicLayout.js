"use client";
import { Container } from "semantic-ui-react";
import styles from "./BasicLayout.module.scss";
import classNames from "classnames";
import { Footer, TopBar } from "@/app/components/Layout";
import { Separator } from "@/app/components/Shared/Separator/Separator";
import { useEffect, useState } from "react";

export function BasicLayout({
  children,
  isOpenSearch = false,
  isContainer = false,
  relative = false,

}) {

  return (
    <>
        <TopBar isOpenSearch={isOpenSearch} 
        />

        <Container fluid className={styles.container}>
          <div className={classNames({ [styles.relative]: relative })}>
            {isContainer ? <Container>{children}</Container> : children}
          </div>
        </Container>
        <Separator height={70} />
        <Footer />
    </>
  );
}
