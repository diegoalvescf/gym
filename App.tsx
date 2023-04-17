import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from '@expo-google-fonts/roboto';
import { NativeBaseProvider } from 'native-base';
import { StatusBar } from 'react-native';
import { theme } from './src/common/theme';

import { LoadingComponent } from '@components/loading';
import { SignInScreen } from '@screens/sign-in';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });
  return (
    <NativeBaseProvider theme={theme}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={'transparent'}
        translucent
      />
      {fontsLoaded ? <SignInScreen /> : <LoadingComponent />}
    </NativeBaseProvider>
  );
}
