import CartScreen from "../../Screens/Cart/Cart.screen";
import HomeScreen from "../../Screens/Home/Home.screen";
import LoginScreen from "../../Screens/Login/Login.screen";
import OrderHistoryScreen from "../../Screens/OrderHistory/OrderHistory.screen";
import ProfileScreen from "../../Screens/Profile/Profile.screen";
import { SCREEN_NAMES } from "../../Utils/constants";
import PlusActiveIcon from "../../Components/UI-Kit/Icons/iconComponents/PlusActiveIcon";
import PlusIcon from "../../Components/UI-Kit/Icons/iconComponents/PlusIcon";
import HomeActiveIcon from "../../Components/UI-Kit/Icons/iconComponents/HomeActiveIcon";
import HomeIcon from "../../Components/UI-Kit/Icons/iconComponents/HomeIcon";

export const notAuthenticatedRoutes = [
  {
    routeName: SCREEN_NAMES.login,
    component: LoginScreen,
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
    /* header: () => <Header variant='home' /> */
  },
  {
    label: SCREEN_NAMES.cart,
    tabLabel: 'cart',
    routeName: SCREEN_NAMES.cart,
    component: CartScreen,
    activeIcon: PlusActiveIcon,
    inActiveIcon: PlusIcon,
    headerShown: true,
    /* header: () => <Header variant='default' headerHeading='profile' /> */
  },
  {
    label: SCREEN_NAMES.orderHistory,
    tabLabel: 'orderHistory',
    routeName: SCREEN_NAMES.orderHistory,
    component: OrderHistoryScreen,
    activeIcon: PlusActiveIcon,
    inActiveIcon: PlusIcon,
    headerShown: true,
    /* header: () => <Header variant='default' headerHeading='profile' /> */
  }
]

export const drawerRoutes = [
  {
    label: SCREEN_NAMES.profile,
    routeName: SCREEN_NAMES.profile,
    component: ProfileScreen,
    drawerLabel: 'profile',
    /* optionIcon: CallIcon, */
    headerShown: true,
    headerHeading: 'profile',
    header: null
  }
]