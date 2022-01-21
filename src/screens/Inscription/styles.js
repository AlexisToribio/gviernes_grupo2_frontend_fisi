import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
    title: { fontSize: 20, color: "black", textAlign:"center"},
  //image: { height: 200, width: 200, borderRadius: 100, resizeMode: "contain" },
   button: {
     backgroundColor: "gray",
     width: "35%",
     padding: 5,
     margin: 3,
     borderRadius: 5,
   },
  formItem:{
    margin: 10,
    padding: 5,
  },
  buttonText: { color: "black", fontSize: 20 },
  picker: {
    height: 40,
    width: "100%",
    borderColor: "black",
    borderRadius: 2,
    borderWidth: 1,
    borderStyle: "solid",
  },
});
