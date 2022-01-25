import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  Button,
  Alert,
  TouchableOpacity,
  ScrollView,
  Picker,
} from "react-native";
import { HomeInput, HomeLayout, InputPicker } from "../../components";
import styles from "./styles";
import * as ImagePicker from "expo-image-picker";
import { PickerItem } from "react-native/Libraries/Components/Picker/Picker";

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

const index = ({ navigation }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  let openImagePickerAsync = async () => {
    let permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access gallery is required");
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync();
    //console.log(pickerResult);

    if (pickerResult.cancelled === true) {
      return;
    }

    setSelectedImage({ localUri: pickerResult.uri });
  };

  return (
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
            Eventos/Conferencia “Seeds for the Future”/Inscripción
          </Text>
        </View>
        <View style={{marginTop: 30}}>
          <Text style={{textAlign: "left"}}>Inscripción al evento</Text>
        </View>
        <View style={{height: 5, backgroundColor: "gray"}}></View>
        <View style={styles.formItem}>
          <InputLayout>
            <HomeInput label="Nombres"/>
          </InputLayout>
        </View>
        <View style={styles.formItem}>
          <InputLayout>
            <HomeInput label="Apellidos"/>
          </InputLayout>
        </View>
        <View style={styles.formItem}>
          <InputLayout>
            <HomeInput label="Correo"/>
          </InputLayout>
        </View>
        <View style={styles.formItem}>
          <InputLayout>
            <HomeInput label="DNI/Carné extranjería"/>
          </InputLayout>
        </View>
        <View style={styles.formItem}>
          <InputLayout>
            <HomeInput label="Número de celular"/>
          </InputLayout>
        </View>
        <View style={styles.formItem}>
          <InputLayout>
            <HomeInput label="Sexo"/>
          </InputLayout>
        </View>
        <View style={styles.formItem}>
          <InputLayout>
            <HomeInput label="Ocupación"/>
          </InputLayout>
        </View>
        <View style={styles.formItem}>
          <InputLayout>
            <HomeInput label="Edad"/>
          </InputLayout>
        </View>
        <InputLayout label="Certificado" style={{width:"80%"}}>
          <View style={styles.picker}>
            <Picker>
              <Picker.Item label="Sí" value="si" />
              <Picker.Item label="No" value="no" />
            </Picker>
          </View>
        </InputLayout>
        <InputLayout label="Voucher">
          <View style={styles.picker}>
            <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
              <Text>Seleccionar archivo</Text>
            </TouchableOpacity>
          </View>
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
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "80%",
            marginTop: 10,
            marginBottom: 10,
          }}
        >
          <Button color="#F90909" title="Descartar" />
          <Button color="#09A305" title="Inscribirse" />
        </View>
        {/* <Image
          source={{
            uri:
              selectedImage !== null
                ? selectedImage.localUri
                : "https://picsum.photos/200/200",
          }}
          style={styles.image}
        />
        <Button
          color="#208920"
          title="Press me"
          onPress={() => Alert.alert("Hello!!!")}
        />
        <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
          <Text style={styles.buttonText}>Press me</Text>
        </TouchableOpacity> */}
      </View>
    </ScrollView>
  );
};

export default index;
