"use client";

import { Form } from 'semantic-ui-react';
import styles from './ChangeNameForm.module.scss';

import {useAuth} from '@/hooks';
import { useFormik } from 'formik';
import { InitialValues, ValidationSchema } from './ChangeName.Form.form';
import { User } from '@/api';


const userCtrl = new User();
export function ChangeNameForm(){
const {user} =  useAuth();
    const formik = useFormik({
        initialValues: InitialValues(user.firstname, user.lastname),
        validateOnChange: false,
        validationSchema: ValidationSchema(),
        onSubmit: async (formData) => {
          try {
             await userCtrl.updatedMe(user.id, formData);
          } catch (error) {
            console.log(error)
          }
        }
    });
    return(
        <Form onSubmit={formik.handleSubmit}>
            <label>Name and surname</label>
            <div className={styles.content}>
                <Form.Input
                    name="firstname"
                    type="text"
                    placeholder="Nombre "
                    value={formik.values.firstname}
                    onChange={formik.handleChange}
                    error={formik.errors.firstname}
                />
                    <Form.Input
                    name="lastname"
                    type="text"
                    placeholder="Apellidos"
                    value={formik.values.lastname}
                    onChange={formik.handleChange}
                    error={formik.errors.lastname}
                />
                <Form.Button type='submit' loading={formik.isSubmitting}>Enviar</Form.Button>
            </div>
        </Form>
    );
}
