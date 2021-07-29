import { DashboardRoutes } from 'src/app/features/dashboard/constants/dashboard-routes.constant';
import { environment } from 'src/environments/environment';

export const NavigationOptions = [
  {
    label: 'NAVIGATION.DASHBOARD',
    link: DashboardRoutes.Root,
    icon: 'qr_code_2'
  },
  {
    label: 'NAVIGATION.EDIT_DETAILS',
    link: `${DashboardRoutes.Root}/${DashboardRoutes.EditProfile}`,
    icon: 'edit'
  },
  {
    label: 'NAVIGATION.PREVIEW',
    link: `${DashboardRoutes.Root}/${DashboardRoutes.Preview}`,
    icon: 'visibility'
  },
  {
    label: 'NAVIGATION.SHOP',
    link: `${DashboardRoutes.Root}/${DashboardRoutes.Shop}`,
    icon: 'shopping_cart',
    comingSoon: environment.production
  }
];