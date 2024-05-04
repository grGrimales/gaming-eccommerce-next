import * as Yup from "yup";

export function initiValues() {
    return {
            email: "lucia@gmail.com",
            password: "",
            name: "",
            userName: "",
    }
}

export function validationSchema() {
    return Yup.object({
        email: Yup.string().email(true).required(true),
        password: Yup.string(true).required(true),
        name: Yup.string(true).required(true),
        username: Yup.string(true).required(true),
    })
}