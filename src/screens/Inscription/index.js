import React, { useState } from "react";
import { View, Text, Button, TouchableOpacity, ScrollView } from "react-native";
import {
  HomeInput,
  HomeLayoutAlternative,
  ImagePicker,
} from "../../components";
import { Picker } from "@react-native-picker/picker";
import styles from "./styles";
import { uploadImage } from "../../services/uploadImage";

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
  const [image, setImage] = useState(null);
  const handleImageEvent = (result) => {
    setImage(result.uri);
    console.log(result);
    // uploadImage({ file: result })
    //   .then((res) => console.log(res))
    //   .catch((err) => console.error(err));
  };
  const removeImage = () => setImage(null);

  const executeInscription = () => {};
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
              <HomeInput label="Nombres" />
            </InputLayout>
          </View>
          <View style={styles.formItem}>
            <InputLayout>
              <HomeInput label="Apellidos" />
            </InputLayout>
          </View>
          <View style={styles.formItem}>
            <InputLayout>
              <HomeInput label="Correo" />
            </InputLayout>
          </View>
          <View style={styles.formItem}>
            <InputLayout>
              <HomeInput label="DNI/Carné extranjería" />
            </InputLayout>
          </View>
          <View style={styles.formItem}>
            <InputLayout>
              <HomeInput label="Número de celular" />
            </InputLayout>
          </View>
          <View style={styles.formItem}>
            <InputLayout>
              <HomeInput label="Sexo" />
            </InputLayout>
          </View>
          <View style={styles.formItem}>
            <InputLayout>
              <HomeInput label="Ocupación" />
            </InputLayout>
          </View>
          <View style={styles.formItem}>
            <InputLayout>
              <HomeInput label="Edad" />
            </InputLayout>
          </View>
          <View style={{ width: "100%", marginLeft: 78 }}>
            <InputLayout label="Certificado">
              <View style={styles.picker}>
                <Picker>
                  <Picker.Item label="Sí" value="si" />
                  <Picker.Item label="No" value="no" />
                </Picker>
              </View>
            </InputLayout>
            <InputLayout label="Voucher">
              {!image ? (
                <ImagePicker handleImage={handleImageEvent} />
              ) : (
                <TouchableOpacity onPress={removeImage}>
                  <Text>Remover voucher</Text>
                </TouchableOpacity>
              )}
            </InputLayout>
            <InputLayout label="¿Por dónde se enteró del evento?">
              <View style={styles.picker}>
                <Picker>
                  <Picker.Item label="Radio" value="radio" />
                  <Picker.Item label="Televisión" value="tv" />
                  <Picker.Item label="Flyer" value="flyer" />
                  <Picker.Item label="Otro medio" value="otro" />
                </Picker>
              </View>
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
            <Button color="#F90909" title="Cancelar" />
            <Button
              color="#5AD65A"
              title="Inscribirme"
              onPress={executeInscription}
            />
          </View>
        </View>
      </ScrollView>
    </HomeLayoutAlternative>
  );
};

export default index;
