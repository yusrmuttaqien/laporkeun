import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import callToast from '@/components/Toast/callToast';
import registration from '@/utils/helpers/auth/registration';

import Input from '@/components/Inputs/Text';
import Spinner from '@/components/Spinner';

import _daftarValidation from '../variables/_daftarValidation';

import styles from './Register.module.scss';

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { isDirty, isValid, errors, isSubmitting },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(_daftarValidation),
  });

  const onSubmit = async (e) => {
    try {
      await registration(e);
    } catch (err) {
      callToast(err, {
        title: ['code', 'title'],
        content: ['message', 'content'],
      });
    }
  };

  return (
    <section className={styles['entry-comp-reg-frag']}>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <Input
          customClass={styles['custom-input']}
          r={register}
          e={errors}
          name="email"
          placeholder="Alamat surel disini"
          label="Alamat Surel"
        />
        <Input
          customClass={styles['custom-input']}
          r={register}
          e={errors}
          name="username"
          placeholder="Nama user disini"
          label="Nama User"
        />
        <Input
          customClass={styles['custom-input']}
          r={register}
          e={errors}
          name="password"
          placeholder="Kata sandi disini"
          label="Kata Sandi"
          type="password"
        />
        <Input
          customClass={styles['custom-input']}
          r={register}
          e={errors}
          name="confirmPassword"
          placeholder="Konfirmasi kata sandi disini"
          label="Konfirmasi Kata Sandi"
          type="password"
        />
        <button
          disabled={!isDirty || !isValid || isSubmitting}
          className={styles['custom-button']}
        >
          {isSubmitting ? <Spinner button /> : 'Daftar'}
        </button>
      </form>
    </section>
  );
}
