import { Suspense } from 'preact/compat';
import { Switch, Route, useLocation } from 'react-router-dom';
import { lazy } from '@loadable/component';

import Navigation from './components/Navigation';

import styles from './app.module.scss';
import Loading from './components/Loading/Loading';

const Entry = lazy(() => import('./pages/Entry'));
const Public = lazy(() => import('./pages/Public'));

export function App() {
  return (
    <section className={styles['app-wrapper']}>
      <section className={styles['view-wrapper']}>
        <Switch>
          <Suspense
            fallback={
              <Loading
                customClass={styles['custom-loading']}
                text="Memuat halaman"
                stack
              />
            }
          >
            <Route exact path="/">
              <div>helo</div>
            </Route>
            <Route path="/entri" component={Entry} />
            <Route path="/publik" component={Public} />
          </Suspense>
        </Switch>
      </section>
      <Navigation />
    </section>
  );
}
