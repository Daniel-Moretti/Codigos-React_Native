import { SafeAreaView } from "react-native-safe-area-context";
import { Text, TextInput, View, TouchableOpacity } from "react-native"
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation, useRoute } from "@react-navigation/native";
import { useState, useEffect } from "react";
import { styles } from "./styles";
import BouncyCheckbox from "react-native-bouncy-checkbox";

type RouteParams = {
    name: string,
    nameCar: string,
    carYear: string,
    idade: string,
    carValue: string
}

let valorDolar = 5;

export function FinalResult() {

    const navigation = useNavigation()

    const route = useRoute()
    const { name, nameCar, carYear, idade, carValue } = route.params as RouteParams

    const [taxaPorIdade, setTaxaPorIdade] = useState<number>(0)
    const [taxaPorAno, setTaxaPorAno] = useState<number>(0)
    const [total, setTotal] = useState<number>(0)
    const [valorBase, setValorBase] = useState<number>(0)

    const [checkboxState, setCheckboxState] = useState(false)


    useEffect(() => {
        novoValorBase()
    }, [])

    useEffect(() => {
        calcularTaxas()
    }, [valorBase])

    const novoValorBase = () => {
        if (parseFloat(carValue) < 50000) {
            setValorBase(1000)
        } else if (parseFloat(carValue) >= 50000 && parseFloat(carValue) <= 100000) {
            setValorBase(1500)
        } else {
            setValorBase(2000)
        }


    }

    function calcularTaxas() {

        var taxaPorIdade = 0

        if (parseInt(idade) < 22) {
            taxaPorIdade = valorBase * 0.2
        } else if (parseInt(idade) >= 22 && parseInt(idade) <= 29) {
            taxaPorIdade = valorBase * 0.18
        } else {
            taxaPorIdade = (valorBase * 0.15) * -1

        }

        const subtotal = valorBase + taxaPorIdade

        var taxaPorAno = 0;
        if (parseInt(carYear) < 2000) {
            taxaPorAno = subtotal * 0.30;
        } else if (parseInt(carYear) >= 2000 && parseInt(carYear) <= 2009) {
            taxaPorAno = subtotal * 0.15;
        } else if (parseInt(carYear) >= 2010 && parseInt(carYear) <= 2015) {
            taxaPorAno = 0;
        } else {
            taxaPorAno = (subtotal * 0.10) * -1;
        }

        setTaxaPorIdade(taxaPorIdade)
        setTaxaPorAno(taxaPorAno)
        setTotal(valorBase + taxaPorIdade + taxaPorAno)

    }


    function handleBack() {
        navigation.goBack()
    }

    function handleInit() {
        setTaxaPorAno(0)
        setTaxaPorIdade(0)
        setTotal(0)
        navigation.navigate('Login')
    }

    const alteraCheckBox = () => {
        setCheckboxState(!checkboxState)

        converteParaDolar()

    }

    function converteParaDolar() {

        if (!checkboxState) {
            setValorBase(valorBase * valorDolar)

        } else {
            setValorBase(valorBase / valorDolar)

        }


        return

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
                    <BouncyCheckbox
                        size={25}
                        fillColor="blue"
                        unfillColor="#E6E6FA"
                        textStyle={{
                            color: '#000000',
                            textDecorationLine: 'none',
                            right: 9,
                            fontWeight: "bold"
                        }}
                        style={{ marginTop: 16 }}
                        //ref={(ref: any) => (bouncyCheckboxRef = ref)}
                        isChecked={checkboxState}
                        text="Converter para Dólar"
                        disableBuiltInState
                        onPress={alteraCheckBox}
                    />


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