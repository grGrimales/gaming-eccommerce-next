import * as Yup from 'yup';


export function InitialValues(firstname, lastname){
    return{
        firstname,
        lastname
    }
}

export function ValidationSchema(){
    return Yup.object({
        firstname: Yup.string().required(true),
        lastname: Yup.string().required(true)

    })
}