import { TextInput, View } from "react-native";
import styles from "./styles";
import Icon from "react-native-vector-icons/FontAwesome";

const index = ({ icon, type = "", onChange, value }) => {
  return (
    <View style={styles.container}>
      <Icon name={icon} size={25} style={styles.icon} />
      <TextInput
        value={value}
        onChangeText={onChange}
        style={styles.input}
        maxLength={50}
        secureTextEntry={type === "password" ? true : false}
      />
    </View>
  );
};

export default index;
