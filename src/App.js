import React, { useEffect } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './scss/style.scss';
import createStore from './store/store';
import ProtectedRoute from './routing/ProtectedRoute';
import { TheLayout } from './containers';

const loading = () => (
  <div className='animated fadeIn pt-3 text-center'>
    <div className='sk-spinner sk-spinner-pulse'></div>
  </div>
);

const store = createStore;

// Containers
const KikerooHome = React.lazy(() =>
  import('./views/Pages/PublicPages/Home/index')
);
const Login = React.lazy(() => import('./views/Pages/PublicPages/Login/index'));
const SignUp = React.lazy(() =>
  import('./views/Pages/PublicPages/SignUp/index')
);
const DefaultLayout = React.lazy(() => import('./containers/TheLayout'));

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <React.Suspense fallback={loading()}>
          <Switch>
            <Route exact path='/home' component={TheLayout} />
            <Route exact path='/login' component={TheLayout} />
            <Route exact path='/sign-up' component={TheLayout} />
            <ProtectedRoute path='/' component={DefaultLayout} />
          </Switch>
        </React.Suspense>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
