
'use client'

import { Icon, Modal } from "semantic-ui-react";
import styles from "./FullModal.module.scss";


export function FullModal({ children, open, onClose }) {

    return (
        <>
    <Modal open={open} onClose={onClose} className={styles.fullModal}>
        {children}
        <Icon name="close" className={styles.close} onClick={onClose}/>
    </Modal>
        </>
    );
    }