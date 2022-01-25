import { ScrollView, View, Text, Image, TouchableOpacity } from "react-native";
import { HomeLayoutAlternative } from "../../components";
import styles from "./styles";

const index = ({ navigation }) => {
  return (
    <HomeLayoutAlternative navigation={navigation}>
      <ScrollView>{/* AQUI VA TU CODIGO */}</ScrollView>
    </HomeLayoutAlternative>
  );
};

export default index;
