import { PermissionsGuard } from "../components/PrermissionsGuard/PermissionsGuard";
import AdminPage from "../pages/Admin/Admin";
import Customers from "../pages/Customers/Customers";
import Login from "../pages/Login/Login";
import Services from "../pages/Services/Services";
import Supplyers from "../pages/Supplyers/Supplyers";


export type TRoute = {
  path: string;
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
    path: '/Services',
    component: Services,
  },
  {
    path: '/Supplyers',
    component: Supplyers,
  },
  {
    path: '/Customers',
    component: Customers,
  },
  {
    path: '/Login',
    component: Login,
  },
  {
    path: '/Admin',
    component: AdminPage,
    guard: PermissionsGuard,
    guardOptions: {
      onlyForAuthedUser: true,
    },
  },
];