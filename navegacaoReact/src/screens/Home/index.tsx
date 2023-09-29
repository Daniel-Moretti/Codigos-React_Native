import { useNavigation } from "@react-navigation/native";
import { Button, Text, View } from "react-native";

export function Home() {

    const navigation = useNavigation()

    function handleNext() {
        navigation.navigate('register')
    }

    return (
        <View >

            <Text >CESUL</Text>

            <Button title="Próxima" color={'#01633D'}
                onPress={handleNext} />

        </View>
    )
}