import { Text, TouchableOpacity } from "react-native";
import { styles } from "./style";

export function ButtonPlus(){

    return (
        <TouchableOpacity style={styles.buttonPlus}>
                        <Text >+1</Text>
        </TouchableOpacity>
    )
}