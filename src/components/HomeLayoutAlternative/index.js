import { Image, Text, View, TouchableOpacity } from "react-native";
import { styles } from "./styles";

const index = ({ navigation, children }) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={styles.back}
            source={require("../../../assets/back.png")}
          />
        </TouchableOpacity>
        <Image
          style={styles.logo}
          source={require("../../../assets/Logo-min.png")}
        />
      </View>
      <View style={styles.divisor}></View>
      {children}
    </View>
  );
};

export default index;
