import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
  Login,
  Register,
  UserDetails,
  Events,
  EventRegister,
  MyEvents,
  MyRequest,
} from '../screens';

const Tab = createBottomTabNavigator();

const screenTabs = [
  {
    name: 'UserDetails',
    component: UserDetails,
    optionsTitle: 'Perfil de Usuario',
    key: 1,
  },
  {
    name: 'Events',
    component: Events,
    optionsTitle: 'Eventos',
    key: 2,
  },
  {
    name: 'MyEvents',
    component: MyEvents,
    optionsTitle: 'Mis Eventos',
    key: 3,
  },
  {
    name: 'EventRegister',
    component: EventRegister,
    optionsTitle: 'Registrar Evento',
    key: 4,
  },
  {
    name: 'MyRequest',
    component: MyRequest,
    optionsTitle: 'Mis Solicitudes',
    key: 5,
  },
];

const NavigationTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'UserDetails') {
            iconName = 'user';
          } else if (route.name === 'Events') {
            iconName = 'calendar';
          } else if (route.name === 'MyEvents') {
            iconName = 'calendar-check-o';
          } else if (route.name === 'EventRegister') {
            iconName = 'file-text';
          } else if (route.name === 'MyRequest') {
            iconName = 'files-o';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
        tabBarStyle: {
          height: 70,
          paddingTop: 10,
          paddingBottom: 10,
          backgroundColor: '#11101D',
        },
      })}
    >
      {/* <Tab.Screen
        name="Login"
        component={Login}
        options={{ title: 'Iniciar Sesión' }}
      />
      <Tab.Screen
        name="Register"
        component={Register}
        options={{ title: 'Registrar Usuario' }}
      /> */}

      {screenTabs.map((screen) => {
        return (
          <Tab.Screen
            key={screen.key}
            name={screen.name}
            component={screen.component}
            options={{ title: screen.optionsTitle }}
          />
        );
      })}
    </Tab.Navigator>
  );
};

export default NavigationTab;
