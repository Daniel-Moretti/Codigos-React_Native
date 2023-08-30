import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    backgroundColor: "#838585",
    borderRadius: 5,
    marginTop: 10,
    alignItems: "center",
  },
  prodName: {
    color: "#fff",
    fontSize: 16,
    marginLeft: 16,
    flex: 1,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 10,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
  textButton: {
    fontSize: 30,
    color: "#fff",
  },
});
