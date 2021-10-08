import * as yup from 'yup';

export default yup.object().shape({
  email: yup.string().email('Surel tidak valid').required('Surel wajib diisi'),
  username: yup.string().required('Nama user wajib diisi'),
  password: yup.string().required('Kata sandi wajib diisi'),
  confirmPassword: yup
    .string()
    .test('passwords-match', 'Kata sandi harus sama', function (value) {
      return this.parent.password === value;
    }),
});
