import { Suspense } from 'preact/compat';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { lazy } from '@loadable/component';

import Switcher from './fragments/Switcher';
import Loading from '@/components/Loading';

import styles from './Entry.module.scss';

const Login = lazy(() => import('./fragments/Login'));
const Register = lazy(() => import('./fragments/Register'));

export default function Entry() {
  let { path, url } = useRouteMatch();

  return (
    <section className={styles['entry-page']}>
      <Switcher endpoint={url} />
      <section className={styles['view-wrapper-entry-page']}>
        <Switch>
          <Suspense fallback={<Loading text="Memuat entri" stack />}>
            <Route exact path={path} component={Login} />
            <Route path={`${path}/daftar`} component={Register} />
          </Suspense>
        </Switch>
      </section>
    </section>
  );
}
