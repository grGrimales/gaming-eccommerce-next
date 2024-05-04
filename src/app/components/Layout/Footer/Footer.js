import { Button, Container, Image } from "semantic-ui-react";
import styles from "./Footer.module.scss";
import Link from "next/link";

export function Footer() {
  return (
    <div className={styles.footer}>
      <Container className={styles.columns}>
        <div>
          <Link href="/">
            <Image src="/images/logo.png" alt="Gaming" />
          </Link>
        </div>
        <div>
          <ul>
            <Link href="#">Terms and Conditions</Link>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Contact</Link>
          </ul>
        </div>

        <div className={styles.social}>
          <Button as="a" href="#" circular color="facebook" icon="facebook" />
          <Button as="a" href="#" circular color="twitter" icon="twitter" />
          <Button as="a" href="#" circular color="linkedin" icon="linkedin" />
          <Button as="a" href="#" circular color="youtube" icon="youtube" />
        </div>

     
      </Container>

      <div className={styles.copyright}>
            <span>Copyright © 2023 Gaming. All rights reserved.</span>
        </div>
    </div>
  );
}
