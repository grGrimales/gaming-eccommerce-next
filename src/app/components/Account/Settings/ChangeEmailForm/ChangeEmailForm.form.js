import * as Yup from 'yup';


export function InitialValues(){
    return {
        email: '',
        repeatEmail: '',
    }
}

export function ValidationSchema(){
    return Yup.object({
        email: Yup.string().email(true).required(true),
        repeatEmail: Yup.string().email(true).required(true).oneOf([Yup.ref('email')], "Emails are not the same"),
    })
}