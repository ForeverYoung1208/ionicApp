import { PermissionsGuard } from "../components/PrermissionsGuard/PermissionsGuard";
import { BasicLayout } from '../layouts/basicLayout';
import AdminPage from "../pages/Admin/Admin";
import Customers from "../pages/Customers/Customers";
import Login from "../pages/Login/Login";
import Services from "../pages/Services/Services";
import Supplyers from "../pages/Supplyers/Supplyers";


export type TRoute = {
  path: string;
  layout: React.ComponentType<{ children: React.ReactNode, title: string }>;
  layoutProps: { title: string };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: React.ComponentType<any>;
  guard?: React.FC<TRouteGuardProps>;
  guardOptions?: TRouteGuardOptions;
};

export type TRouteGuardOptions = {
  onlyForAuthedUser?: boolean;
};

export type TRouteGuardProps = {
  children: React.ReactNode;
  options: TRouteGuardOptions;
}

export const routes: TRoute[] = [
  {
    path: '/',
    component: Services,
    layout: BasicLayout,
    layoutProps: {
      title: 'Services',
    },
  },
  {
    path: '/Services',
    component: Services,
    layout: BasicLayout,
    layoutProps: {
      title: 'Services',
    },
  },
  {
    path: '/Supplyers',
    component: Supplyers,
    layout: BasicLayout,
    layoutProps: {
      title: 'Supplyers',
    },
  },
  {
    path: '/Customers',
    component: Customers,
    layout: BasicLayout,
    layoutProps: {
      title: 'Customers',
    },
  },
  {
    path: '/Login',
    component: Login,
    layout: BasicLayout,
    layoutProps: {
      title: 'Login',
    },
  },
  {
    path: '/Admin',
    component: AdminPage,
    layout: BasicLayout,
    layoutProps: {
      title: 'Admin',
    },
    guard: PermissionsGuard,
    guardOptions: {
      onlyForAuthedUser: true,
    },
  },
];