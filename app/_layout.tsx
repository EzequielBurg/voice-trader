import { SessionProvider } from '@/hooks/useSession';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { StatusBar } from 'react-native';
import "../styles/global.css";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Inter: require('../assets/fonts/Inter_24pt-Regular.ttf'),
    InterSemibold: require('../assets/fonts/Inter_24pt-SemiBold.ttf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  return (
    <SessionProvider>
      <StatusBar backgroundColor='transparent' barStyle='dark-content' translucent />
      <Stack>
        <Stack.Screen name="(auth)/(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="(public)/sign-in"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='(auth)/recording-mode-modal'
          options={{ presentation: 'transparentModal', headerShown: false, animation: 'fade', animationTypeForReplace: 'push' }}
        />
        <Stack.Screen
          name='(auth)/guided-recording-modal'
          options={{ presentation: 'containedModal', headerShown: false, animation: 'fade', animationTypeForReplace: 'push' }}
        />
        <Stack.Screen
          name='(auth)/free-recording-modal'
          options={{ presentation: 'containedModal', headerShown: false, animation: 'fade', animationTypeForReplace: 'push' }}
        />
        <Stack.Screen
          name='(auth)/typed-recording-modal'
          options={{ presentation: 'containedModal', headerShown: false, animation: 'fade', animationTypeForReplace: 'push' }}
        />
      </Stack>
    </SessionProvider>
  );
}
  // https://medium.com/@fredrik.burmester/bottom-tab-navigation-in-expo-router-3-sdk-50-with-authentication-b8d4529b2e0f#id_token=eyJhbGciOiJSUzI1NiIsImtpZCI6IjY3MTk2NzgzNTFhNWZhZWRjMmU3MDI3NGJiZWE2MmRhMmE4YzRhMTIiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiIyMTYyOTYwMzU4MzQtazFrNnFlMDYwczJ0cDJhMmphbTRsamRjbXMwMHN0dGcuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiIyMTYyOTYwMzU4MzQtazFrNnFlMDYwczJ0cDJhMmphbTRsamRjbXMwMHN0dGcuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMTY1MTcxMzY3MTI4MDI1NzM1MTAiLCJlbWFpbCI6ImV6ZXF1aWVsZ29uY2FsdmVzNzY1OTVAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsIm5iZiI6MTcxNzAxNTkzNywibmFtZSI6IkV6ZXF1aWVsIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FDZzhvY0pXcENDUi05SlZPUzdLb2RhcmxpWmNkT3MyVzVtYmdHc0ptYUJobF9TRnppaXhYUVE9czk2LWMiLCJnaXZlbl9uYW1lIjoiRXplcXVpZWwiLCJpYXQiOjE3MTcwMTYyMzcsImV4cCI6MTcxNzAxOTgzNywianRpIjoiNzIxYmIxMTZmODhiZTAwNDg3ZWRlZmRkMTVlYjE3ZmY0ODhlYjgxNSJ9.XTBJfGCQ2g-Qalch5UJFnODF0GEH9jUPX5abW_TcB94y-NBzJGyPwhuLbKwpBfJpvJXCIuXpH_Ul-ycaA0HFKynaoIJIhjoKSKmkFS08tC4kJ_yYbIzBum5_cw3gH5kqYtDJqoBdYGlAp4uCz23XDrDHx8Hltk-TFCjBrvJyPUL5hNySjnvCnViA1EyUZZRCAYbHALdK6w47QD5r9aBDl0WmnrQUVw9gZakw_DrZTESFnFJQrY75AKL01R4UGfvujWBa1vVjs_tnE0a7j79NrWGve4nj2RctGDVLYppu1SOam9DEwsxxTM8hqraEWDUXFoY4H4G1piu0lUUqiDfAiw
  // https://github.com/fredrikburmester/expo-router-3-tab-example-with-auth/blob/main/app/_layout.tsx
