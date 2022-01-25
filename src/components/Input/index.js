import { TextInput, View } from "react-native";
import styles from "./styles";
import Icon from "react-native-vector-icons/FontAwesome";

const index = ({ icon, type, placeholder}) => {
  return (
    <View style={styles.container}>
      <Icon name={icon} size={25} style={styles.icon} />
      <TextInput
        style={styles.input}
        maxLength={50}
        secureTextEntry={type == "password" ? true : false}
        placeholder={placeholder}
      />
    </View>
  );
};

export default index;
