import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

type Props ={
    name: String,
    onRemove: () => void
}

export function Products(props : Props) {
    
    return(
        <View style={styles.container}>
            <Text style={styles.prodName}> {props.name} </Text>
            <TouchableOpacity style={styles.button} onPress={props.onRemove}>
                <Text style={styles.textButton}> - </Text>
            </TouchableOpacity>
        </View>
    )
}