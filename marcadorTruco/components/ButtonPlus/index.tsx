import { Text, TouchableOpacity } from "react-native";
import { styles } from "./style";

type Props = {
    nos?: () => void,
    eles?: () => void
}
export function ButtonPlus(props: Props) {

    const handlePressIn = () => {
        
        if (props.nos) {
            props.nos();
        }
        if (props.eles) {
            props.eles();
        }
    } 

    return (
        <TouchableOpacity style={styles.buttonPlus} onPress={handlePressIn}>
            <Text style={styles.textButton}>+1</Text>
        </TouchableOpacity>
    )
}