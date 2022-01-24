<<<<<<< HEAD
import { ScrollView, View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
=======
import { ScrollView, View, Text, Image } from "react-native";
import { Button } from "../../components";
import styles from "./styles";
>>>>>>> 123b7e2262be6def780a258e14178f06653e41a1

const index = ({ navigation }) => {
  return (
    <ScrollView>
<<<<<<< HEAD
      <TouchableOpacity onPress={() => navigation.navigate('RequestDetails')}>
        <Text style={{ marginTop: 100 }}>Hola</Text>
      </TouchableOpacity>
=======
      <Text style={{ marginTop: 100 }}>My requests</Text>
      <Button onPress={() => navigation.navigate("RequestDetails")}>
        Irrrrrrrrr
      </Button>
>>>>>>> 123b7e2262be6def780a258e14178f06653e41a1
    </ScrollView>
  );
};

export default index;
