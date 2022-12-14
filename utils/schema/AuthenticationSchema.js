import * as Yup from 'yup';

export const loginSchema = Yup.object().shape({
  username: Yup.string().required('Username harus diisi'),
  password: Yup.string()
    .required('Password Harus diisi')
    .min(6, 'Minimal terdiri dari 6 karakter'),
});

export const resetPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .email('Format email tidak sesuai')
    .required('Email harus diisi'),
});

export const changePasswordSchema = Yup.object().shape({
  password: Yup.string()
    .required('Password harus diisi')
    .min(6, 'Minimal terdiri dari 6 karakter'),
  repassword: Yup.string()
    .required('Password harus diisi')
    .oneOf([Yup.ref('password'), null], 'Perubahan password harus sama'),
});
