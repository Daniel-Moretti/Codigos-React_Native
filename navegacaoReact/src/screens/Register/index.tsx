import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

export function Register() {

    const navigation = useNavigation()

    const [name, setName] = useState('')

    function handleNext() {
        navigation.navigate('result', {name, valor:20})
    }

    function handleBack() {
        navigation.goBack() //Desempilha uma tela como o botão "voltar" do aparelho.
    }

    return (
        
        <SafeAreaView >

            <Text >Cesul</Text>
            <View >
                <Text >Informe seu nome</Text>
                <TextInput value={name} onChangeText={setName}/>
            </View>

            <View >
                <Text >Informe seu Sobrenome</Text>
                <TextInput />
            </View>

            <View >
                <Button title="Voltar" color={'#e4091f'}
                    onPress={handleBack} />
                <Button title="Próxima" color={'#01633D'}
                    onPress={handleNext} />
            </View>
        </SafeAreaView>
    )
}