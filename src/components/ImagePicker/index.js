import { TouchableOpacity, Text } from "react-native";
import * as ImagePicker from "expo-image-picker";
const index = ({ handleImage }) => {
  const handlePress = async () => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permission.granted)
      return alert("Es necesario tener permiso para acceder a la galeria");
    const pickerResult = await ImagePicker.launchImageLibraryAsync();
    handleImage(pickerResult);
  };
  return (
    <TouchableOpacity
      onPress={handlePress}
      style={{
        paddingVertical: 5,
        width: "50%",
        paddingHorizontal: 5,
        borderRadius: 4,
        backgroundColor: "#69a2ff",
      }}
    >
      <Text style={{ color: "white", fontWeight: "bold" }}>Elegir archivo</Text>
    </TouchableOpacity>
  );
};

export default index;
