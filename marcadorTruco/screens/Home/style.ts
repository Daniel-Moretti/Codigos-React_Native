import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  allContainer: {
    flex: 1,
    backgroundColor: "#383535",
    justifyContent: 'space-around',
  },
  titleContainer: {
    alignItems: 'center'
  },
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 30,
    paddingTop: 50,
  },
  containerMarker: {
    flexDirection:'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  textNos: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#4AA5F9",
    textAlign: 'center',
  },
  textNosResult: {
    fontSize: 110,
    fontWeight: "bold",
    color: "#4AA5F9",
    textAlign: 'center'
  },
  textEles: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#C08DF3",
    textAlign: 'center'
  },
  textElesResult: {
    fontSize: 110,
    fontWeight: "bold",
    color: "#C08DF3",
    textAlign: 'center'
  },
  containerButtonResultsNos: {
    gap: 15
  },
  containerButtonResultsEles: {
    gap: 15
  },
  containerButtonReset: {
    alignItems: 'center',
    paddingTop: 30,
    paddingBottom: 15
  },
  buttonReset: {
    backgroundColor: '#DE9609',
    height: 56,
    width: 320,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonResetText: {
    color: '#ffff',
    fontSize: 25,
  }
});
