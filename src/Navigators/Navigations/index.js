import { NavigationContainer } from "@react-navigation/native";
import { navigationRef } from "../utils";
import AuthenticatedStackNavigation from "./Stack/AuthenticatedStackNavigation";
import NoAuthenticatedStackNavigation from "./Stack/NoAuthenticatedStackNavigation";
import { useSelector } from "react-redux";


const AppRootNavigator = () => {
    const { accessToken } = useSelector((state) => state.userSlice);
    const isAuthenticated = (accessToken !== null);
    console.log("accessToken from async storage: ", accessToken, " value of isAuthenticated: ", isAuthenticated);

    return (
      <NavigationContainer ref={navigationRef}>
        {isAuthenticated ? (
          <AuthenticatedStackNavigation />
        ) : (
          <NoAuthenticatedStackNavigation />
        )}
      </NavigationContainer>
    );
}

export default AppRootNavigator;