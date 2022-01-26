import { useState } from "react";
import {
  Image,
  Text,
  ImageBackground,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Input, Title, Button, AuthLayout } from "../../components";
import { userRegister } from "../../services/userRegister";
import styles from "./styles";

const index = ({ navigation }) => {
  const [data, setData] = useState({
    nombres: "",
    apellidos: "",
    email: "",
    password: "",
  });
  const [confirmPassword, setConfirmPassword] = useState("");
  const onPress = () => {
    if (data.password !== confirmPassword)
      return alert("Contraseñas son diferentes");
    userRegister({ data })
      .then((res) => {
        if (res === "Register was successful") {
          setData({
            nombres: "",
            apellidos: "",
            email: "",
            password: "",
          });
          setConfirmPassword("");
          alert("Registro correcto");
          navigation.navigate("Login");
        } else alert("Datos inválidos");
      })
      .catch((err) => console.error(err.message));
  };
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
        <Input
          icon="user"
          value={data.nombres}
          onChange={(text) => setData({ ...data, nombres: text })}
        />
      </View>
      <View>
        <Text style={styles.label}>Apellidos</Text>
        <Input
          icon="user"
          value={data.apellidos}
          onChange={(text) => setData({ ...data, apellidos: text })}
        />
      </View>
      <View>
        <Text style={styles.label}>Correo</Text>
        <Input
          icon="envelope"
          value={data.email}
          onChange={(text) => setData({ ...data, email: text })}
        />
      </View>
      <View>
        <Text style={styles.label}>Contraseña</Text>
        <Input
          icon="lock"
          type="password"
          value={data.password}
          onChange={(text) => setData({ ...data, password: text })}
        />
      </View>
      <View>
        <Text style={styles.label}>Confirmar contraseña</Text>
        <Input
          icon="lock"
          type="password"
          value={confirmPassword}
          onChange={(text) => setConfirmPassword(text)}
        />
      </View>
      <Button onPress={onPress}>Registrate</Button>
    </AuthLayout>
  );
};

export default index;
