import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Register } from '../screen';
import { Events } from '../screen';

const Tab = createBottomTabNavigator();

const NavigationTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Events') {
            iconName = focused ? 'calendar' : 'calendar';
          } else if (route.name === 'Register') {
            iconName = focused ? 'user' : 'user';
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
        tabBarStyle: { backgroundColor: '#11101D' },
      })}
    >
      <Tab.Screen
        name="Register"
        component={Register}
        options={{ title: 'Registrar usuario' }}
      />
      <Tab.Screen
        name="Events"
        component={Events}
        options={{ title: 'Eventos' }}
      />
    </Tab.Navigator>
  );
};

export default NavigationTab;
