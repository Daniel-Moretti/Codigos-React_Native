import { useNavigation, useRoute } from "@react-navigation/native";
import { Button, Text, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

type RouteParams = {
    name : string,
    valor : number
}

export function Result() {

    const navigation = useNavigation()
    const route = useRoute()

    const objeto = route.params as RouteParams
    //igual
    const { name } = route.params as RouteParams


    function handleFinish() {
        navigation.navigate('home')
    }

    function handleBack() {
        navigation.goBack() //Desempilha uma tela como o botão "voltar" do aparelho.
    }

    return (
        <SafeAreaView >

            <Text >Cesul</Text>

            <Text >Olá, {objeto.name} {name}</Text>

            <Text >O número do cupom é: </Text>

            <Text >{objeto.valor} </Text>


            <View >
                <Button title="Voltar" color={'#e4091f'}
                    onPress={handleBack} />
                <Button title="Finalizar" color={'#01633D'}
                    onPress={handleFinish} />
            </View>
        </SafeAreaView>
    )
}