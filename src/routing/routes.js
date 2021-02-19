import React from 'react';

const Dashboard = React.lazy(() =>
  import('~/views/Pages/PrivatePages/dashboard/Dashboard')
);
const KikerooHome = React.lazy(() =>
  import('~/views/Pages/PublicPages/Home/index')
);
const AboutUs = React.lazy(() =>
  import('~/views/Pages/PublicPages/AboutUs/index')
);
const Support = React.lazy(() =>
  import('~/views/Pages/PublicPages/Support/index')
);
const TermsCondition = React.lazy(() =>
  import('~/views/Pages/PublicPages/Terms/index')
);
const KikerooSearchResults = React.lazy(() =>
  import('~/views/Pages/PublicPages/SearchResults/index')
);
const Career = React.lazy(() =>
  import('~/views/Pages/PublicPages/Career/index')
);
const SiteMap = React.lazy(() =>
  import('~/views/Pages/PublicPages/SiteMap/index')
);
const Login = React.lazy(() => import('~/views/Pages/PublicPages/Login/index'));
const BookingGift = React.lazy(() =>
  import('~/views/Pages/PublicPages/BookingGift/index')
);
const SignUp = React.lazy(() =>
  import('~/views/Pages/PublicPages/SignUp/index')
);

const routes = [
  { path: '/', exact: true, name: 'Dashboard', component: Dashboard },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/home', name: 'Home', component: KikerooHome },
  { path: '/about-us', name: 'AboutUs', component: AboutUs },
  { path: '/support', name: 'Support', component: Support },
  { path: '/booking-gift', name: 'BookingGift', component: BookingGift },
  { path: '/terms', name: 'Terms', component: TermsCondition },
  { path: '/site-map', name: 'SiteMap', component: SiteMap },
  {
    path: '/search-results',
    name: 'SearchResults',
    component: KikerooSearchResults,
  },
  { path: '/career', name: 'Career', component: Career },
  { path: '/login', name: 'Login', component: Login },
  { path: '/sign-up', name: 'SignUp', component: SignUp },
];

export default routes;
