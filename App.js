import { NavigationContainer } from "@react-navigation/native";
import NavigationStack from "./src/navigation/NavigationStack";
import "react-native-gesture-handler";
import { ContextProvider } from "./src/context/ContextProvider";
import { reducer } from "./src/context/reducer";
import { initialState } from "./src/context/initialState";
import { LogBox } from "react-native";
import { firebaseConfig } from "./firebase";
import firebase from "firebase";
LogBox.ignoreAllLogs();

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export default function App() {
  return (
    <ContextProvider reducer={reducer} initialState={initialState}>
      <NavigationContainer>
        <NavigationStack />
      </NavigationContainer>
    </ContextProvider>
  );
}
