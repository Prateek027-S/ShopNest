import CartScreen from "../../Screens/Cart/Cart.screen";
import HomeScreen from "../../Screens/Home/Home.screen";
import LoginScreen from "../../Screens/Login/Login.screen";
import OrderHistoryScreen from "../../Screens/OrderHistory/OrderHistory.screen";
import ProfileScreen from "../../Screens/Profile/Profile.screen";
import { SCREEN_NAMES } from "../../Utils/constants";
import HomeActiveIcon from "../../Components/UI-Kit/Icons/iconComponents/HomeActiveIcon";
import HomeIcon from "../../Components/UI-Kit/Icons/iconComponents/HomeIcon";
import CartIcon from "../../Components/UI-Kit/Icons/iconComponents/CartIcon";
import CartActiveIcon from "../../Components/UI-Kit/Icons/iconComponents/CartActiveIcon";
import HistoryIcon from "../../Components/UI-Kit/Icons/iconComponents/HistoryIcon";
import HistoryActiveIcon from "../../Components/UI-Kit/Icons/iconComponents/HistoryActiveIcon";
import UserIcon from "../../Components/UI-Kit/Icons/iconComponents/UserIcon";
import Header from "../../Components/Layouts/Header";
import ProductDetails from "../../Screens/ProductDetails/ProductDetails.screen";

export const notAuthenticatedRoutes = [
  {
    routeName: SCREEN_NAMES.login,
    component: LoginScreen,
  },
];

export const authenticatedStackNavigationRoutes = [
  {
    label: SCREEN_NAMES.productDetails,
    headerShown: true,
    header: () => <Header variant="default" headerHeading='Product Details' />,
    routeName: SCREEN_NAMES.productDetails,
    component: ProductDetails
  },
]

export const applicationTabRoutes = [
  {
    label: SCREEN_NAMES.home,
    tabLabel: 'Home',
    routeName: SCREEN_NAMES.home,
    component: HomeScreen,
    activeIcon: HomeActiveIcon,
    inActiveIcon: HomeIcon,
    headerShown: true,
    header: () => <Header variant='home' />
  },
  {
    label: SCREEN_NAMES.cart,
    tabLabel: 'Cart',
    routeName: SCREEN_NAMES.cart,
    component: CartScreen,
    activeIcon: CartActiveIcon,
    inActiveIcon: CartIcon,
    headerShown: true,
    header: () => <Header variant='default' headerHeading='My Cart' />
  },
  {
    label: SCREEN_NAMES.orderHistory,
    tabLabel: 'Past Orders',
    routeName: SCREEN_NAMES.orderHistory,
    component: OrderHistoryScreen,
    activeIcon: HistoryActiveIcon,
    inActiveIcon: HistoryIcon,
    headerShown: true,
    header: () => <Header variant='default' headerHeading='Past Orders' />
  }
]

export const drawerRoutes = [
  {
    label: SCREEN_NAMES.profile,
    routeName: SCREEN_NAMES.profile,
    component: ProfileScreen,
    drawerLabel: 'Profile',
    optionIcon: UserIcon,
    headerShown: true,
    headerHeading: 'Profile',
    header: () => <Header variant='default' headerHeading='Profile' />
  }
]