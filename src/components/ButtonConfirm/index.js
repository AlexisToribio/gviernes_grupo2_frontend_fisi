import { View, Text, TouchableOpacity } from "react-native";

const index = ({ onPress, text, logout = false }) => {
  return (
    <View
      style={{
        marginVertical: 20,
        marginHorizontal: 100,
      }}
    >
      <TouchableOpacity
        style={{
          backgroundColor: !logout ? "#5AD65A" : "black",
          paddingHorizontal: 10,
          paddingVertical: 10,
          borderRadius: 20,
        }}
        onPress={onPress}
      >
        <Text
          style={{
            textAlign: "center",
            color: "white",
            fontWeight: "bold",
          }}
        >
          {text}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default index;
