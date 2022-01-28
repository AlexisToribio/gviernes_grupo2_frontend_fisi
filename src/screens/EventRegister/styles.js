import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: "center",
    paddingBottom: 200,
  },
  picker: {
    height: 40,
    width: "100%",
    borderColor: "black",
    borderRadius: 4,
    borderWidth: 1,
    borderStyle: "solid",
  },
  image: {
    width: "100%",
    height: 180,
    borderRadius: 4,
    resizeMode: "stretch",
  },
  remove: {
    color: "red",
    marginTop: 7,
    textAlign: "center",
  },
});
