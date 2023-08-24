import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container : {
      flex: 1, 
      padding:24, 
      backgroundColor: '#131016'
    },
    title : {
      color: '#ffff', 
        fontSize: 25, 
        fontWeight: 'bold',
        marginTop: 48
    },
    data :{
      color: '#fff'
    },
    input: {
        height: 56,
        backgroundColor: '#1f1e25',
        color: '#fff',
        paddingLeft: 16,
        borderRadius: 10,
        fontSize: 18,
        flex: 1
    },
    button: {
        width: 56,
        height: 56,
        borderRadius: 10,
        backgroundColor: '#31CF67',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textButton: {
        fontSize: 30,
        color: '#fff'
    },
    form: {
        marginTop: 24,
        flexDirection: 'row',
        gap: 10
    },
    listEmpty : {
      color: '#fff',
      fontSize: 14,
      textAlign: 'center',
      marginTop: 30,
    }
  
  
  })