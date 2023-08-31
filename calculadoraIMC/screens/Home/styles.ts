import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#967ADC",
    flex: 1,
  },
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 23,
  },
  subTitle: {
    color: "white",
    fontSize: 15,
  },
  containerTitle: {
    paddingTop: 60,
    alignItems: "center",
  },
  input: {
    backgroundColor: "white",
    color: "black",
    height: 60,
    width: 130,
    marginTop: 8,
    borderRadius: 5,
    padding: 10,
  },
  containerInputs: {
    flexDirection: "row",
    justifyContent: "space-around",
    gap: 25,
    paddingTop: 70,
    paddingBottom: 80,
  },
  boxButton: {
    alignItems: "center",
    paddingBottom: 30,
  },
  buttonCalcular: {
    backgroundColor: "white",
    width: 350,
    height: 50,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  textButton: {
    color: "#967ADC",
    fontWeight: "bold",
    fontSize: 20,
    //alignItems:'center'
  },
  containerResult: {
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textResult: {
    color: "#967ADC",
  },
  footer: {
    height: 60,
    alignItems: "center",
    justifyContent: "center",
  },
  footerText: {
    color: "white",
    fontWeight: 'bold',
    fontSize: 25,
    
  }
});
