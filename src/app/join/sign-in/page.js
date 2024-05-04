import styles from "./sign-in.module.scss";
import Link from "next/link";
import { JoinLayout } from "@/layouts";
import { LoginForm } from "@/app/components/Auth";
export default function SignInPage() {
  return (
    <JoinLayout>
      <div className={styles.container}>
        <h1>Sign In</h1>
         <LoginForm />
        <div className={styles.actions}>
          <Link href="/join/sign-up"> You do not have an account? </Link>
        </div>
      </div>
    </JoinLayout>
  );
}
