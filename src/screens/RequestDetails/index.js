import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { HomeInput, HomeLayout } from "../../components";
import styles from "./styles";

const InputLayout = ({ children, label }) => (
  <View style={{ width: "100%" }}>
    {label && (
      <Text
        style={{
          fontSize: 16,
          marginTop: 10,
          marginLeft: 30,
          fontWeight: "bold",
        }}
      >
        {label}
      </Text>
    )}
    {children}
  </View>
);

const index = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={styles.back}
            source={require("../../../assets/back.png")}
          />
        </TouchableOpacity>
        <Image
          style={styles.logo}
          source={require("../../../assets/Logo-min.png")}
        />
      </View>
      <View style={styles.divisor}></View>
      <ScrollView>
        <Image
          style={styles.portada}
          source={{
            uri: "https://ipmark.com/wp-content/uploads/eventos-de-marketing-2021.jpg",
          }}
        />
        <InputLayout label="N° de expediente"></InputLayout>
        <Text style={styles.title}>Nombre del Evento</Text>
        <InputLayout label="Fecha de registro"></InputLayout>
        <View style={styles.divisor}></View>

        <View style={{ flexDirection: "row", width: "100%" }}>
          <View style={{ width: "50%", marginRight: 5 }}>
            <InputLayout label="Tipo de coordinador">
              <Text style={styles.containerInput}>Individual</Text>
            </InputLayout>
          </View>
          <View style={{ width: "50%", paddingRight: 5 }}>
            <InputLayout label="Nombre de coordinador">
              <Text style={styles.containerInput}>Fernando Sierra</Text>
            </InputLayout>
          </View>
        </View>

        <View style={{ flexDirection: "row", width: "100%" }}>
          <View style={{ width: "50%", marginRight: 5 }}>
            <InputLayout label="Fecha inicio">
              <Text style={styles.containerInput}>22 de abril</Text>
            </InputLayout>
          </View>
          <View style={{ width: "50%", paddingRight: 5 }}>
            <InputLayout label="Fecha fin">
              <Text style={styles.containerInput}>24 de abril</Text>
            </InputLayout>
          </View>
        </View>
        <View style={{ flexDirection: "row", width: "100%" }}>
          <View style={{ width: "50%", marginRight: 5 }}>
            <InputLayout label="Hora inicio">
              <Text style={styles.containerInput}>23:56pm</Text>
            </InputLayout>
          </View>
          <View style={{ width: "50%", paddingRight: 5 }}>
            <InputLayout label="Duracion">
              <Text style={styles.containerInput}>2 horas</Text>
            </InputLayout>
          </View>
        </View>

        <InputLayout label="Descripcion">
          <Text style={styles.containerInput}>
            Lorem Ipsum ha sido el texto de relleno estándar de las industrias
            desde el año 1500, cuando un impresor ...
          </Text>
        </InputLayout>

        <View style={{ flexDirection: "row", width: "100%" }}>
          <View style={{ width: "50%", marginRight: 5 }}>
            <InputLayout label="Tipo de inscripcion">
              <Text style={styles.containerInput}>Pago</Text>
            </InputLayout>
          </View>
          <View style={{ width: "50%", paddingRight: 5 }}>
            <InputLayout label="Tipo de certificado">
              <Text style={styles.containerInput}>Pago</Text>
            </InputLayout>
          </View>
        </View>

        <View style={{ flexDirection: "row", width: "100%" }}>
          <View style={{ width: "50%", marginRight: 5 }}>
            <InputLayout label="Ambiente">
              <Text style={styles.containerInput}>Auditorio interno</Text>
            </InputLayout>
          </View>
          <View style={{ width: "50%", paddingRight: 5 }}>
            <InputLayout label="Número de participantes">
              <Text style={styles.containerInput}>100</Text>
            </InputLayout>
          </View>
        </View>

        <InputLayout label="Observaciones">
          <Text style={styles.containerInput}>
            Lorem Ipsum ha sido el texto de relleno estándar de las industrias
            desde el año 1500, cuando un impresor ...
          </Text>
        </InputLayout>
      </ScrollView>
    </View>
  );
};

export default index;
