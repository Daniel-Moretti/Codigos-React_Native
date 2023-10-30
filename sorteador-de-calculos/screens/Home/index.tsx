import { Alert, Keyboard, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./style";
import { useState } from 'react'
import { RandomBox } from "../../components/RandomBox";

export function Home() {

    const [operacao, setOperacao] = useState('') //operador
    const [numberLeft, setNumberLeft] = useState('') //número sorteado à esquerda
    const [numberRight, setNumberRight] = useState('') //número sorteado à direita
    const [answerUser, setAnswerUser] = useState('') //reposta do usuário
    const [countRight, setCountRight] = useState<number>(0) //contador de acertos
    const [countWrong, setCountWrong] = useState<number>(0) //contador de erros
    const [points, setPoints] = useState<number>(0) //contador geral de pontos
    
    function sortearOperacao() {
        

        const listaOperacoes = ['+', '-', '*', '/']

        const randomOperacoes = Math.floor(Math.random() * 4)
        const randomNumberLeft = Math.floor(Math.random() * 20)
        const randomNumberRight = Math.floor(Math.random() * 20)

        setOperacao(listaOperacoes[randomOperacoes])
        setNumberLeft(randomNumberLeft.toString())
        setNumberRight(randomNumberRight.toString())
        
    }

    function funcOperacao(){
        
        Keyboard.dismiss() //usado para desabilitar o telado após clicar fora do botão

        if (operacao === '*'){
            const calc = parseFloat(numberLeft) * parseFloat(numberRight)
            functionCompareAnswer(calc)

        } else if (operacao === '/'){
            const calc = parseFloat(numberLeft) / parseFloat(numberRight)
            functionCompareAnswer(calc)

        } else if (operacao === '+'){
            const calc = parseFloat(numberLeft) + parseFloat(numberRight)
            functionCompareAnswer(calc)

        } else if (operacao === '-'){
            const calc = parseFloat(numberLeft) - parseFloat(numberRight)
            functionCompareAnswer(calc)

        }
        
    }

    function functionCompareAnswer(calc: number){
        
        if (calc === parseFloat(answerUser)){
            setPoints(points + 10)
            Alert.alert('Você ACERTOU!!', 'Deseja uma nova conta?', 
            [
                {
                    text: 'Sim', onPress: () => {
                        setOperacao('')
                        setNumberLeft('')
                        setNumberRight('')
                        setAnswerUser('') 
                        //setAnswerCorrect('')
                }
                },
                {
                    text: 'Não', style: 'cancel'
                }
            ])
            setCountRight(countRight + 1)

        } else {
            setPoints(points - 5)
            Alert.alert('Você ERROU!!', 'Deseja uma nova conta?', 
            [
                {
                    text: 'Sim', onPress: () => {
                        setOperacao('')
                        setNumberLeft('')
                        setNumberRight('')
                        setAnswerUser('') 
                }
                },
                {
                    text: 'Não', style: 'cancel'
                }
            ])
            setCountWrong(countWrong + 1)
        }
        
    }

    function reset(){
        setOperacao('')
        setAnswerUser('')
        setNumberLeft('')
        setNumberRight('')
        setCountRight(0)
        setCountWrong(0)
        setPoints(0)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Você tem {points} pontos</Text>
            <View style={styles.acertos}>
                <Text style={styles.certas}>Certas:   {countRight}</Text>
                <Text style={styles.erradas}>Erradas:   {countWrong}</Text>
            </View>
            <View style={styles.containerButtonSortear}>
                <TouchableOpacity style={styles.buttonSortear} onPress={sortearOperacao}>
                    <Text style={styles.buttonSortearText}>Sortear Desafio</Text>
                </TouchableOpacity>
            </View>
            <View >
                <Text style={styles.how}>Quanto é: </Text>
                <View style={styles.containerSorteador}>
                    <RandomBox sort={numberLeft}/>
                    <RandomBox sort={operacao}/>
                    <RandomBox sort={numberRight}/>
                </View>
                <Text style={styles.how}>Informe sua resposta: </Text>
                <View style={styles.viewResposta}>
                    <TextInput style={styles.input} 
                                keyboardType="numeric" 
                                value={answerUser}
                                onChangeText={setAnswerUser}/>
                    <TouchableOpacity style={styles.buttonValidate} onPress={funcOperacao}>
                        <Text style={styles.textButtonValidate}>Validar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonNewGame} onPress={reset}>
                        <Text style={styles.textButtonNewGame}>Novo Jogo</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}