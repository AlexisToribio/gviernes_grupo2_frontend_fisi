import { ScrollView, View, Text, Image } from "react-native";
import { Button } from "../../components";
import styles from "./styles";

const index = ({ navigation }) => {
  return (
    <ScrollView>
      <Text style={{ marginTop: 100 }}>My requests</Text>
      <Button onPress={() => navigation.navigate("RequestDetails")}>
        Irrrrrrrrr
      </Button>
    </ScrollView>
  );
};

export default index;
