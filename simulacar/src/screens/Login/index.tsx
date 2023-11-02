import { SafeAreaView } from "react-native-safe-area-context";
import { Text, TextInput, View, TouchableOpacity, Alert, Keyboard } from "react-native"
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from "./styles";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
/*
type RouteParams = {
    rstNamePassword?: string
}*/

export function Login() {

    //const route = useRoute()
    //const { rstNamePassword } = route.params as RouteParams

    const navigation = useNavigation()

    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    /*function updateNameAndPassword(rst: string) {
        setName(rst);
        setPassword(rst);
    }

    useEffect(() => {
        console.log("executou effect Login")
        updateNameAndPassword(rstNamePassword)

    }, [])*/


    function handleNext() {

        if (password == "cleitao") {
            setTimeout(() => {
                setName('')
                setPassword('')

            }, 600)
            navigation.navigate('PersonData', { name })
        } else {
            Alert.alert('Nome de usuário ou senha incorretos!!', 'Deseja tentar novamente?',
                [
                    {
                        text: 'Sim', style: 'cancel'
                    },
                    {
                        text: 'Não', style: 'cancel'
                    }
                ],
                { cancelable: false }
            )
            setPassword('')
        }
    }

    function lembrarSenha() {
        Alert.alert('A senha é "cleitao"', 'Tente novamente!!',
            [
                {
                    text: 'OK!'
                }
            ])
    }

    return (

        <SafeAreaView style={styles.background} >
            <LinearGradient colors={['#5374B6', '#f4b4b4']} style={styles.linearGradient}>
                <View >
                    <Text style={styles.textTitle} >SIMULACAR</Text>
                </View>

                <View style={styles.containerInputs}>
                    <View >
                        <Text style={styles.textInputs} >Usuário</Text>
                        <TextInput style={styles.input}
                            placeholder="Nome"
                            placeholderTextColor={'#32313174'}
                            value={name}
                            onChangeText={setName}></TextInput>
                    </View>
                    <View >
                        <Text style={styles.textInputs}>Senha</Text>
                        <TextInput style={styles.input}
                            placeholder="Senha"
                            secureTextEntry={true}
                            placeholderTextColor={'#32313174'}
                            value={password}
                            onChangeText={setPassword}></TextInput>
                    </View>

                    <TouchableOpacity style={styles.button} >
                        <Text style={styles.buttonText} onPress={handleNext}>Logar</Text>
                    </TouchableOpacity>
                </View>

                <View >
                    <TouchableOpacity >
                        <Text style={styles.buttonVoltar} onPress={lembrarSenha}>Esqueci minha senha</Text>
                    </TouchableOpacity>
                </View>

            </LinearGradient>

        </SafeAreaView>

    )
}