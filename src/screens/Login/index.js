import { useState } from "react";
import { Text, View } from "react-native";
import { Input, Button, AuthLayout } from "../../components";
import { useUser } from "../../hooks/useUser";
import { login } from "../../services/login";
import styles from "./styles";

const index = ({ navigation }) => {
  const [_, dispatch] = useUser();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const onPress = () => {
    login({ data })
      .then((res) => {
        if (res.token) {
          dispatch({ type: "UPDATE_TOKEN", payload: res.token });
          navigation.navigate("Home");
        } else {
          alert("Datos inválidos");
        }
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <AuthLayout
      title="Inicio de sesión"
      redirection="Register"
      redirectionTitle="¿No tienes una cuenta?"
      textButton="Regístrate"
      navigation={navigation}
    >
      <View>
        <Text style={styles.label}>Correo</Text>
        <Input
          icon="envelope"
          value={data.email}
          onChange={(text) => setData({ ...data, email: text })}
        />
      </View>
      <View style={styles.div}>
        <Text style={styles.label}>Contraseña</Text>
        <Input
          icon="lock"
          type="password"
          value={data.apellidos}
          onChange={(text) => setData({ ...data, password: text })}
        />
      </View>
      <Button onPress={onPress}>Iniciar Sesión</Button>
    </AuthLayout>
  );
};

export default index;
