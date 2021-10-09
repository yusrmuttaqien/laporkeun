import { Suspense } from 'preact/compat';
import { useEffect } from 'preact/hooks';
import { Switch } from 'react-router-dom';
import loadable, { lazy } from '@loadable/component';

import { loadedFeaturesStateC } from './utils/configs/states';
import { initSession } from './utils/helpers/auth';

import Navigation from './components/Navigation';
import Loading from './components/Loading';

import styles from './app.module.scss';

const Home = lazy(() => import('./pages/Home'));
const Entry = lazy(() => import('./pages/Entry'));
const Public = lazy(() => import('./pages/Public'));
const Toast = loadable(() => import('./components/Toast/Toast'));

export function App() {
  const state = loadedFeaturesStateC();

  useEffect(() => {
    initSession();
  }, []);

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
            <Home />
            <Entry />
            <Public />
          </Suspense>
        </Switch>
      </section>
      <Navigation />
    </section>
  );
}
