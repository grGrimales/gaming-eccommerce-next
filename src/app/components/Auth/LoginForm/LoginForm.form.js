import * as Yup from "yup";

export function initiValues() {
    return {
            identifier: "lucia@gmail.com",
            password: "123456",
            
    }
}

export function validationSchema() {
    return Yup.object({
        identifier: Yup.string().required(true),
        password: Yup.string(true).required(true),
    })
}