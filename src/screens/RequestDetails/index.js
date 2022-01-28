import { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useUser } from "../../hooks/useUser";
import { getRequestData } from "../../services/getRequestData";
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
  const [request, setRequest] = useState(null);
  useEffect(() => {
    getRequestData({ token, id: route.params.id })
      .then((res) => {
        setRequest(res.data[0]);
      })
      .catch((err) => console.error(err));
  }, []);
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
            uri: request?.logo,
          }}
        />
        <InputLayout label={request?.codigo}></InputLayout>
        <Text style={styles.title}>{request?.titulo}</Text>
        <InputLayout label={request?.fecha_envio}></InputLayout>
        <View style={styles.divisor}></View>

        <View style={{ flexDirection: "row", width: "100%" }}>
          <View style={{ width: "50%", marginRight: 5 }}>
            <InputLayout label="Tipo de coordinador">
              <Text style={styles.containerInput}>
                {request?.tipo_coordinador}
              </Text>
            </InputLayout>
          </View>
          <View style={{ width: "50%", paddingRight: 5 }}>
            <InputLayout label="Nombre de coordinador">
              <Text style={styles.containerInput}>
                {request?.nombre_coordinador}
              </Text>
            </InputLayout>
          </View>
        </View>

        <View style={{ flexDirection: "row", width: "100%" }}>
          <View style={{ width: "50%", marginRight: 5 }}>
            <InputLayout label="Fecha inicio">
              <Text style={styles.containerInput}>{request?.fecha_inicio}</Text>
            </InputLayout>
          </View>
          <View style={{ width: "50%", paddingRight: 5 }}>
            <InputLayout label="Fecha fin">
              <Text style={styles.containerInput}>{request?.fecha_fin}</Text>
            </InputLayout>
          </View>
        </View>
        <View style={{ flexDirection: "row", width: "100%" }}>
          <View style={{ width: "50%", marginRight: 5 }}>
            <InputLayout label="Hora inicio">
              <Text style={styles.containerInput}>{request?.hora_inicio}</Text>
            </InputLayout>
          </View>
          <View style={{ width: "50%", paddingRight: 5 }}>
            <InputLayout label="Duracion">
              <Text style={styles.containerInput}>
                {request?.duracion} horas
              </Text>
            </InputLayout>
          </View>
        </View>

        <InputLayout label="Descripcion">
          <Text style={styles.containerInput}>{request?.descripcion}</Text>
        </InputLayout>

        <View style={{ flexDirection: "row", width: "100%" }}>
          <View style={{ width: "50%", marginRight: 5 }}>
            <InputLayout label="Tipo de inscripcion">
              <Text style={styles.containerInput}>
                {request?.tipo_inscripcion}
              </Text>
            </InputLayout>
          </View>
          <View style={{ width: "50%", paddingRight: 5 }}>
            <InputLayout label="Tipo de certificado">
              <Text style={styles.containerInput}>
                {request?.tipo_certificado}
              </Text>
            </InputLayout>
          </View>
        </View>

        <View style={{ flexDirection: "row", width: "100%" }}>
          <View style={{ width: "50%", marginRight: 5 }}>
            <InputLayout label="Ambiente">
              <Text style={styles.containerInput}>
                {request?.tipo_ambiente}
              </Text>
            </InputLayout>
          </View>
          <View style={{ width: "50%", paddingRight: 5 }}>
            <InputLayout label="Número de participantes">
              <Text style={styles.containerInput}>
                {request?.participantes}
              </Text>
            </InputLayout>
          </View>
        </View>

        <InputLayout label="Observaciones">
          <Text style={styles.containerInput}>
            {request?.observaciones || ""}
          </Text>
        </InputLayout>
        {/* <InputLayout label="Estado de solicitud"> */}
        {/* <Text style={styles.containerInput}> */}
        {/* {request?.estado === 1 && "Cancelado"} */}
        {/* {request?.estado === 2 && "Aprobado"} */}
        {/* {request?.estado == 3 && <Text>Pendiente</Text>} */}
        {/* {request?.estado === 4 && "Completo"} */}
        {/* </Text> */}
        {/* </InputLayout> */}
      </ScrollView>
    </View>
  );
};

export default index;
