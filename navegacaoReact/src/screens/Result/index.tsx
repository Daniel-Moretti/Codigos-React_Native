import { Button, Text, View } from "react-native";

export function Result() {
    return (
        <View >

            <Text >Cesul</Text>

            <Text >Olá, Daniel</Text>

            <Text >O número do cupom é: </Text>

            <Text >123456 </Text>


            <View >
                <Button title="Voltar" color={'#e4091f'} />
                <Button title="Finalizar" color={'#01633D'} />
            </View>
        </View>
    )
}