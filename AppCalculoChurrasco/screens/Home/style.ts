import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  backgroundBody: {
    flex: 1,
    backgroundColor: "#383535",
  },
  backgroundTitle: {
    backgroundColor: "#BE4646",
    height: 87,
    justifyContent: "center",
    alignItems: "center",
  },
  colorTitle: {
    color: "#ffff",
    fontSize: 25,
    fontWeight: "bold",
    paddingTop: 15,
  },
  title: {
    color: "#ffff",
    fontSize: 18,
  },
  input: {
    width: 160,
    height: 42,
    borderRadius: 15,
    backgroundColor: "#fff",
    marginTop: 12,
    color: '#6F6B73',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  inputsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 15,
  },
  button: {
    backgroundColor: "#2B9C5E",
    width: 160,
    height: 42,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 38,
  },
  textButton: {
    color: "#ffff",
    fontSize: 20,
    fontWeight: "bold",
  },
  containerResultado: {
    justifyContent: "center",
    alignItems: "center",
  },
  titleResultado: {
    color: "#ffff",
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 8,
  },
  resultView: {
    width: 380,
    height: 51,
    backgroundColor: "#fff",
    marginStart: 6,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 12,
    marginBottom: 14,
  },
  resultText: {
    color: "#2B9F82",
    fontWeight: "bold",
  },
  containerTotais: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 15,
    marginTop: 8
  },
  boxTotal: {
    width: 110,
    height: 85,
    backgroundColor: "#20A082",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  fontResultTotal: {
    color: "#ffff",
    fontSize: 22,
    fontWeight: "bold",
  },
  fontTotal: {
    color: '#ffff',
    fontWeight: 'bold',
    fontSize: 18
  },
  boxTotalBebidas: {
    width: 380,
    height: 48,
    backgroundColor: "#2A679F",
    marginStart: 6,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 14,
  },
  textTotalBebidas: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffff'
  },
  buttonLimpar: {
    backgroundColor: "#D32904",
    width: 160,
    height: 42,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  viewButton: {
    alignItems: 'center'
  }
});
