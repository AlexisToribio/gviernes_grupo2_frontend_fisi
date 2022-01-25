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
  const onPress = () => navigation.navigate("Home");
  return (
    <AuthLayout
      title="Regístrate"
      redirection="Login"
      redirectionTitle="¿Ya tienes una cuenta?"
      textButton="Inicia sesión"
      navigation={navigation}
    >
      <View>
        <Text style={styles.label}>Nombres</Text>
        <Input icon="user" />
      </View>
      <View>
        <Text style={styles.label}>Apellidos</Text>
        <Input icon="user" />
      </View>
      <View>
        <Text style={styles.label}>Correo</Text>
        <Input icon="envelope" />
      </View>
      <View>
        <Text style={styles.label}>Contraseña</Text>
        <Input icon="lock" type="password" />
      </View>
      <View>
        <Text style={styles.label}>Confirmar contraseña</Text>
        <Input icon="lock" type="password" />
      </View>
      <Button onPress={onPress}>Registrate</Button>
    </AuthLayout>
  );
};

export default index;
