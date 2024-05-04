'use client';

import { useState } from "react";
import styles from "./AddAddress.module.scss";
import { Button } from "semantic-ui-react";
import { BasicModal } from "@/app/components/Shared";
import { AddressForm } from "../AddressForm";

export function AddAdress({onReload}) {
  const [show, setShow] = useState(false);

  const onOpenClose = () => {
    setShow(!show);
  };
  return (
    <>
      <Button className={styles.addBtn} primary onClick={onOpenClose}>
        Add Address
      </Button>

      <BasicModal show={show} onClose={onOpenClose} title="Nueva direccion">
        <AddressForm  onClose={onOpenClose} onReload={onReload}/>
      </BasicModal>
    </>
  );
}
