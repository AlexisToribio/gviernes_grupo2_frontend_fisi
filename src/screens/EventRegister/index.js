import { useState, useEffect, useRef } from "react";
import { View, Text, Button, Picker, ScrollView } from "react-native";
import { HomeInput, HomeLayout, InputPicker } from "../../components";
import { clientApi } from "../../lib/axios";
import styles from "./styles";

const InputLayout = ({ children, label }) => (
  <View style={{ width: "100%" }}>
    {label && (
      <Text
        style={{
          paddingBottom: 15,
          paddingTop: 15,
          marginLeft: 0,
          marginRight: "auto",
        }}
      >
        {label}
      </Text>
    )}
    {children}
  </View>
);
const index = () => {
  const [data, setData] = useState({
    titulo: "",
    tipo_coordinador: 0,
    nombre_coordinador: "",
    tipo_evento: "",
    fecha_inicio: "",
    fecha_fin: "",
    hora_inicio: "",
    duracion: 0,
    tipo_inscripcion: 0,
    precio_inscripcion: 0,
    descripcion: "",
    tipo_certificado: 0,
    precio_certificado: 0,
    tipo_ambiente: "",
    participantes: 0,
    logo: "",
  });
  useEffect(() => {
    clientApi
      .get("/home")
      .then((res) => console.log(res.data))
      .catch((err) => console.error(err.message));
  }, []);

  // const onChangeValue = (ev) =>
  //   setData({ ...data, [ev.target.name]: ev.target.value });

  const handleSend = () => {
    console.log(data);
  };
  return (
    <HomeLayout title="Registrar evento">
      <ScrollView>
        <View style={styles.container}>
          <HomeInput
            value={data.titulo}
            onChange={(text) => setData({ ...data, titulo: text })}
            label="Título del evento"
          />
          <InputLayout label="Organizador">
            <View style={styles.picker}>
              <Picker style={{ marginTop: -5 }}>
                <Picker.Item label="Java" value="java" />
                <Picker.Item label="C++" value="C++" />
              </Picker>
            </View>
          </InputLayout>
          <HomeInput
            value={data.nombre_coordinador}
            onChange={(text) => setData({ ...data, nombre_coordinador: text })}
          />
          <View style={{ flexDirection: "row", width: "100%" }}>
            <View style={{ width: "50%", marginRight: 5 }}>
              <InputLayout label="Fecha de inicio">
                <InputPicker
                  onChange={(text) => {
                    console.log(text);
                    setData({ ...data, fecha_inicio: text });
                  }}
                  icon="calendar"
                  type="datetime"
                />
              </InputLayout>
            </View>
            <View style={{ width: "50%", paddingRight: 5 }}>
              <InputLayout label="Fecha de fin">
                <InputPicker icon="calendar" type="datetime" />
              </InputLayout>
            </View>
          </View>
          <InputLayout label="Tipo de evento">
            <View style={styles.picker}>
              <Picker style={{ marginTop: -5 }}>
                <Picker.Item label="Java" value="java" />
                <Picker.Item label="C++" value="C++" />
              </Picker>
            </View>
          </InputLayout>
          <View style={{ flexDirection: "row", width: "100%" }}>
            <View style={{ width: "50%", marginRight: 5 }}>
              <InputLayout label="Hora de inicio">
                <InputPicker icon="time-slot" type="time" />
              </InputLayout>
            </View>
            <View style={{ width: "50%", paddingRight: 5 }}>
              <InputLayout>
                <HomeInput label="Duración" />
              </InputLayout>
            </View>
          </View>
          <View style={{ flexDirection: "row", width: "100%" }}>
            <View style={{ width: "50%", marginRight: 5 }}>
              <InputLayout label="Inscripción">
                <View style={styles.picker}>
                  <Picker style={{ marginTop: -5 }}>
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="C++" value="C++" />
                  </Picker>
                </View>
              </InputLayout>
            </View>
            <View style={{ width: "50%", paddingRight: 5 }}>
              <InputLayout>
                <HomeInput label="Costo de inscripción" />
              </InputLayout>
            </View>
          </View>
          <View style={{ flexDirection: "row", width: "100%" }}>
            <View style={{ width: "50%", marginRight: 5 }}>
              <InputLayout label="Certificado">
                <View style={styles.picker}>
                  <Picker style={{ marginTop: -5 }}>
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="C++" value="C++" />
                  </Picker>
                </View>
              </InputLayout>
            </View>
            <View style={{ width: "50%", paddingRight: 5 }}>
              <InputLayout>
                <HomeInput label="Precio" />
              </InputLayout>
            </View>
          </View>
          <InputLayout label="Ambiente">
            <View style={styles.picker}>
              <Picker style={{ marginTop: -5 }}>
                <Picker.Item label="Java" value="java" />
                <Picker.Item label="C++" value="C++" />
              </Picker>
            </View>
          </InputLayout>
          <HomeInput label="Imagen del evento" />
          <HomeInput label="Descripción" />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
              marginTop: 10,
              marginBottom: 10,
            }}
          >
            <Button color="#F90909" title="Cancelar" />
            <Button color="#09A305" title="Enviar" onPress={handleSend} />
          </View>
        </View>
      </ScrollView>
    </HomeLayout>
  );
};

export default index;
