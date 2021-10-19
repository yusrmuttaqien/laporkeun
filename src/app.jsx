import { Suspense } from 'preact/compat';
import { useEffect } from 'preact/hooks';
import { Switch } from 'react-router-dom';
import loadable, { lazy } from '@loadable/component';

import { loadedFeaturesStateC } from './utils/configs/states';
import initSession from './utils/helpers/auth/initSession';

import Navigation from './components/Navigation';
import Loading from './components/Loading';
import CRoute from './components/CRoute';

import styles from './app.module.scss';

const Home = lazy(() => import('./pages/Home'));
const Entry = lazy(() => import('./pages/Entry'));
const Public = lazy(() => import('./pages/Public'));
const New = lazy(() => import('./pages/New'));
const Toast = loadable(() => import('./components/Toast/Toast'));
const Prompt = loadable(() => import('./components/Prompt/Prompt'));

export function App() {
  const state = loadedFeaturesStateC();

  useEffect(() => {
    initSession();
  }, []);

  return (
    <section className={styles['app-wrapper']}>
      {state.getFeatures('isToast') && <Toast />}
      {state.getFeatures('isPrompt') && <Prompt />}
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
            <CRoute exact path="/" Component={Home} />
            <CRoute path="/entri" notLogged Component={Entry} />
            <CRoute path="/publik" Component={Public} />
            <CRoute path="/baru" logged Component={New} />
          </Suspense>
        </Switch>
      </section>
      <Navigation />
    </section>
  );
}
