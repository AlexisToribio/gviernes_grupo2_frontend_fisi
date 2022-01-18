import { TextInput, View, Text } from "react-native";
import { styles } from "./styles";

const index = ({ label }) => {
  return (
    <View style={styles.containerInput}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput style={styles.input} placeholder="Congreso Nacional N°1" />
    </View>
  );
};

export default index;
