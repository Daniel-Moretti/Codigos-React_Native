import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

type Props ={
    name: String,
    OnRemove: () => void
}

export function Products(props : Props) {
    console.log("funcao product")
    return(
        <View style={styles.container}>
            <Text style={styles.prodName}> {props.name} </Text>
            <TouchableOpacity style={styles.button} onPress={props.OnRemove}>
                <Text style={styles.textButton}> - </Text>
            </TouchableOpacity>
        </View>
    )
}