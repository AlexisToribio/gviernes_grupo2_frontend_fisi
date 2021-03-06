import { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  Button,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import {
  HomeInput,
  HomeLayout,
  ImagePicker,
  InputPicker,
} from "../../components";
import styles from "./styles";
import { Picker } from "@react-native-picker/picker";
import { sendEventRequest } from "../../services/sendEventRequest";
import { useUser } from "../../hooks/useUser";
import { upload } from "../../services/uploadImage";

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
const index = ({ navigation }) => {
  const [{ token }, _] = useUser();
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
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
  const sendData = ({ url }) => {
    const dataToSend = { ...data, logo: url };
    sendEventRequest({
      data: dataToSend,
      token,
    })
      .then((data) => {
        if (data === "Event Registered and Request Created") {
          console.log(data);
          alert("Registro de solicitud exitoso");
          navigation.navigate("MyRequest");
        } else {
          alert("Error de servidor");
        }
      })
      .catch((err) => console.error(err.message));
  };
  const handleSend = () => {
    console.log(data);
    if (
      !data.titulo ||
      !data.nombre_coordinador ||
      !data.tipo_evento ||
      !data.tipo_ambiente ||
      !data.tipo_certificado ||
      !data.descripcion ||
      !data.precio_certificado ||
      !data.hora_inicio ||
      !data.fecha_fin ||
      !data.fecha_inicio
    )
      return alert("Complete todos los campos");
    if (!image) return alert("Adjunte un logo");
    upload({ image, callback: sendData });
  };

  const handleImageEvent = (result) => {
    setImage(result.uri);
  };
  const removeImage = () => setImage(null);
  return (
    <HomeLayout title="Registrar evento">
      <ScrollView>
        <View style={styles.container}>
          <HomeInput
            value={data.titulo}
            onChange={(text) => setData({ ...data, titulo: text })}
            label="T??tulo del evento"
          />
          <InputLayout label="Organizador">
            <View style={styles.picker}>
              <Picker
                style={{ marginTop: -5 }}
                onValueChange={(value, i) =>
                  setData({ ...data, tipo_coordinador: value })
                }
                selectedValue={data.tipo_coordinador}
              >
                <Picker.Item label="--seleccione--" value={0} />
                <Picker.Item label="Individual" value={1} />
                <Picker.Item label="Grupo" value={2} />
              </Picker>
            </View>
          </InputLayout>
          <HomeInput
            placeholder="Grupo Pana"
            value={data.nombre_coordinador}
            onChange={(text) => setData({ ...data, nombre_coordinador: text })}
          />
          <View style={{ flexDirection: "row", width: "100%" }}>
            <View style={{ width: "50%", marginRight: 5 }}>
              <InputLayout label="Fecha de inicio">
                <InputPicker
                  onChange={(text) => {
                    setData({ ...data, fecha_inicio: text });
                  }}
                  icon="calendar"
                />
              </InputLayout>
            </View>
            <View style={{ width: "50%", paddingRight: 5 }}>
              <InputLayout label="Fecha de fin">
                <InputPicker
                  onChange={(text) => {
                    setData({ ...data, fecha_fin: text });
                  }}
                  icon="calendar"
                />
              </InputLayout>
            </View>
          </View>
          <InputLayout label="Tipo de evento">
            <View style={styles.picker}>
              <Picker
                style={{ marginTop: -5 }}
                onValueChange={(value, i) =>
                  setData({ ...data, tipo_evento: value })
                }
                selectedValue={data.tipo_evento}
              >
                <Picker.Item label="--seleccione--" value="0" />
                <Picker.Item label="Taller" value="E001" />
                <Picker.Item label="Curso" value="E002" />
                <Picker.Item label="Conferencia" value="E003" />
                <Picker.Item label="Congreso" value="E004" />
                <Picker.Item label="Seminario" value="E005" />
              </Picker>
            </View>
          </InputLayout>
          <View style={{ flexDirection: "row", width: "100%" }}>
            <View style={{ width: "50%", marginRight: 5 }}>
              <InputLayout label="Hora de inicio">
                <InputPicker
                  icon="time-slot"
                  type="time"
                  placeholder="12:00 am"
                  formater="h:MM TT"
                  formaterValue="h:MM"
                  onChange={(text) => {
                    setData({ ...data, hora_inicio: text });
                  }}
                />
              </InputLayout>
            </View>
            <View style={{ width: "50%", paddingRight: 5 }}>
              <InputLayout>
                <HomeInput
                  label="Duraci??n"
                  placeholder="2"
                  keyboardType="numeric"
                  onChange={(text) =>
                    setData({ ...data, duracion: Number(text) })
                  }
                />
              </InputLayout>
            </View>
          </View>
          <View style={{ flexDirection: "row", width: "100%" }}>
            <View style={{ width: "50%", marginRight: 5 }}>
              <InputLayout label="Inscripci??n">
                <View style={styles.picker}>
                  <Picker
                    style={{ marginTop: -5 }}
                    onValueChange={(value, i) =>
                      setData({ ...data, tipo_inscripcion: value })
                    }
                    selectedValue={data.tipo_inscripcion}
                  >
                    <Picker.Item label="--seleccione--" value={0} />
                    <Picker.Item label="Gratuito" value={1} />
                    <Picker.Item label="Pago" value={2} />
                  </Picker>
                </View>
              </InputLayout>
            </View>
            <View style={{ width: "50%", paddingRight: 5 }}>
              <InputLayout>
                <HomeInput
                  label="Costo de inscripci??n"
                  keyboardType="numeric"
                  placeholder="100"
                  onChange={(text) =>
                    setData({ ...data, precio_inscripcion: Number(text) })
                  }
                />
              </InputLayout>
            </View>
          </View>
          <View style={{ flexDirection: "row", width: "100%" }}>
            <View style={{ width: "50%", marginRight: 5 }}>
              <InputLayout label="Tipo Certificado">
                <View style={styles.picker}>
                  <Picker
                    style={{ marginTop: -5 }}
                    onValueChange={(value, i) =>
                      setData({ ...data, tipo_certificado: value })
                    }
                    selectedValue={data.tipo_certificado}
                  >
                    <Picker.Item label="--seleccione--" value={0} />
                    <Picker.Item label="Gratuito" value={1} />
                    <Picker.Item label="Pago" value={2} />
                    <Picker.Item label="No aplica" value={3} />
                  </Picker>
                </View>
              </InputLayout>
            </View>
            <View style={{ width: "50%", paddingRight: 5 }}>
              <InputLayout>
                <HomeInput
                  keyboardType="numeric"
                  label="Costo Certificado"
                  placeholder="100"
                  onChange={(text) =>
                    setData({ ...data, precio_certificado: Number(text) })
                  }
                />
              </InputLayout>
            </View>
          </View>
          <InputLayout label="Ambiente">
            <View style={styles.picker}>
              <Picker
                style={{ marginTop: -5 }}
                onValueChange={(value, i) =>
                  setData({ ...data, tipo_ambiente: value })
                }
                selectedValue={data.tipo_ambiente}
              >
                <Picker.Item label="--seleccione--" value="0" />
                <Picker.Item label="Auditoria" value="A001" />
                <Picker.Item label="Aula Magna" value="A002" />
                <Picker.Item label="Aula" value="A003" />
                <Picker.Item label="Laboratorio" value="A004" />
                <Picker.Item label="Exteriores" value="A005" />
              </Picker>
            </View>
          </InputLayout>
          <InputLayout label="Imagen del evento">
            {!image ? (
              <ImagePicker handleImage={handleImageEvent} />
            ) : (
              <>
                <Image source={{ uri: image }} style={styles.image} />
                <TouchableOpacity onPress={removeImage}>
                  <Text style={styles.remove}>Eliminar image</Text>
                </TouchableOpacity>
              </>
            )}
          </InputLayout>
          <HomeInput
            label="Cantidad m??xima de asistentes"
            keyboardType="numeric"
            onChange={(text) =>
              setData({ ...data, participantes: Number(text) })
            }
          />
          <HomeInput
            label="Descripci??n"
            multiline={true}
            onChange={(text) => setData({ ...data, descripcion: text })}
          />
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
            <Button color="#5AD65A" title="Enviar" onPress={handleSend} />
          </View>
        </View>
      </ScrollView>
    </HomeLayout>
  );
};

export default index;
