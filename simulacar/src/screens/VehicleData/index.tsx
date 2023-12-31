import { SafeAreaView } from "react-native-safe-area-context";
import { Text, TextInput, View, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from "react-native"
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation, useRoute } from "@react-navigation/native";
import { styles } from "./styles";
import { useState } from "react";
import { TextInputMask } from "react-native-masked-text";


type RouteParams = {
    name: string,
    idade: string
}

export function VehicleData() {

    const route = useRoute()
    const { name, idade } = route.params as RouteParams

    const navigation = useNavigation()

    const [nameCar, setNameCar] = useState('')
    const [carYear, setCarYear] = useState('')
    const [carValue, setCarValue] = useState('')
    const [plateCar, setPlateCar] = useState('')


    function handleBack() {
        navigation.goBack() //Desempilha uma tela como o botão "voltar" do aparelho.
    }

    function handleNext() {
        navigation.navigate('FinalResult', { name, nameCar, carYear, idade, carValue })
    }



    return (
            <SafeAreaView style={styles.background} >
                <LinearGradient colors={['#5374B6', '#f4b4b4']} style={styles.linearGradient}>
                    <View >
                        <Text style={styles.textTitle} >SIMULACAR</Text>
                    </View>

                    <View style={styles.containerInputs}>
                        <View >
                            <Text style={styles.text} >Olá {name}, agora vamos solicitar os dados do seu veículo.</Text>
                        </View>
                        <View >
                            <Text style={styles.textInputs}>Qual seu carro?</Text>
                            <TextInput style={styles.input} value={nameCar} onChangeText={setNameCar}></TextInput>

                            <Text style={styles.textInputs}>Qual a placa do seu carro?</Text>
                            <TextInputMask
                                style={styles.input}
                                value={plateCar}
                                onChangeText={(text) => setPlateCar(text.toUpperCase())}
                                type={'custom'}
                                options={{
                                    mask: 'AAA-9A99',
                                }}
                            />

                            <Text style={styles.textInputs}>Qual o ano do seu carro?</Text>
                            <TextInput style={styles.input} keyboardType="numeric" value={carYear} onChangeText={setCarYear}></TextInput>

                            <Text style={styles.textInputs}>Qual o valor do seu carro?</Text>
                            <TextInput style={styles.input} keyboardType="numeric" value={carValue} onChangeText={setCarValue}></TextInput>
                        </View>


                    </View>

                    <TouchableOpacity style={styles.button} onPress={handleNext}>
                        <Text style={styles.buttonText} >Próximo</Text>
                    </TouchableOpacity>

                    <TouchableOpacity >
                        <Text style={styles.buttonVoltar} onPress={handleBack}>Voltar</Text>
                    </TouchableOpacity>

                </LinearGradient>

            </SafeAreaView>

    )
}