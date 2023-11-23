import { SafeAreaView } from "react-native-safe-area-context";
import { Text, TextInput, View, TouchableOpacity } from "react-native"
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation, useRoute } from "@react-navigation/native";
import { styles } from "./styles";
import { useState } from "react";
import { TextInputMask } from "react-native-masked-text"

type RouteParams = {
    name: string
}

export function PersonData() {

    const route = useRoute()
    const { name } = route.params as RouteParams

    const navigation = useNavigation()

    const [idade, setIdade] = useState('')
    const [cpf, setCpf] = useState('')
    

    //const handleIdadeChange = (text: string) => {
    // Converte o valor da string em um número e atualiza o estado
    //    setIdade(parseInt(text, 10));
    //  };

    function handleBack() {
        navigation.goBack() //Desempilha uma tela como o botão "voltar" do aparelho.
    }

    function handleNext() {

        navigation.navigate('VehicleData', { name, idade })
    }

    return (

        <SafeAreaView style={styles.background} >
            <LinearGradient colors={['#5374B6', '#f4b4b4']} style={styles.linearGradient}>
                <View >
                    <Text style={styles.textTitle} >SIMULACAR</Text>
                </View>

                <View style={styles.containerInputs}>

                    <Text style={styles.text} >Olá {name}, vamos realizar uma simulação para um seguro.</Text>

                    <View >
                        <Text style={styles.textInputs}>Informe seu CPF</Text>
                        <TextInputMask
                            style={styles.input}
                            value={cpf}
                            onChangeText={setCpf}
                            type={'cpf'}
                        />

                    </View>

                    <View >
                        <Text style={styles.textInputs}>Qual a sua idade?</Text>
                        <TextInput style={styles.input} keyboardType="numeric" value={idade} onChangeText={setIdade}></TextInput>
                    </View>


                </View>

                <TouchableOpacity style={styles.button} onPress={handleNext}>
                    <Text style={styles.buttonText} >Próximo</Text>
                </TouchableOpacity>

                <View >
                    <TouchableOpacity >
                        <Text style={styles.buttonVoltar} onPress={handleBack}>Voltar</Text>
                    </TouchableOpacity>
                </View>

            </LinearGradient>

        </SafeAreaView>

    )
}