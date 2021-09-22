import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Input } from '@/components/Input';

import _daftarValidation from '../variables/_daftarValidation';

import styles from './Register.module.scss';

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { isDirty, isValid, errors, isSubmitting },
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(_daftarValidation),
  });

  return (
    <section className={styles['entry-comp-reg-frag']}>
      <form>
        <Input
          customClass={styles['custom-input']}
          r={register}
          e={errors}
          name="namaUser"
          placeholder="Nama user disini"
          label="Nama User"
        />
        <Input
          customClass={styles['custom-input']}
          r={register}
          e={errors}
          name="kataSandi"
          placeholder="Kata sandi disini"
          label="Kata Sandi"
          type="password"
        />
        <Input
          customClass={styles['custom-input']}
          r={register}
          e={errors}
          name="konfirmasiKataSandi"
          placeholder="Konfirmasi kata sandi disini"
          label="Konfirmasi Kata Sandi"
          type="password"
        />
        <button
          disabled={!isDirty || !isValid || isSubmitting}
          className={styles['custom-button']}
        >
          Daftar
        </button>
      </form>
    </section>
  );
}
