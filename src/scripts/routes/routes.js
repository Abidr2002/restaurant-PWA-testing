import Detail from '../views/pages/detail';
import Resotran from '../views/pages/resto';
import Favorite from '../views/pages/favorite';

const routes = {
  '/': Resotran, // default page
  '/home': Resotran,
  '/detail/:id': Detail,
  '/favorite': Favorite,
};

export default routes;
