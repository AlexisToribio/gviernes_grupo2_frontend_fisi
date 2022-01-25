import { ScrollView, View, Text, Image, TouchableOpacity } from "react-native";
import { AuthLayoutAlternative } from "../../components";
import styles from "./styles";

const index = ({ navigation }) => {
  return (
    <AuthLayoutAlternative navigation={navigation}>
      <ScrollView>{/* AQUI VA TU CODIGO */}</ScrollView>
    </AuthLayoutAlternative>
  );
};

export default index;
