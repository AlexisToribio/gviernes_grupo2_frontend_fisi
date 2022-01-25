import { Picker } from "@react-native-picker/picker";
import { useEffect, useState } from "react";
import { View, Text, Image, TextInput, ScrollView, Button } from "react-native";
import { useUser } from "../../hooks/useUser";
import { getUserData } from "../../services/getUserData";
import { updateUserData } from "../../services/updateUserData";
import styles from "./styles";

const InputLayout = ({ children, label }) => (
  <View style={{ width: "100%" }}>
    {label && (
      <Text
        style={{
          fontSize: 16,
          textAlign: "center",
        }}
      >
        {label}
      </Text>
    )}
    {children}
  </View>
);
const Cuadro = ({
  label,
  value,
  onChange,
  type = "default",
  editable = true,
}) => {
  return (
    <View style={styles.containerInput}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        editable={editable}
        keyboardType={type}
        value={value}
        onChangeText={onChange}
        style={styles.input}
      />
    </View>
  );
};

const index = ({ navigation }) => {
  const [userData, setUserData] = useState(null);
  const [{ token }, _] = useUser();
  useEffect(() => {
    getUserData({ token })
      .then((res) => {
        setUserData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  const onPress = () => {
    const data = { ...userData, foto: "" };
    updateUserData({ id: userData.id, data, token })
      .then((res) => {
        console.log(res);
        navigation.navigate("UserDetails");
      })
      .catch((err) => console.log(err));
    console.log();
  };
  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>
        <Image
          style={styles.logo}
          source={require("../../../assets/Logo-min.png")}
        />
      </View>
      <View style={styles.divisor}></View>
      <ScrollView>
        <Text style={styles.title}>Detalles de Usuario</Text>
        <View style={styles.containerUser}>
          <Image
            style={styles.logo_usuario}
            source={require("../../../assets/usuario.png")}
          />
        </View>

        <InputLayout label="Nombres completos">
          <Cuadro
            value={userData?.nombres || ""}
            onChange={(text) => setUserData({ ...userData, nombres: text })}
          />
        </InputLayout>

        <InputLayout label="Apellidos completos">
          <Cuadro
            value={userData?.apellidos || ""}
            onChange={(text) => setUserData({ ...userData, apellidos: text })}
          />
        </InputLayout>

        <InputLayout label="Correo">
          <Cuadro
            value={userData?.email}
            editable={false}
            onChange={(text) => setUserData({ ...userData, email: text })}
          />
        </InputLayout>

        <InputLayout label="Edad">
          <Cuadro
            type="numeric"
            value={userData?.edad || 0}
            onChange={(text) =>
              setUserData({ ...userData, edad: Number(text) })
            }
          />
        </InputLayout>
        <InputLayout label="Celular">
          <Cuadro
            type="numeric"
            value={userData?.edad || 0}
            onChange={(text) => setUserData({ ...userData, celular: text })}
          />
        </InputLayout>

        <InputLayout label="Sexo">
          <View style={styles.containerInput}>
            <Picker
              onValueChange={(value, i) =>
                setUserData({ ...userData, sexo: value })
              }
              selectedValue={userData?.sexo}
            >
              <Picker.Item label="Masculino" value="Masculino" />
              <Picker.Item label="Femenino" value="Femenino" />
            </Picker>
          </View>
        </InputLayout>

        <InputLayout label="Ocupación">
          <Cuadro
            value={userData?.ocupacion || ""}
            onChange={(text) => setUserData({ ...userData, ocupacion: text })}
          />
        </InputLayout>
        <View
          style={{
            marginVertical: 20,
            marginHorizontal: 100,
          }}
        >
          <Button color="#5AD65A" title="Actualizar Datos" onPress={onPress} />
        </View>
      </ScrollView>
    </View>
  );
};

export default index;
