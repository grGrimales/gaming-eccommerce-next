import { User } from '@/api';
import * as Yup from 'yup';

export function InitialValues(){
    return {
        password: '',
        repeatPassword: '',
    }
}
export function ValidationSchema(){

    return Yup.object({
        password: Yup.string().required(true),
        repeatPassword: Yup.string().required(true).oneOf([Yup.ref('password')], "Passwords are not the same"),
    })
}
