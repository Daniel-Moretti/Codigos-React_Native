import { Text, View } from "react-native";
import { styles } from "./style";

type Props = {
    total: string,
    extra: string,
    tipo: string
}

export function Bebida(props: Props){
    return (
        <View style={styles.boxTotais}>
            <Text style={styles.fontTotais}>{props.total}L</Text>
            <Text style={styles.fontBebida}>{props.tipo}</Text>
            <Text style={styles.fontExtra}>{props.extra}ml Extra</Text>
        </View>
    )
}