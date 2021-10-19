import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Header from '@/components/Header';
import Input from '@/components/Inputs/Text';
import TextArea from '@/components/Inputs/TextArea';
import File from '@/components/Inputs/File';
import Spinner from '@/components/Spinner';

import styles from './New.module.scss';

export default function New() {
  const {
    register,
    handleSubmit,
    formState: { isDirty, isValid, errors, isSubmitting },
  } = useForm({
    mode: 'onChange',
    //   resolver: yupResolver(_masukValidation),
  });

  return (
    <section className={styles['new-page']}>
      <Header title="Buat laporan" />
      <form className={styles['new-page-wrapper']} noValidate>
        <Input
          customClass={styles['custom-input']}
          r={register}
          e={errors}
          name="text"
          placeholder="Judul laporan disini"
          label="Judul laporan"
        />
        <TextArea
          customClass={styles['custom-input']}
          r={register}
          e={errors}
          placeholder="Laporan anda disini"
          label="Laporan"
        />
        <File
          customClass={styles['custom-input']}
          r={register}
          e={errors}
          placeholder="Unggah berkas berupa .jpg .jpeg atau .png"
          buttonTitle="Unggah berkas"
        />
      </form>
    </section>
  );
}
