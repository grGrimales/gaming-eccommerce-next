
"use client";

import { Form } from 'semantic-ui-react';

import { useFormik } from 'formik';
import styles from './ChangeEmailForm.module.scss';
import { InitialValues, ValidationSchema } from './ChangeEmailForm.form';
import { User } from '@/api';
import { useAuth } from '@/hooks';


const userCtrl = new User();
export function ChangeEmailForm() {
const {user, updatedUser} = useAuth();
    const formik = useFormik({
        initialValues: InitialValues(),
        validationSchema: ValidationSchema(),
        validateOnChange: false,
        onSubmit: async (formData) => {
           try {
               await userCtrl.updatedMe(user.id, {email: formData.email});
               updatedUser("email", formData.email);
               formik.handleReset();
            } catch (error) {
                console.log(error)
                throw error;
            }
        }
    });
    return (
        <Form onSubmit={formik.handleSubmit} className={styles.form}>
          <label>Change email</label>

         <Form.Input name="email" placeholder="Your new email" value={formik.values.email} onChange={formik.handleChange} error={formik.errors.email} />

         <Form.Input name="repeatEmail" placeholder="Confirm your new email" value={formik.values.repeatEmail} onChange={formik.handleChange} error={formik.errors.repeatEmail} />
         <Form.Button type="submit" className={styles.btnUpdate} loading={formik.isSubmitting}>Send email</Form.Button>
        </Form>
    );
}
