import { BackArrow } from '@/assets/icons/BackArrow';
import { BalanceIcon } from '@/assets/icons/BalanceIcon';
import { MenuIcon } from '@/assets/icons/MenuIcon';
import { RecordIcon } from '@/assets/icons/RecordIcon';
import { ReportsIcon } from '@/assets/icons/ReportsIcon';
import { TransactionsIcon } from '@/assets/icons/TransactionsIcon';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';
import { useSession } from '@/hooks/useSession';
import { colors } from '@/styles/colors';
import { Redirect, Tabs, router } from 'expo-router';
import React from 'react';
import { TouchableOpacity } from 'react-native';

export default function TabLayout() {
  const { auth } = useSession();

  if (!auth.authenticated) {
    // On web, static rendering will stop here as the user is not authenticated
    // in the headless Node process that the pages are rendered in.
    return <Redirect href="/sign-in" />;
  }

  function handleBackNavigation() {
    router.back()
  }

  return (
    <Tabs
      screenOptions={{
        tabBarStyle: { height: 92 },
        tabBarActiveTintColor: colors['blue-voice'][200],
        tabBarInactiveTintColor: colors['black-voice'],
        tabBarItemStyle: { marginBottom: 38 },
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
        headerStyle: { height: 103, backgroundColor: colors['blue-voice'][600]},
        headerLeft: () => (
          <TouchableOpacity onPress={handleBackNavigation}>
            <BackArrow />
          </TouchableOpacity>
        ),
        headerTitleStyle: { color: "#fff", textAlign: 'center' },
      }}>
      <Tabs.Screen
        name="transactions"
        options={{
          title: 'Transações',
          tabBarIcon: ({color}) => <TransactionsIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name="reports"
        options={{
          title: 'Relatórios',
          tabBarIcon: ({ color }) => <ReportsIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          tabBarLabelStyle: { opacity: 0 },
          tabBarIcon: () => <RecordIcon />,
        }}
      />
      <Tabs.Screen
        name="balance"
        options={{
          title: 'Balanço',
          tabBarIcon: ({ color }) => <BalanceIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name="menu"
        options={{
          title: 'Menu',
          tabBarIcon: ({ color }) => <MenuIcon color={color} />,
        }}
      />
    </Tabs>
  );
}
