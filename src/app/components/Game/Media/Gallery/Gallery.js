"use client";

import { Image } from "semantic-ui-react";
import styles from "./Gallery.module.scss";
import { FullModal } from "@/app/components/Shared/FullModal/FullModal";
import { useState } from "react";
import Slider from "react-slick";
import { Separator } from "@/app/components/Shared/Separator/Separator";

export function Gallery({ screenshots }) {
  const clone = [...screenshots];
  const main = clone.shift();
  const [open, setOpen] = useState(false);
  const onOpenClose = () => {
    setOpen(!open);
  };

  const settings = {
    dots: true,
    dotsClass: styles.dots,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    customPaging: function (i) {
        return (
            <Image src={clone[i].attributes.url} />
        );
        }
  };

  return (
    <>
      <div className={styles.gallery}>
        <div className={styles.principal}>
          <Image src={main.attributes.url} onClick={onOpenClose} />
        </div>

        <div className={styles.grid}>
          {clone.map((screenshot) => (
            <div className={styles.item} key={screenshot.id}>
              <Image src={screenshot.attributes.url} onClick={onOpenClose} />
            </div>
          ))}
        </div>
      </div>

      <FullModal open={open} onClose={onOpenClose}>
        <div className={styles.carrousel}>
          <Slider {...settings}>
            {clone.map((screenshot) => (
              <div className={styles.item_screenshot} key={screenshot.id}>
                <Image src={screenshot.attributes.url} />
              </div>
            ))}
          </Slider>
        <Separator height={30} />
        </div>
      </FullModal>
    </>
  );
}
