

"use client";

import { Form } from "semantic-ui-react";
import { useRouter } from "next/navigation";
import {useFormik} from "formik";
import { initiValues, validationSchema } from "./LoginForm.form";
import {Auth} from "@/api/auth";
import { useAuth } from "@/hooks";
import { use } from "react";
const authCtrl = new Auth();
export  function LoginForm() {
  const router = useRouter();
  const {login} = useAuth();
    const formik = useFormik({
        initialValues: initiValues(),
        validationSchema: validationSchema(),
        onSubmit: async(formValue) => {
            try {
                const response = await authCtrl.login(formValue);
                login(response.jwt);
                router.push('/');
            } catch (error) {
                console.log(error)
            }
        }
    })
        
  return (
    <Form onSubmit={formik.handleSubmit}>
      <Form.Input
        name="identifier"
        type="text"
        placeholder="E-mail or username"
        value={formik.values.identifier}
        onChange={formik.handleChange}
        error={formik.errors.identifier}
      />
      <Form.Input
        name="password"
        type="password"
        placeholder="Password"
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.errors.password}
      />
   
    <Form.Button type="submit" fluid loading={formik.isSubmitting}>
    Get into
    </Form.Button>
  </Form>
  )
}
