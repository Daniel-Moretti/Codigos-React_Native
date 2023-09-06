import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A1A",
  },
  header: {
    flex: 0.25,
    backgroundColor: "#0D0D0D",
  },
  containerInput: {
    flexDirection: 'row'
  },
  input: {
    height: 56,
    backgroundColor: "#1f1e25",
    color: "#fff",
    paddingLeft: 16,
    borderRadius: 10,
    fontSize: 18,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 10,
    backgroundColor: "#31CF67",
    alignItems: "center",
    justifyContent: "center",
  },
  textButton: {
    fontSize: 30,
    color: "#fff",
  },
});
