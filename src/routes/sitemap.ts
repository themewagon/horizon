import paths, { rootPaths } from './paths';

export interface MenuItem {
  id: number;
  name: string;
  pathName: string;
  path?: string;
  active?: boolean;
  icon: string;
}

const sitemap: MenuItem[] = [
  {
    id: 1,
    name: 'Dashboard',
    path: rootPaths.root,
    pathName: 'dashboard',
    icon: 'ic:round-home',
    active: true,
  },
  {
    id: 2,
    name: 'NFT Marketplace',
    path: '#!',
    pathName: 'nft-marketplace',
    icon: 'ic:outline-shopping-cart',
  },
  {
    id: 3,
    name: 'Tables',
    path: '#!',
    pathName: 'tables',
    icon: 'ic:round-bar-chart',
  },
  {
    id: 4,
    name: 'Kanban',
    path: '#!',
    pathName: 'kanban',
    icon: 'ic:round-dashboard',
  },
  {
    id: 5,
    name: 'Profile',
    path: '#!',
    pathName: 'profile',
    icon: 'ic:baseline-person',
  },
  {
    id: 6,
    name: 'Sign In',
    path: paths.signin,
    pathName: 'sign-in',
    icon: 'ic:round-lock',
    active: true,
  },
  {
    id: 7,
    name: 'Sign Up',
    path: paths.signup,
    pathName: 'sign-up',
    icon: 'ic:baseline-person-add-alt-1',
    active: true,
  },
];

export default sitemap;
