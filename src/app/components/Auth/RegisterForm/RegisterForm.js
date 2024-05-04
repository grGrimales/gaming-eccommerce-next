"use client";

import { Form } from "semantic-ui-react";

import { useFormik } from "formik";
import {Auth} from "@/api";
import { initiValues, validationSchema } from "./RegisterForm.form";
import { useRouter } from "next/navigation";


const authCtrl = new Auth();
export function RegisterForm() {

  const router = useRouter();
  const formik = useFormik({
    initialValues: initiValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formData) => {
     try {
      await authCtrl.register(formData);
     router.push('/join/sign-in');
     } catch (error) {
      console.log(error)
     }
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Form.Group widths="equal">
        <Form.Input
          name="email"
          type="text"
          placeholder="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.errors.email}
        />
        <Form.Input
          name="username"
          type="text"
          placeholder="Name"
          value={formik.values.username}
          onChange={formik.handleChange}
          error={formik.errors.username}
        />
      </Form.Group>
      <Form.Group widths="equal">
        <Form.Input
          name="name"
          type="text"
          placeholder="Name and Lastname"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.errors.name}
        />
        <Form.Input
          name="password"
          type="password"
          placeholder="Password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.errors.password}
        />
      </Form.Group>
      <Form.Button type="submit" fluid loading={formik.isSubmitting}>
        Register
      </Form.Button>
    </Form>
  );
}
