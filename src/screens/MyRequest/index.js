import { ScrollView, View, Text, Image, TouchableOpacity } from "react-native";
import { borderLeftColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import { AuthLayoutAlternative, Input } from "../../components";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./styles";

const index = ({ navigation }) => {
  return (
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
  );
};

export default index;
