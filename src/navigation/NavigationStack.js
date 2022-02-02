import { createStackNavigator } from "@react-navigation/stack";
import {
  Login,
  Register,
  Home,
  EventDetails,
  RequestDetails,
  Inscription,
} from "../screens";

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
      <Stack.Screen
        options={{ headerShown: false }}
        name="Inscription"
        component={Inscription}
      />
    </Stack.Navigator>
  );
}
