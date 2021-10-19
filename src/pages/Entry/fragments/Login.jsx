import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import callToast from '@/components/Toast/callToast';
import login from '@/utils/helpers/auth/login';

import Input from '@/components/Inputs/Text';
import Spinner from '@/components/Spinner';

import _masukValidation from '../variables/_masukValidation';

import styles from './Login.module.scss';

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { isDirty, isValid, errors, isSubmitting },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(_masukValidation),
  });

  const onSubmit = async (e) => {
    try {
      await login(e);
    } catch (err) {
      callToast(err, {
        title: ['code', 'title'],
        content: ['message', 'content'],
      });
    }
  };

  return (
    <section className={styles['entry-comp-login-frag']}>
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
          name="password"
          placeholder="Kata sandi disini"
          label="Kata Sandi"
          type="password"
        />
        <button
          disabled={!isDirty || !isValid || isSubmitting}
          className={styles['custom-button']}
        >
          {isSubmitting ? <Spinner button /> : 'Masuk'}
        </button>
      </form>
    </section>
  );
}
