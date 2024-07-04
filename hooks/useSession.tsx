import { router } from 'expo-router';
import React, { useState } from 'react';

const AuthContext = React.createContext<{
  auth: any;
  signIn: () => void;
  signOut: () => void;
}>({
  auth: null,
  signIn: () => null,
  signOut: () => null,
});

// This hook can be used to access the user info.
export function useSession() {
  const value = React.useContext(AuthContext);
  if (process.env.NODE_ENV !== 'production') {
    if (!value) {
      throw new Error('useSession must be wrapped in a <SessionProvider />');
    }
  }

  return value;
}

export function SessionProvider(props: React.PropsWithChildren) {
  const [auth, setAuth] = useState(
    {
      authenticated: false,
      username: ''
    }
  )

  return (
    <AuthContext.Provider
      value={{
        signIn: () => {
          // Perform sign-in logic here
          console.log('login');
          setAuth({authenticated: true, username: 'Brad'})
          router.push('/(auth)/(tabs)')
        },
        signOut: () => {
          console.log('logout');
          setAuth({authenticated: false, username: ''})
          router.replace('/sign-in')
        },
        auth,
      }}>
      {props.children}
    </AuthContext.Provider>
  );
}
