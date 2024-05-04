
"use client";

import { User } from "@/api";
import { Form } from "semantic-ui-react";
import { InitialValues, ValidationSchema } from "./ChangePasswordForm.form";
import { useFormik } from "formik";
import { useAuth } from "@/hooks";
import styles from "./ChangePasswordForm.module.scss";

const userCtrl = new User();
export function ChangePasswordForm() {
    const { user, logout } = useAuth();
    const formik = useFormik({
        initialValues: InitialValues(),
        validationSchema: ValidationSchema(),
        validateOnChange: false,
        onSubmit: async (formData) => {
           try {
               await userCtrl.updatedMe(user.id, {password: formData.password});
               logout();
               formik.handleReset();
            } catch (error) {
                console.log(error)
                throw error;
            }
        }
    });
    return (
        <Form onSubmit={formik.handleSubmit} className={styles.form}>
          <label>Change password</label>

         <Form.Input type="password" name="password" placeholder="Your new password" value={formik.values.password} onChange={formik.handleChange} error={formik.errors.password} />

         <Form.Input  type="password" name="repeatPassword" placeholder="Confirm your new password" value={formik.values.repeatPassword} onChange={formik.handleChange} error={formik.errors.repeatPassword} />
         <Form.Button type="submit" className={styles.btnUpdate} loading={formik.isSubmitting}>Update password</Form.Button>
        </Form>
    );
}