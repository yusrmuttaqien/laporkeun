import * as yup from 'yup';

export default yup.object().shape({
  email: yup.string().email('Surel tidak valid').required('Surel wajib diisi'),
  password: yup.string().required('Kata sandi wajib diisi'),
});
