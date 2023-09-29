import { Button, Text, TextInput, View } from "react-native";

export function Register() {
    return (
        <View >

            <Text >Cesul</Text>
            <View >
                <Text >Informe seu nome</Text>
                <TextInput />
            </View>

            <View >
                <Text >Informe seu Sobrenome</Text>
                <TextInput />
            </View>

            <View >
                <Button title="Voltar" color={'#e4091f'}/>
                <Button title="Próxima" color={'#01633D'}/>
            </View>
        </View>
    )
}