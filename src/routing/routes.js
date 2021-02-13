import React from 'react';

const Dashboard = React.lazy(() => import('~/views/dashboard/Dashboard'));
const Login = React.lazy(() => import('~/views/Pages/Login/Login'));
const SignUp = React.lazy(() => import('~/views/Pages/SignUp/SignUp'));

const routes = [
  { path: '/', exact: true, name: 'Dashboard', component: Dashboard },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/login', name: 'Login', component: Login },
  { path: '/sign-up', name: 'SignUp', component: SignUp },
];

export default routes;
