import { Suspense } from 'preact/compat';
import { Switch, Route, useLocation } from 'react-router-dom';
import loadable, { lazy } from '@loadable/component';

import { loadedFeaturesStateC } from './utils/configs/states';

import Navigation from './components/Navigation';
import Loading from './components/Loading/Loading';

import styles from './app.module.scss';

const Entry = lazy(() => import('./pages/Entry'));
const Public = lazy(() => import('./pages/Public'));
const Toast = loadable(() => import('./components/Toast/Toast'));

export function App() {
  const state = loadedFeaturesStateC();

  return (
    <section className={styles['app-wrapper']}>
      {state.getFeatures('isToast') && <Toast />}
      <section className={styles['view-wrapper']} id="main-view">
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
