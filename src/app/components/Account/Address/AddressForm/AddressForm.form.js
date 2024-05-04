
import * as Yup from 'yup';

export function initialValues(address){
    return {
        title: address ? address.title : "",
        name: address ? address.name : "",
        address: address ? address.address : "",
        city: address ? address.city : "",
        state: address ? address.state : "",
        postal_code: address ? address.postal_code : "",
        phone: address ? address.phone : "",
    }
}

export function validationSchema(){
    return Yup.object({
        title: Yup.string().required(true),
        name: Yup.string().required(true),
        address: Yup.string().required(true),
        city: Yup.string().required(true),
        state: Yup.string().required(true),
        postal_code: Yup.string().required(true),
        phone: Yup.number().required(true),
    })
}