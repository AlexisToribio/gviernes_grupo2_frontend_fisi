import {
  Image,
  Text,
  ImageBackground,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Input, Title, Button, AuthLayout } from "../../components";
import styles from "./styles";

const index = ({ navigation }) => {
  const onPress = () => navigation.navigate("Register");
  return (
    <AuthLayout
      title="Inicio de sesión"
      redirection="Register"
      redirectionTitle="¿No tienes una cuenta?"
      textButton="Regístrate"
      navigation={navigation}
    >
      {/* MODIFICAR ESTO */}
    </AuthLayout>
  );
};

export default index;
