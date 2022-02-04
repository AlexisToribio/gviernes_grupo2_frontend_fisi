import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  title: {
    paddingBottom: 15,
    paddingTop: 15,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  search_container: {
    flexDirection: "row",
    paddingVertical: 10,
    marginLeft: 16,
  },
  icon: {
    marginLeft: "auto",
    marginRight: "auto",
  },
  request: {
    height: 45,
    width: 360,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "black",
    backgroundColor: "white",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 16,
    marginVertical: 15,
    justifyContent: "space-between",
  },
  request_col: {
    flexDirection: "row",
    alignItems: "center",
    margin: 3,
    padding: 5,
  },
});
