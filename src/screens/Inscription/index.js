import React, { useEffect, useState } from "react";
import { View, Text, Button, TouchableOpacity, ScrollView } from "react-native";
import {
  HomeInput,
  HomeLayoutAlternative,
  ImagePicker,
} from "../../components";
import { Picker } from "@react-native-picker/picker";
import styles from "./styles";
import { upload } from "../../services/uploadImage";
import { inscription } from "../../services/inscription";
import { useUser } from "../../hooks/useUser";

const InputLayout = ({ children, label }) => (
  <View style={{ width: "100%" }}>
    {label && (
      <Text
        style={{
          paddingBottom: 10,
          paddingTop: 10,
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

const index = ({ navigation, route }) => {
  const [certificate, setCertificate] = useState(-1);
  const [image, setImage] = useState(null);
  const [{ token, user }, _] = useUser();
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    setUserData(user);
  }, []);
  const handleImageEvent = (result) => {
    setImage(result.uri);
  };
  const removeImage = () => setImage(null);
  const executeInscription = ({ url }) => {
    const data = { certificado: certificate, voucher: url };
    inscription({ token, idevent: route.params.id, data })
      .then((res) => {
        console.log(res);
        if (res.message === "User already registered")
          alert("Ya se encuentra registrado");
        else if (res.message === "User Data Imcomplete")
          alert(
            "Datos incompletos, dirigase al apartado de usuario y complete sus datos"
          );
        else {
          alert("Registro exitoso");
          navigation.navigate("MyEvents");
        }
      })
      .catch((err) => alert("Error al realizar inscripción"));
  };

  const handleInscription = () => {
    if (certificate < 0) {
      alert("Elija opcion para entrega de certificado");
    } else if (!image) {
      alert("Adjunte un voucher");
    } else {
      upload({ image, callback: executeInscription });
    }
  };
  return (
    <HomeLayoutAlternative navigation={navigation}>
      <ScrollView
        style={{
          marginTop: 40,
        }}
      >
        <View style={styles.container}>
          <View
            style={{
              width: "80%",
            }}
          >
            <Text style={styles.title}>
              Eventos/"{route?.params?.title}"/Inscripción
            </Text>
          </View>
          <View style={{ marginTop: 30 }}>
            <Text style={{ textAlign: "left" }}>Inscripción al evento</Text>
          </View>
          <View style={{ height: 5, backgroundColor: "gray" }}></View>
          <View style={styles.formItem}>
            <InputLayout>
              <HomeInput
                label="Nombres"
                value={userData?.nombres}
                editable={false}
              />
            </InputLayout>
          </View>
          <View style={styles.formItem}>
            <InputLayout>
              <HomeInput
                label="Apellidos"
                value={userData?.apellidos}
                editable={false}
              />
            </InputLayout>
          </View>
          <View style={styles.formItem}>
            <InputLayout>
              <HomeInput
                label="Correo"
                value={userData?.email}
                editable={false}
              />
            </InputLayout>
          </View>
          <View style={styles.formItem}>
            <InputLayout>
              <HomeInput
                label="Edad"
                value={userData?.edad ? String(userData?.edad) : ""}
                editable={false}
              />
            </InputLayout>
          </View>
          <View style={styles.formItem}>
            <InputLayout>
              <HomeInput
                label="Sexo"
                value={userData?.sexo || ""}
                editable={false}
              />
            </InputLayout>
          </View>
          <View style={styles.formItem}>
            <InputLayout>
              <HomeInput
                label="Ocupación"
                value={userData?.ocupacion || ""}
                editable={false}
              />
            </InputLayout>
          </View>

          <View style={{ width: "100%", marginLeft: 78 }}>
            <InputLayout label="Certificado">
              <View style={styles.picker}>
                <Picker
                  onValueChange={(val) => setCertificate(val)}
                  selectedValue={certificate}
                >
                  <Picker.Item label="--seleccione--" value={-1} />
                  <Picker.Item label="Sí" value={0} />
                  <Picker.Item label="No" value={1} />
                </Picker>
              </View>
            </InputLayout>
            <InputLayout label="Voucher">
              {!image ? (
                <ImagePicker handleImage={handleImageEvent} />
              ) : (
                <TouchableOpacity onPress={removeImage}>
                  <Text
                    style={{
                      marginVertical: 10,
                      color: "#F90909",
                      borderColor: "#F90909",
                      borderWidth: 1,
                      paddingVertical: 5,
                      width: "50%",
                      paddingHorizontal: 5,
                      borderRadius: 4,
                    }}
                  >
                    Remover voucher
                  </Text>
                </TouchableOpacity>
              )}
            </InputLayout>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "80%",
              marginTop: 20,
              marginBottom: 10,
            }}
          >
            <Button
              color="#F90909"
              title="Cancelar"
              onPress={() =>
                navigation.navigate("EventDetails", { inscription: true })
              }
            />
            <Button
              color="#5AD65A"
              title="Inscribirme"
              onPress={handleInscription}
            />
          </View>
        </View>
      </ScrollView>
    </HomeLayoutAlternative>
  );
};

export default index;
