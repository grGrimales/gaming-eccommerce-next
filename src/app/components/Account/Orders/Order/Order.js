"use client";

import { DateTime } from "luxon";
import styles from "./Order.module.scss";
import { Basic } from "next/font/google";
import { BasicModal } from "@/app/components/Shared";
import { useState } from "react";
import { Image } from "semantic-ui-react";
import { calcDiscountedPrice } from "@/utils/functions";

export const Order = ({ order }) => {
  const createdAt = new Date(order.attributes.createdAt).toISOString();
  const [showModal, setShowModal] = useState(false);
  const products = order.attributes.products;
  const address = order.attributes.addressShipping;

  const openCloseModal = () => {
    setShowModal(!showModal);
  };

  const getTotalProducts = () => {
    let total = 0;
    products.forEach((item) => {
      total += item.quantity;
    });
    return total;
  };

  return (
    <>
      <div className={styles.order} onClick={openCloseModal}>
        <div>
          <span>
            {DateTime.fromISO(createdAt, { locale: "es" }).toFormat(
              "dd/MM/yyyy"
            )}
          </span>

          <p> {getTotalProducts()} Products</p>
        </div>
        <p>${order.attributes.totalPayment.toFixed(2)}</p>
      </div>

      <BasicModal
        show={showModal}
        onClose={openCloseModal}
        title="Order details"
      >
        {products.map((product) => (
          <div key={product.id} className={styles.product}>
            <Image
              src={product.attributes.cover.data.attributes.url}
              alt={product.name}
            />
            <div>
              <div className={styles.info}>
                <div>
                  <p>{product.attributes.title}</p>
                  <p>{product.attributes.platform.data.attributes.title}</p>
                </div>
              </div>

              <div className={styles.quantity}>
                <span>x {product.quantity}</span>
                <span>
                  $
                  {calcDiscountedPrice(
                    product.attributes.price,
                    product.attributes.discount
                  )}
                </span>
              </div>
            </div>
          </div>
        ))}

        <div className={styles.address}>
          <div>
            <p className={styles.title}>{address.attributes.title}</p>
            <p className={styles.info}>
              {address.attributes.name}, {address.attributes.address},{" "}
              {address.attributes.state}, {address.attributes.city},{" "}
              {address.attributes.postal_code}
            </p>
          </div>
        </div>


        <div className={styles.total}>
            <p>TOTAL: </p>
            <p>${order.attributes.totalPayment.toFixed(2)}</p>
        </div>
      </BasicModal>
    </>
  );
};
