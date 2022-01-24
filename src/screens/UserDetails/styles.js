import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({

  container: {
    width: "100%",
    paddingBottom: 120,
  },
  containerImage: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },

  logo: {
    width: 170,
    height: 45,
  },
  divisor: {
    marginTop: 17,
    backgroundColor: "black",
    height: 1,
    width: "100%",
    marginBottom: 15,
  },
  title: {
    fontSize: 21,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  containerUser: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 15,
  },
  logo_usuario: {
    width: 140,
    height: 140,

  },
  containerInput: {
    marginLeft: 25,
    marginRight: 25,
    marginBottom: 10,
    marginTop: 10,
  },
  input: {
    height: 40,
    borderColor: "black",
    borderWidth: 1,
    width: "100%",
    borderRadius: 4,
    paddingLeft: 10,
  },
  label: {
    paddingTop: 5,
    paddingBottom: 5,
  },
});