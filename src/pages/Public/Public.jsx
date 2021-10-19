import { Suspense } from 'preact/compat';
import { Route, useRouteMatch } from 'react-router-dom';
import loadable from '@loadable/component';

import Header from '@/components/Header';
import Select from '@/components/Inputs/Select';
import Loading from '@/components/Loading';

import styles from './Public.module.scss';

const renderPublic = loadable(() => import('./fragments/renderPublic'));

export default function Public() {
  const { path } = useRouteMatch();

  return (
    <section className={styles['public-page']}>
      <Header title="Laporan publik" />
      <section className={styles['public-page-lapor-wrapper']}>
        <Select
          customClass={styles['custom-select']}
          isSearchable={false}
          placeholder="Opsi sortir"
        />
        <Route exact path={[`${path}/:name`, path]} component={renderPublic} />
      </section>
    </section>
  );
}
