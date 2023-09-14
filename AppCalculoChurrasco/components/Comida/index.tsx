import { Text, View } from "react-native";
import { styles } from "./style";

type Props = {
    total: string,
    extra: string,
    tipo: string
}

export function Comida(props: Props){
    return (
        <View style={styles.boxTotais}>
            <Text style={styles.fontTotais}>{props.total}g</Text>
            <Text style={styles.fontComida}>{props.tipo}</Text>
            <Text style={styles.fontExtra}>{props.extra}g Extra</Text>
        </View>
    )
}