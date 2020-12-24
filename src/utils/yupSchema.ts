import * as yup from 'yup'

export const schemaSU = yup.object().shape({
  email: yup
    .string()
    .email('Введите корректный email')
    .required('Email обязателен'),
  password: yup
    .string()
    .required('Пароль обязателен')
    .min(6, 'минимальная длинна пароля 6 символов')
    .oneOf([yup.ref('confrimpassword')], 'Пароли должны совпадать'),
  confrimpassword: yup
    .string()
    .required('Подтверждение пароля обязательно')
    .oneOf([yup.ref('password')], 'Пароли должны совпадать'),
})

export const schemaSI = yup.object().shape({
  email: yup
    .string()
    .email('Введите корректный email')
    .required('Email обязателен'),
  password: yup
    .string()
    .required('Пароль обязателен')
    .min(6, 'минимальная длинна пароля 6 символов'),
})

export const emailSchema = yup.object().shape({
  email: yup
    .string()
    .email('Введите корректный email')
    .required('Email обязателен'),
})

export const bookSchema = yup.object().shape({
  title: yup.string().required('Название обязательно'),
  author: yup.string().required('Автор обязателен'),
  year: yup.string().required('Год обязателен'),
  isbn: yup.string().required('ISBN обязателен'),
})
