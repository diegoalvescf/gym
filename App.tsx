import { LoadingComponent } from '@components/loading';
import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from '@expo-google-fonts/roboto';
import { Center, NativeBaseProvider } from 'native-base';
import { StatusBar, Text } from 'react-native';
import { theme } from './src/common/theme';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });
  return (
    <NativeBaseProvider theme={theme}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={'transparent'}
        translucent
      />
      {fontsLoaded ? (
        <Center flex={1}>
          <Text>Open up App.tsx to start working on your app!</Text>
        </Center>
      ) : (
        <LoadingComponent />
      )}
    </NativeBaseProvider>
  );
}
