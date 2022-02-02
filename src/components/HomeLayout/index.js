import { Image, Text, View } from "react-native";
import { styles } from "./styles";

const index = ({ children, title }) => {
  return (
    <View style={{ backgroundColor: "white" }}>
      <View style={styles.containerImage}>
        <Image
          style={styles.logo}
          source={require("../../../assets/Logo.png")}
        />
      </View>
      <View style={styles.divisor}></View>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.divisorSecondary}></View>
      {children}
    </View>
  );
};

export default index;
