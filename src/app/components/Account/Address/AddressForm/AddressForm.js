
"use client";
import { useFormik } from "formik";
import { Form } from "semantic-ui-react";

import { Address } from "@/api";
import { useAuth } from "@/hooks";
import { initialValues, validationSchema } from "./AddressForm.form";


const adressCtrl = new Address();
export function AddressForm({ onClose, onReload, addressId, address }) {
  const { user } = useAuth();

  const formik = useFormik({
    initialValues: initialValues(address),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async(formData) => {
    },
  });


 const handleSubmit = async (e) => {
    e.preventDefault();
    try {
  if(addressId) {
   await adressCtrl.update( formik.values, addressId);
  }else{
    await adressCtrl.create(formik.values, user.id);

  }
      formik.handleReset();
      onReload();
      onClose();
    } catch (error) {
      throw error;
    }
  }
  return (
    <Form onSubmit={(e) => {
      e.stopPropagation();
      formik.handleSubmit(e);
    }} >
      <Form.Input
        name="title"
        type="text"
        placeholder="Address Title"
        value={formik.values.title}
        onChange={formik.handleChange}
        error={formik.errors.title}
      />
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
          name="address"
          type="text"
          placeholder="Address"
          value={formik.values.address}
          onChange={formik.handleChange}
          error={formik.errors.address}
        />
      </Form.Group>

      <Form.Group widths="equal">
        <Form.Input name="city" type="text" placeholder="City" />
        <Form.Input
          name="state"
          type="text"
          placeholder="State"
          value={formik.values.state}
          onChange={formik.handleChange}
          error={formik.errors.state}
        />
      </Form.Group>

      <Form.Group widths="equal">
        <Form.Input
          name="postal_code"
          type="text"
          placeholder="Postal Code"
          value={formik.values.postal_code}
          onChange={formik.handleChange}
          error={formik.errors.postal_code}
        />
        <Form.Input
          name="phone"
          type="text"
          placeholder="Phone"
          value={formik.values.phone}
          onChange={formik.handleChange}
          error={formik.errors.phone}
        />
      </Form.Group>
 
      <Form.Button type="submit"  loading={formik.isSubmitting} fluid onClick={handleSubmit}>
        Save
      </Form.Button>
    </Form>
  );
}
