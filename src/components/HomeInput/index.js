import { TextInput, View, Text } from "react-native";
import { styles } from "./styles";

const index = ({
  label,
  value = 0,
  onChange,
  placeholder = "",
  multiline = false,
  keyboardType = "default",
  editable = true,
}) => {
  return (
    <View style={styles.containerInput}>
      {label && <Text style={styles.label}>{label}</Text>}

      <TextInput
        editable={editable}
        keyboardType={keyboardType}
        value={value}
        onChangeText={onChange}
        style={multiline ? styles.textarea : styles.input}
        placeholder={placeholder}
        multiline={multiline}
      />
    </View>
  );
};

export default index;
