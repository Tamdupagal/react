import * as yup from 'yup';

export const LOGIN_FORM_SCHEMA = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(6).max(14).required(),
})