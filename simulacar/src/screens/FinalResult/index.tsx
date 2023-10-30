import { SafeAreaView } from "react-native-safe-area-context";
import { Text, TextInput, View, TouchableOpacity } from "react-native"
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation, useRoute } from "@react-navigation/native";
import { useState, useEffect } from "react";
import { styles } from "./styles";

type RouteParams = {
    name: string,
    nameCar: string,
    carYear: string,
    idade: string,

}

export function FinalResult() {

    const navigation = useNavigation()

    const route = useRoute()
    const { name, nameCar, carYear, idade } = route.params as RouteParams

    const [taxaPorIdade, setTaxaPorIdade] = useState<number>(0)
    const [taxaPorAno, setTaxaPorAno] = useState<number>(0)
    const [total, setTotal] = useState<number>(0)


    let valorBase = 1000

    console.log(total)
    useEffect(() => {
        //console.log("useeffect 01")

        if (parseInt(idade) < 22) {
            let taxa = valorBase * 0.2
            setTaxaPorIdade(taxa)

        } else if (parseInt(idade) >= 22 && parseInt(idade) <= 29) {
            //console.log("Chegou aqui")
            let taxa = valorBase * 0.18
            setTaxaPorIdade(taxa)

        } else {
            let taxa = (valorBase * 0.15) * -1
            setTaxaPorIdade(taxa)

        }

        if (parseInt(carYear) < 2000) {
            setTaxaPorAno(valorBase * 0.30)

        } else if (parseInt(carYear) >= 2000 && parseInt(carYear) <= 2009) {
            setTaxaPorAno(valorBase * 0.15)

        } else if (parseInt(carYear) >= 2010 && parseInt(carYear) <= 2015) {
            setTaxaPorAno(0)
        } else {
            setTaxaPorAno((valorBase * 0.10) * -1)

        }

    }, [])

    useEffect(() => {
        //console.log("useeffect 02")
        setTotal(valorBase + taxaPorIdade + taxaPorAno)
    }, [taxaPorAno, taxaPorIdade])


    function handleBack() {
        navigation.goBack() //Desempilha uma tela como o botão "voltar" do aparelho.
    }

    function handleInit() {
        setTaxaPorAno(0)
        setTaxaPorIdade(0)
        setTotal(0)
        navigation.navigate('Login')
    }

    return (

        <SafeAreaView style={styles.background} >
            <LinearGradient colors={['#5374B6', '#f4b4b4']} style={styles.linearGradient}>
                <View >
                    <Text style={styles.textTitle} >SIMULACAR</Text>
                </View>

                <View style={styles.containerResults}>
                    <View >
                        <Text style={styles.text} >Olá {name}, fizemos um orçamento para o seu veículo {nameCar}.</Text>
                    </View>

                    <View style={styles.boxResult}>
                        <Text style={styles.textBoxResult}>Base</Text>
                        <Text style={styles.textBoxResult}>R$ {valorBase.toFixed(2)}</Text>

                    </View>

                    <View style={styles.boxResult}>
                        <Text style={styles.textBoxResult}>por idade</Text>
                        <Text style={styles.textBoxResult}>R$ {taxaPorIdade.toFixed(2)}</Text>
                    </View>

                    <View style={styles.boxResult}>
                        <Text style={styles.textBoxResult}>por ano</Text>
                        <Text style={styles.textBoxResult}>R$ {taxaPorAno.toFixed(2)}</Text>
                    </View>

                    <View style={styles.boxResultTotal}>
                        <Text style={styles.textBoxResult}>Total</Text>
                        <Text style={styles.textBoxResult}>R$ {total.toFixed(2)}</Text>
                    </View>


                </View>
                <TouchableOpacity style={styles.button} onPress={handleInit}>
                    <Text style={styles.buttonText}>Finalizar</Text>
                </TouchableOpacity>

                <TouchableOpacity >
                    <Text style={styles.buttonVoltar} onPress={handleBack}>Voltar</Text>
                </TouchableOpacity>

            </LinearGradient>

        </SafeAreaView>

    )
}