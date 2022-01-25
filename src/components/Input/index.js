import { TextInput, View } from "react-native";
import styles from "./styles";
import Icon from "react-native-vector-icons/FontAwesome";

<<<<<<< HEAD
const index = ({ icon, type = "", onChange, value }) => {
=======
const index = ({ icon, type, placeholder}) => {
>>>>>>> 173aa771e7e36dc96520906d4cb604490c358c14
  return (
    <View style={styles.container}>
      <Icon name={icon} size={25} style={styles.icon} />
      <TextInput
        value={value}
        onChangeText={onChange}
        style={styles.input}
        maxLength={50}
<<<<<<< HEAD
        secureTextEntry={type === "password" ? true : false}
=======
        secureTextEntry={type == "password" ? true : false}
        placeholder={placeholder}
>>>>>>> 173aa771e7e36dc96520906d4cb604490c358c14
      />
    </View>
  );
};

export default index;
