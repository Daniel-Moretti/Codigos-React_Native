import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 4,
    backgroundColor: "black",
  },
  title: {
    color: "#ffff",
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 8,
  },
  date: {
    color: "#6B6B6B",
  },
  input: {
    height: 56,
    backgroundColor: "#1f1e25",
    color: "#fff",
    paddingLeft: 16,
    borderRadius: 5,
    fontSize: 18,
    //flex: 1,
  },
  button: {
    backgroundColor: "#31CF67",
    height: 50,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 28,
    color: "white",
    fontWeight: "bold",
  },
  add: {
    marginTop: 24,
    flexDirection: "column",
    gap: 10,
  },
  listEmpty: {
    color: "#fff",
    fontSize: 14,
    textAlign: "center",
    marginTop: 30,
  },
});
