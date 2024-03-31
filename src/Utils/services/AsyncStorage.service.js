import AsyncStorage from '@react-native-async-storage/async-storage'
import config from '../../Config/app.config'

export const saveAccessToken = async () => {
  try {
    await AsyncStorage.setItem('accessToken', config.ACCESS_TOKEN);
  } catch(error) {
    console.error("Could not save access token in async storage: ", error);
  }
}

export const removeAccessToken = async () => {
  try {
    await AsyncStorage.removeItem('accessToken');
  } catch {}
}

export const getAccessToken = async () => {
  try {
    return await AsyncStorage.getItem('accessToken');
  } catch (error) {
    return null;
  }
}

export const clearAsyncStorage = async () => {
  try {
    await AsyncStorage.clear()
  } catch {}
}
