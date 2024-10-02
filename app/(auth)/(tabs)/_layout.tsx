import { BackArrow } from '@/assets/icons/BackArrow';
import { BalanceIcon } from '@/assets/icons/BalanceIcon';
import { MenuIcon } from '@/assets/icons/MenuIcon';
import { RecordIcon } from '@/assets/icons/RecordIcon';
import { ReportsIcon } from '@/assets/icons/ReportsIcon';
import { TransactionsIcon } from '@/assets/icons/TransactionsIcon';
import { useClientOnlyValue } from '@/hooks/useClientOnlyValue';
import { useSession } from '@/hooks/useSession';
import { colors } from '@/styles/colors';
import { Redirect, Tabs, router } from 'expo-router';
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
        tabBarStyle: { height: 92, shadowColor: colors['black-voice'], elevation: 40, position: 'absolute', shadowOffset: { width: 0, height: 60 } },
        tabBarActiveTintColor: colors['blue-voice'][200],
        tabBarInactiveTintColor: colors['black-voice'],
        tabBarItemStyle: { marginBottom: 38 },
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
        headerStyle: { height: 105, backgroundColor: colors['blue-voice'][600] },
        headerLeft: () => (
          <TouchableOpacity className='ml-4' onPress={handleBackNavigation}>
            <BackArrow />
          </TouchableOpacity>
        ),
        headerTitleStyle: { color: "#fff", fontWeight: '800' },
        headerTitleAlign: 'center'
      }}>
      <Tabs.Screen
        name="transactions"
        options={{
          headerTitle: 'Minhas transações',
          title: 'Transações',
          tabBarIcon: ({color}) => <TransactionsIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name="reports"
        options={{
          headerTitle: 'Meus relatórios',
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
