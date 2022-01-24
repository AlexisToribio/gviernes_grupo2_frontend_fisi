import { TouchableOpacity, Text } from "react-native";
import styles from "./styles";

const index = (props) => {
  return (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
      <Text style={styles.text}>{props.children}</Text>
    </TouchableOpacity>
  );
};

export default index;
