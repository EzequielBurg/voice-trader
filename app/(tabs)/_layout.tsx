import React from 'react';
import { Tabs } from 'expo-router';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';
import { colors } from '@/styles/colors';
import { TransactionsIcon } from '@/assets/icons/TransactionsIcon';
import { ReportsIcon } from '@/assets/icons/ReportsIcon';
import { BalanceIcon } from '@/assets/icons/BalanceIcon';
import { MenuIcon } from '@/assets/icons/MenuIcon';
import { RecordIcon } from '@/assets/icons/RecordIcon';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        // headerStatusBarHeight: 96,
        tabBarStyle: { height: 60 },
        tabBarActiveTintColor: colors['blue-voice'][200],
        tabBarInactiveTintColor: colors['black-voice'],
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
        tabBarItemStyle: { marginBottom: 6 }
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
          // tabBarStyle: {paddingBottom: 4},
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
