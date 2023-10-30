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
    paddingTop: 30,
  },
  containerResults: {
    height: "50%",
    width: "90%",
    justifyContent: "flex-start",
    gap: 10,
  },
  textTitle: {
    fontSize: 35,
    fontWeight: "bold",
    color: "#ffff",
  },
  text: {
    fontSize: 17,
    fontWeight: "600",
    color: "#ffff",
    paddingBottom: 15,
    //paddingTop: 20
  },
  boxResult: {
    backgroundColor: "#D9D9D9",
    height: 48,
    width: "100%",
    paddingStart: 12,
    paddingEnd: 12,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  boxResultTotal: {
    backgroundColor: "#D9D9D9",
    height: 48,
    width: "100%",
    paddingStart: 12,
    paddingEnd: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  textBoxResult: {
    fontSize: 14,
    fontWeight: "bold",
    textAlignVertical: "center",
    color: "black",
  },
  button :{
    width: "90%",
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
