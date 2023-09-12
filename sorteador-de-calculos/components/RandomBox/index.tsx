import { Text, View } from "react-native";
import { styles } from "./style";

type Props= {
    sort: string
}
export function RandomBox(props: Props) {
    return (
        <View style={styles.containerNumber1}>
            <Text style={styles.textNumber1}>{props.sort}</Text>
        </View>
    )
}