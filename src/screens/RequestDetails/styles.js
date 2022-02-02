import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingBottom: 100,
  },

  containerHeader: {
    width: "100%",
  },
  rowContainer: {
    flex: 1,
    flexDirection: "column",
  },
  rowItem: {
    flex: 1,
  },
  logo: {
    width: 120,
    height: 30,
    marginTop: -30,
    marginLeft: 250,
  },
  back: {
    marginTop: 40,
    width: 50,
    height: 30,
  },
  divisor: {
    marginTop: 17,
    backgroundColor: "black",
    height: 1,
    width: "100%",
  },
  title: {
    marginLeft: 30,
    marginTop: 15,
    fontFamily: "Roboto",
    fontSize: 21,
    fontWeight: "bold",
  },
  portada: {
    width: "100%",
    height: 200,
  },
  containerInput: {
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 10,
    marginTop: 10,
    color: "gray",
  },

  label: {
    paddingTop: 5,
    paddingBottom: 5,
  },
});
