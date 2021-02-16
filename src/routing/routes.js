import React from 'react';

const Dashboard = React.lazy(() =>
  import('~/views/Pages/PrivatePages/dashboard/Dashboard')
);
const KikerooHome = React.lazy(() =>
  import('~/views/Pages/PublicPages/Home/index')
);
const Login = React.lazy(() => import('~/views/Pages/PublicPages/Login/index'));
const SignUp = React.lazy(() =>
  import('~/views/Pages/PublicPages/SignUp/index')
);

const routes = [
  { path: '/', exact: true, name: 'Dashboard', component: Dashboard },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/home', name: 'Home', component: KikerooHome },
  { path: '/login', name: 'Login', component: Login },
  { path: '/sign-up', name: 'SignUp', component: SignUp },
];

export default routes;
