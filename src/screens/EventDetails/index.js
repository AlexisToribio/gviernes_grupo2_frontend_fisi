import { View, Text,Image, TextInput,ScrollView, TouchableOpacity } from "react-native";
import { HomeInput, HomeLayout} from "../../components";
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

const index = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <View style={styles.rowContainer}>
          <View style={styles.rowItem}>
            <Image
              style={styles.logo}
              source={require("../../../assets/Logo-min.png")}
            />
          </View>
      
            <TouchableOpacity onPress={() => navigation.navigate("Events")}>
              <View  
              style={styles.rowItem}>
              <Image
                style={styles.back}
                source={require("../../../assets/back.png")}
              />
              </View>
            </TouchableOpacity>
          
        </View>     
      </View>
      
      <View style={styles.divisor}></View>
      <ScrollView>
          <Image
            style={styles.portada}
            source={{
              uri: 'https://ipmark.com/wp-content/uploads/eventos-de-marketing-2021.jpg',}}
          />
      <Text style={styles.title}>Nombre del Evento</Text>
      <View style={styles.divisor}></View>

      <InputLayout label="Descripcion">
        <Text style={styles.containerInput}>Lorem Ipsum ha sido
        el texto de relleno estándar de las industrias desde el año
        1500, cuando un impresor ...</Text>
      </InputLayout>
      
      <View style={{ flexDirection: "row", width: "100%" }}>
            <View style={{ width: "50%", marginRight: 5 }}>
              <InputLayout label="Fecha de Inicio">
              <Text style={styles.containerInput}>9 de abril</Text>
              </InputLayout>
            </View>
            <View style={{ width: "50%", paddingRight: 5 }}>
            <InputLayout label="Horario">
              <Text style={styles.containerInput}>9:45pm</Text>
              </InputLayout>
            </View>
      </View>
      
      <InputLayout label="Certificado">
        <Text style={styles.containerInput}>Si</Text>
      </InputLayout>

      <View style={{ flexDirection: "row", width: "100%" }}>
            <View style={{ width: "50%"}}>
              <InputLayout label="Nombre coordinador">
              </InputLayout>
            </View>
            <View style={{ width: "50%"}}>
              <Text style={styles.containerInput}>Fernando Altamirano</Text>
            </View>
      </View>

      <View style={{ flexDirection: "row", width: "100%" }}>
            <View style={{ width: "50%"}}>
              <InputLayout label="Ambiente">
              </InputLayout>
            </View>
            <View style={{ width: "50%"}}>
              <Text style={styles.containerInput}>Aula Magna</Text>
            </View>
      </View>  
      </ScrollView>
    </View>

    
  );
};

export default index;
