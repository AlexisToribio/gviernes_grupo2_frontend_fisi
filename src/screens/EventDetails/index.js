import { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { ButtonConfirm } from "../../components";
import { useUser } from "../../hooks/useUser";
import { getEventDetails } from "../../services/getEventDetails";
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

const index = ({ navigation, route }) => {
  const [{ token }, _] = useUser();
  const [event, setEvent] = useState([]);
  useEffect(() => {
    getEventDetails({ token, id: route.params.id })
      .then((res) => {
        setEvent(res.event[0]);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  const onPress = () =>
    navigation.navigate("Inscription", { title: event.titulo });
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
        <Text style={styles.title}>{event?.titulo}</Text>
        <View style={styles.divisor}></View>

        <InputLayout label="Descripcion">
          <Text style={styles.containerInput}>{event?.descripcion_evento}</Text>
        </InputLayout>

        <View style={{ flexDirection: "row", width: "100%" }}>
          <View style={{ width: "50%", marginRight: 5 }}>
            <InputLayout label="Fecha de Inicio">
              <Text style={styles.containerInput}>{event?.fecha_inicio}</Text>
            </InputLayout>
          </View>
          <View style={{ width: "50%", paddingRight: 5 }}>
            <InputLayout label="Horario">
              <Text style={styles.containerInput}>{event?.hora_inicio}</Text>
            </InputLayout>
          </View>
        </View>

        <InputLayout label="Certificado">
          <Text style={styles.containerInput}>{event?.tipo_certificado}</Text>
        </InputLayout>

        <View style={{ flexDirection: "row", width: "100%" }}>
          <View style={{ width: "50%" }}>
            <InputLayout label="Nombre coordinador"></InputLayout>
          </View>
          <View style={{ width: "50%" }}>
            <Text style={styles.containerInput}>
              {event?.nombre_coordinador}
            </Text>
          </View>
        </View>

        <View style={{ flexDirection: "row", width: "100%" }}>
          <View style={{ width: "50%" }}>
            <InputLayout label="Ambiente"></InputLayout>
          </View>
          <View style={{ width: "50%" }}>
            <Text style={styles.containerInput}>{event?.tipo_ambiente}</Text>
          </View>
        </View>
        <ButtonConfirm text="Inscribirme" onPress={onPress} />
      </ScrollView>
    </View>
  );
};

export default index;
