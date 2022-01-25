import { ScrollView, View, Text, Image, TouchableOpacity } from "react-native";
<<<<<<< HEAD
import { HomeLayoutAlternative } from "../../components";
=======
import { borderLeftColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import { AuthLayoutAlternative, Input } from "../../components";
import Icon from "react-native-vector-icons/FontAwesome";
>>>>>>> 173aa771e7e36dc96520906d4cb604490c358c14
import styles from "./styles";

const index = ({ navigation }) => {
  return (
<<<<<<< HEAD
    <HomeLayoutAlternative navigation={navigation}>
      <ScrollView>{/* AQUI VA TU CODIGO */}</ScrollView>
    </HomeLayoutAlternative>
=======
    <AuthLayoutAlternative navigation={navigation}>
      <ScrollView>
        <View>
          <Text style={styles.title}>Lista de Solicitudes</Text>
        </View>
        <View style={styles.search_container}>
          <Input icon="search" placeholder="Nro Expediente" />
        </View>
        <View style={styles.request}>
          <View style={styles.request_col}>
            <Text>1</Text>
          </View>
          <View style={styles.request_col}>
            <Text>Conferencia</Text>
          </View>
          <View style={styles.request_col}>
            <Icon name="calendar" size={25} style={styles.icon} />
            <Text style={{ marginLeft: 10 }}>2022-01-01</Text>
          </View>
          <View style={styles.request_col}>
            <Icon name="file" size={25} style={styles.icon} />
          </View>
        </View>
        <View style={styles.request}>
          <View style={styles.request_col}>
            <Text>1</Text>
          </View>
          <View style={styles.request_col}>
            <Text>Conferencia</Text>
          </View>
          <View style={styles.request_col}>
            <Icon name="calendar" size={25} style={styles.icon} />
            <Text style={{ marginLeft: 10 }}>2022-01-01</Text>
          </View>
          <View style={styles.request_col}>
            <Icon name="file" size={25} style={styles.icon} />
          </View>
        </View>
        <View style={styles.request}>
          <View style={styles.request_col}>
            <Text>1</Text>
          </View>
          <View style={styles.request_col}>
            <Text>Conferencia</Text>
          </View>
          <View style={styles.request_col}>
            <Icon name="calendar" size={25} style={styles.icon} />
            <Text style={{ marginLeft: 10 }}>2022-01-01</Text>
          </View>
          <View style={styles.request_col}>
            <Icon name="file" size={25} style={styles.icon} />
          </View>
        </View>
        <View style={styles.request}>
          <View style={styles.request_col}>
            <Text>1</Text>
          </View>
          <View style={styles.request_col}>
            <Text>Conferencia</Text>
          </View>
          <View style={styles.request_col}>
            <Icon name="calendar" size={25} style={styles.icon} />
            <Text style={{ marginLeft: 10 }}>2022-01-01</Text>
          </View>
          <View style={styles.request_col}>
            <Icon name="file" size={25} style={styles.icon} />
          </View>
        </View>
        <View style={styles.request}>
          <View style={styles.request_col}>
            <Text>1</Text>
          </View>
          <View style={styles.request_col}>
            <Text>Conferencia</Text>
          </View>
          <View style={styles.request_col}>
            <Icon name="calendar" size={25} style={styles.icon} />
            <Text style={{ marginLeft: 10 }}>2022-01-01</Text>
          </View>
          <View style={styles.request_col}>
            <Icon name="file" size={25} style={styles.icon} />
          </View>
        </View>
        <View style={styles.request}>
          <View style={styles.request_col}>
            <Text>1</Text>
          </View>
          <View style={styles.request_col}>
            <Text>Conferencia</Text>
          </View>
          <View style={styles.request_col}>
            <Icon name="calendar" size={25} style={styles.icon} />
            <Text style={{ marginLeft: 10 }}>2022-01-01</Text>
          </View>
          <View style={styles.request_col}>
            <Icon name="file" size={25} style={styles.icon} />
          </View>
        </View>
        <View style={styles.request}>
          <View style={styles.request_col}>
            <Text>1</Text>
          </View>
          <View style={styles.request_col}>
            <Text>Conferencia</Text>
          </View>
          <View style={styles.request_col}>
            <Icon name="calendar" size={25} style={styles.icon} />
            <Text style={{ marginLeft: 10 }}>2022-01-01</Text>
          </View>
          <View style={styles.request_col}>
            <Icon name="file" size={25} style={styles.icon} />
          </View>
        </View>
        <View style={styles.request}>
          <View style={styles.request_col}>
            <Text>1</Text>
          </View>
          <View style={styles.request_col}>
            <Text>Conferencia</Text>
          </View>
          <View style={styles.request_col}>
            <Icon name="calendar" size={25} style={styles.icon} />
            <Text style={{ marginLeft: 10 }}>2022-01-01</Text>
          </View>
          <View style={styles.request_col}>
            <Icon name="file" size={25} style={styles.icon} />
          </View>
        </View>
        <View style={styles.request}>
          <View style={styles.request_col}>
            <Text>1</Text>
          </View>
          <View style={styles.request_col}>
            <Text>Conferencia</Text>
          </View>
          <View style={styles.request_col}>
            <Icon name="calendar" size={25} style={styles.icon} />
            <Text style={{ marginLeft: 10 }}>2022-01-01</Text>
          </View>
          <View style={styles.request_col}>
            <Icon name="file" size={25} style={styles.icon} />
          </View>
        </View>
        <View style={styles.request}>
          <View style={styles.request_col}>
            <Text>1</Text>
          </View>
          <View style={styles.request_col}>
            <Text>Conferencia</Text>
          </View>
          <View style={styles.request_col}>
            <Icon name="calendar" size={25} style={styles.icon} />
            <Text style={{ marginLeft: 10 }}>2022-01-01</Text>
          </View>
          <View style={styles.request_col}>
            <Icon name="file" size={25} style={styles.icon} />
          </View>
        </View>
      </ScrollView>
    </AuthLayoutAlternative>
>>>>>>> 173aa771e7e36dc96520906d4cb604490c358c14
  );
};

export default index;
