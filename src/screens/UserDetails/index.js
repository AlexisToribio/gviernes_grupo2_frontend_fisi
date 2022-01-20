import { View, Text,Image, TextInput,ScrollView } from "react-native";
import styles from "./styles";

const InputLayout = ({ children, label }) => (
  <View style={{ width: "100%" }}>
    {label && (
      <Text
        style={{
          fontSize: 16,
          textAlign: 'center',
        }}
      >
        {label}
      </Text>
    )}
    {children}
  </View>
  
);
const Cuadro = ({ label, value, onChange }) => {
  return (
    <View style={styles.containerInput}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        value={value}
        onChangeText={onChange}
        style={styles.input}
      />
    </View>
  );
};

const index = () => {
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
        <Cuadro/>
        </InputLayout>

        <InputLayout label="Apellidos completos">
        <Cuadro/>
        </InputLayout>

        <InputLayout label="Correo">
        <Cuadro/>
        </InputLayout>

        <InputLayout label="Edad">
        <Cuadro/>
        </InputLayout>

        <InputLayout label="Sexo">
        <Cuadro/>
        </InputLayout>

        <InputLayout label="Ocupación">
        <Cuadro/>
        </InputLayout>

      </ScrollView>
    </View>
  );
};

export default index;