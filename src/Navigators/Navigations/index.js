import { NavigationContainer } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { navigationRef } from "../utils";


const AppRootNavigator = () => {
    const { accessToken } = useSelector((state) => state.userSlice);
    const isAuthenticated = (accessToken !== null);

    return (
        <NavigationContainer ref={navigationRef}>
            isAuthenticated ? 
        </NavigationContainer>
    )
    
    /*
    return (
    <NavigationContainer linking={linking} ref={navigationRef}>
      {
        isOffline
          ? (<NoInternetStackNavigation />)
          : (
              isUserAuthenticated ? <AuthenticatedStackNavigation /> : <NoAuthenticatedStackNavigation />
            )
      }
    </NavigationContainer>
  )
     */
}

export default AppRootNavigator;