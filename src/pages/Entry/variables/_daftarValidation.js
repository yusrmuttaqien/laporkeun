import * as yup from 'yup';

export default yup.object().shape({
  namaUser: yup.string().required('Nama user wajib diisi'),
  kataSandi: yup.string().required('Kata sandi wajib diisi'),
  konfirmasiKataSandi: yup
    .string()
    .test('passwords-match', 'Kata sandi harus sama', function (value) {
      return this.parent.kataSandi === value;
    }),
});
