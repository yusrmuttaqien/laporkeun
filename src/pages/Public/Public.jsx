import { Suspense } from 'preact/compat';
import { Route, useRouteMatch } from 'react-router-dom';
import loadable from '@loadable/component';

import Header from '@/components/Header';
import { Select } from '@/components/Input';
import Loading from '@/components/Loading/Loading';

import styles from './Public.module.scss';

const renderPublic = loadable(() => import('./fragments/renderPublic'));

export default function Public() {
  const { path } = useRouteMatch();

  return (
    <section className={styles['public-page']}>
      <Header />
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
