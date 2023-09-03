import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style";
import { ButtonPlus } from "../../components/ButtonPlus";
import { ButtonMinus } from "../../components/ButtonMinus";
import { useState } from "react"

export default function Home() {

    const [countWe, setCountWe] = useState(0);
    const [countThem, setCountThem] = useState(0);

    function sumWe() {
        if (countWe == 12) {
            return
        } else {
            setCountWe(countWe + 1)
        }
    }

    function subWe() {
        if (countWe == 0) {
            return
        } else {
            setCountWe(countWe - 1)
        }
    }

    function sumThem() {
        if (countThem == 12) {
            return
        } else {
            setCountThem(countThem + 1)
        }
    }

    function subThem() {
        if (countThem == 0) {
            return
        } else {
            setCountThem(countThem - 1)
        }
    }

    function restart() {
        setCountThem(0)
        setCountWe(0)
    }



    return (
        <View style={styles.allContainer}>

            <View style={styles.titleContainer}>
                <Text style={styles.title}> MARCADOR DE TRUCO</Text>
            </View>

            <View style={styles.containerMarker}>
                <View >
                    <Text style={styles.textNos}>NÓS</Text>
                    <Text style={styles.textNosResult}>{countWe}</Text>
                </View>
                <View >
                    <Text style={styles.textEles}>ELES</Text>
                    <Text style={styles.textElesResult}>{countThem}</Text>
                </View>
            </View>

            <View style={styles.containerMarker}>
                <View style={styles.containerButtonResultsNos}>
                    <ButtonPlus nos={() => sumWe()} />
                    <ButtonMinus nos={() => subWe()} />
                </View>

                <View style={styles.containerButtonResultsEles}>
                    <ButtonPlus eles={() => sumThem()} />
                    <ButtonMinus eles={() => subThem()} />
                </View>
            </View>

            <View style={styles.containerButtonReset}>
                <TouchableOpacity style={styles.buttonReset} onPress={restart}>
                    <Text style={styles.buttonResetText}>Zerar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}