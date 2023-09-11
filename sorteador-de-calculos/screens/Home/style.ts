import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#383535",
  },
  title: {
    color: "#ffff",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    padding: 20,
  },
  acertos: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingEnd: 15,
    paddingStart: 15,
  },
  certas: {
    color: "#4EA8DE",
  },
  erradas: {
    color: "#D34C6C",
  },
  containerButtonSortear: {
    alignItems: 'center',
    paddingTop: 15,
    paddingBottom: 18,
    borderBottomWidth: 1,
    marginHorizontal: 15,
    borderBottomColor: "#ffff"
  },
  buttonSortear: {
    backgroundColor: '#5D5FEF',
    height: 42,
    width: 220,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonSortearText: {
    color: '#ffff',
    fontSize: 16,
    fontWeight: 'bold'
  },
  how: {
    color: "#ffff",
    fontSize: 20,
    fontWeight: "bold",
    //padding: 35,
    paddingTop: 18,
    paddingBottom: 25,
    paddingStart: 15
  },
  containerSorteador: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  containerNumber1: {
    height: 60,
    width: 85,
    backgroundColor: '#4AA5F9',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center'
},
textNumber1: {
    color: '#ffff',
    fontWeight: 'bold',
    fontSize: 32,
},
  viewResposta: {
    width: '100%',
    height: '60%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    backgroundColor: "white",
    color: "#8C4FCA",
    height: 75,
    width: 160,
    borderRadius: 10,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  buttonValidate: {
    width: 280,
    height: 60,
    marginBottom: 20,
    marginTop: 20,
    backgroundColor: '#04D361',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textButtonValidate: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#ffff'
  },
  textResposta: {
    fontSize: 40,
    color: '#ffff',
    fontWeight: 'bold'
  },
  buttonNewGame: {
    width: 220,
    height: 50,
    marginTop: 20,
    backgroundColor: 'red',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textButtonNewGame: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffff'
  },
});
