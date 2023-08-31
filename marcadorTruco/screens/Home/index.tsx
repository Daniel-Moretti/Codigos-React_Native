import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style";
import { ButtonPlus } from "../../components/ButtonPlus";
import { ButtonMinus } from "../../components/ButtonMinus";

export default function Home(){

    return (
        <View style={styles.colorBackground}>
            <View >
                <Text style={styles.title}> MARCADOR DE TRUCO</Text>
            </View>
            <View style={styles.containerMarker}>
                <View >
                    <Text style={styles.sideNos}>NÓS</Text>
                    <Text style={styles.sideNosResult}>4</Text>
                    <ButtonPlus />
                    <ButtonMinus />
                </View>

                <View >
                    <Text style={styles.sideEles}>ELES</Text>
                    <Text style={styles.sideElesResult}>2</Text>
                    <ButtonPlus />
                    <ButtonMinus />
                </View>
            </View>
        </View>
    )
}