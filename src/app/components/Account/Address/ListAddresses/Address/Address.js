
'use client';
import { Button, Confirm, Icon } from "semantic-ui-react";
import styles from "./Address.module.scss";
import { BasicModal } from "@/app/components/Shared";
import { AddressForm } from "../../AddressForm";
import { useState } from "react";
import { ConfirmModal } from "@/app/components/Shared/ConfirmModal";
import { Address as AddressCtrl } from "@/api";

const addressCtrl = new AddressCtrl();
export function Address({ addressId, address, onReload }) {

  const [showEdit, setShowEdit] = useState(false);

  const [showConfim, setShowConfim] = useState(false);

  const openCloseEdit = () => {
    setShowEdit(!showEdit);
  };

  const openCloseConfirm = () => {
    setShowConfim(!showConfim);
  };


  const onDeleted = async () => {
    try {
      await addressCtrl.delete(addressId);
      onReload();
    } catch (error) {
      throw error;
    }
  };
  return (
    <>
    <div className={styles.address}>
      <div>
        <p className={styles.title}>{address.title}</p>
        <p className={styles.addressInfo}>
          {address.name}, {address.address}, {address.state}, {address.city},{" "}
          {address.postal_code}
        </p>
      </div>

      <div className={styles.actions}>
        <Button primary icon onClick={openCloseEdit}>
          <Icon name="pencil" />
        </Button>
        <Button primary icon onClick={openCloseConfirm}>
          <Icon name="delete" />
        </Button>
      </div>
    </div>

    <ConfirmModal open={showConfim} onCancel={openCloseConfirm} onConfirm={onDeleted} content="¿Estas seguro que deseas eliminar?"/>
    <BasicModal show={showEdit} onClose={openCloseEdit} title="Edit Address">
    <AddressForm onClose={openCloseEdit} onReload={onReload} addressId={addressId}  address={address}/>
    </BasicModal >
    </>
  );
}
