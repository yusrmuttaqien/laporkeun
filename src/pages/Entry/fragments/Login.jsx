import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Input } from '@/components/Input';

import _masukValidation from '../variables/_masukValidation';

import styles from './Login.module.scss';

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { isDirty, isValid, errors, isSubmitting },
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(_masukValidation),
  });

  return (
    <section className={styles['entry-comp-login-frag']}>
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
        <button
          disabled={!isDirty || !isValid || isSubmitting}
          className={styles['custom-button']}
        >
          Masuk
        </button>
      </form>
    </section>
  );
}
