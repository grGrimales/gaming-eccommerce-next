import Link from "next/link";
import styles from "../sign-in/sign-in.module.scss";
import { JoinLayout } from "@/layouts";
import { RegisterForm } from "@/app/components/Auth/RegisterForm/RegisterForm";

export default function SignUpPage() {
  return (
    <JoinLayout>
      <div className={styles.signIn}>
        <h3>Create an account</h3>
       <RegisterForm /> 
        <div className={styles.actions}>
          <Link href="/join/sign-in"> Atras </Link>
        </div>
      </div>
    </JoinLayout>
  );
}
