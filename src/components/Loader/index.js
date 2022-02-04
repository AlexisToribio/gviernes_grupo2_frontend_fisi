import { View, Text, ActivityIndicator } from "react-native";

const index = () => {
  return (
    <View style={{ marginVertical: 20, marginHorizontal: 30 }}>
      <ActivityIndicator size="large" color="#5AD65A" />
      <Text style={{ textAlign: "center" }}>Loading...</Text>
    </View>
  );
};

export default index;
