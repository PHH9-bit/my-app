import { FontAwesome } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#E4002B',
        tabBarInactiveTintColor: '#666',
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          borderTopWidth: 1,
          borderTopColor: '#EEE',
          height: 60,
          paddingBottom: 8,
        },
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'خانه',
          tabBarIcon: ({ color }) => <FontAwesome name="home" size={26} color={color} />,
        }}
      />
      <Tabs.Screen
        name="login"  // بعداً می‌تونی به request.tsx تغییر نام بدی
        options={{
          title: 'درخواست بیمه',
          tabBarIcon: ({ color }) => <FontAwesome name="file-text-o" size={26} color={color} />,
        }}
      />
      <Tabs.Screen
        name="contact"
        options={{
          title: 'تماس',
          tabBarIcon: ({ color }) => <FontAwesome name="phone" size={26} color={color} />,
        }}
      />
    </Tabs>
  );
}