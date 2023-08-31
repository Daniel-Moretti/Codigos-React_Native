import { Text, TouchableOpacity } from "react-native";
import { styles } from "./style";

export function ButtonMinus(){

    return (
        <TouchableOpacity style={styles.buttonMinus}>
                        <Text >-1</Text>
        </TouchableOpacity>
    )
}