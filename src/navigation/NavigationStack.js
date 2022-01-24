<<<<<<< HEAD
import { createStackNavigator } from '@react-navigation/stack';
=======
import { createStackNavigator } from "@react-navigation/stack";
>>>>>>> 123b7e2262be6def780a258e14178f06653e41a1
import {
  Login,
  Register,
  Home,
  EventDetails,
  RequestDetails,
<<<<<<< HEAD
} from '../screens';
=======
} from "../screens";
>>>>>>> 123b7e2262be6def780a258e14178f06653e41a1

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        options={{ headerShown: false }}
        name="Login"
        component={Login}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Register"
        component={Register}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Home"
        component={Home}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="EventDetails"
        component={EventDetails}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="RequestDetails"
        component={RequestDetails}
      />
    </Stack.Navigator>
  );
}
