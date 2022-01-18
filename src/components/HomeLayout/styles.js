import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  containerImage: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },

  logo: {
    width: 160,
    height: 70,
    resizeMode: "stretch",
  },
  divisor: {
    marginTop: 10,
    backgroundColor: "black",
    height: 1,
    width: "100%",
    marginBottom: 20,
  },
  divisorSecondary: {
    marginTop: 20,
    backgroundColor: "#D8D8D8",
    height: 1,
    width: "100%",
  },
  title: {
    fontFamily: "Roboto",
    fontSize: 40,
    fontWeight: "bold",
  },
});
