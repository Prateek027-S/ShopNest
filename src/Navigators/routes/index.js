import HomeScreen from "../../Screens/Home/Home.screen";
import LoginScreen from "../../Screens/Login/Login.screen";
import { SCREEN_NAMES } from "../../Utils/constants";

export const notAuthenticatedRoutes = [
  {
    routeName: SCREEN_NAMES.login,
    component: LoginScreen,
  },
  {
    routeName: SCREEN_NAMES.forgotPassword,
    component: ForgotPasswordScreen,
  },
];
export const stackNavigationRoutes = [
  {
    label: SCREEN_NAMES.login,
    headerShown: true,
    headerHeading: 'Login',
    header: null,
    routeName: SCREEN_NAMES.login,
    component: LoginScreen,
  },
  {
    label: SCREEN_NAMES.home,
    headerShown: true,
    headerHeading: 'Home',
    header: null,
    routeName: SCREEN_NAMES.home,
    component: HomeScreen,
  },
];

export const applicationTabRoutes = [
  {
    label: SCREEN_NAMES.home,
    tabLabel: 'home',
    routeName: SCREEN_NAMES.home,
    component: HomeScreen,
    activeIcon: HomeActiveIcon,
    inActiveIcon: HomeIcon,
    headerShown: true,
    /* header: () => <Header variant="home" />, */
  },
  {
    label: SCREEN_NAMES.profile,
    tabLabel: 'profile',
    routeName: SCREEN_NAMES.profile,
    component: ProfileScreen,
    activeIcon: PlusActiveIcon,
    inActiveIcon: PlusIcon,
    headerShown: true,
    /* header: () => <Header variant="default" headerHeading="profile" />, */
  },
];