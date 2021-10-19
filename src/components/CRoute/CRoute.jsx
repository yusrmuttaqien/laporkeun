import { Redirect, Route } from 'react-router-dom';

import { persistStateC } from '@/utils/configs/states';
import { arrayAnd } from '@/utils/helpers/arrayOperation';

export default function CRoute(props) {
  const {
    logged,
    notLogged,
    conditions = [],
    Component,
    redirect,
    ...other
  } = props;
  const isLogged = persistStateC().isLogged();

  const isTrue = arrayAnd([logged && isLogged, notLogged && !isLogged]);

  return (
    <Route
      {...other}
      render={(props) =>
        isTrue ? <Component {...props} /> : <Redirect to={redirect || '/'} />
      }
    />
  );
}
