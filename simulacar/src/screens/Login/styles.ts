import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  linearGradient: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 20,
  },
  containerInputs: {
    height: "50%",
    width: "90%",
    justifyContent: "center",
    gap: 30

  },
  input: {
    width: "100%",
    alignItems: "center",
    height: 46,
    backgroundColor: "#ffff",
    color: "black",
    paddingLeft: 10,
    borderRadius: 18,
    fontSize: 18,
    borderWidth: 1,
    borderColor: "#000"
  },
  textTitle: {
    fontSize: 35,
    fontWeight: "bold",
    color: "#ffff",
    paddingTop: 80,

  },
  textInputs: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#ffff",
    paddingBottom: 15,
    //paddingTop: 20
  },
  button :{
    width: "100%",
    alignItems: "center",
    height: 46,
    backgroundColor: "#01633D",
    borderRadius: 18,
    justifyContent: "center",
    marginTop: 0
  },
  buttonText: {
    fontSize: 22,
    color: "white",
    fontWeight: "bold",
  },
  buttonVoltar: {
    fontSize: 16,
    color: "#5987CC",
    fontWeight: "bold",
  }
});
