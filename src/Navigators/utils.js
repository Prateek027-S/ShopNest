import {
  CommonActions,
  createNavigationContainerRef
} from '@react-navigation/native'

export const navigationRef = createNavigationContainerRef()

export const navigate = (name, params) => {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params)
  }
}

export const navigateAndReset = (routes = [], index = 0) => {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(
      CommonActions.reset({
        index,
        routes
      })
    )
  }
}

export const navigateAndSimpleReset = (name, index = 0) => {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(
      CommonActions.reset({
        index,
        routes: [{ name }]
      })
    )
  }
}

export const goBackNavigation = () => {
  if (navigationRef.isReady()) {
    navigationRef.goBack()
  }
}
