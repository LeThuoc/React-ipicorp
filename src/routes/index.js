import Home from '~/pages/Home';
import AboutUs from '~/pages/AboutUs';
import News from '~/pages/News';
import Product from '~/pages/Product';
import Contact from '~/pages/Contact';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/aboutUs', component: AboutUs },
    { path: '/product', component: Product },
    { path: '/news', component: News },
    { path: '/contact', component: Contact },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
