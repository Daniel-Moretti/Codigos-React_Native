import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./style";
import { Comida } from "../../components/Comida";
import { Bebida } from "../../components/Bebida";
import { useState } from "react";

export default function Home() {

    const [homens, setHomens] = useState('')
    const [mulheres, setMulheres] = useState('')
    const [criancas, setCriancas] = useState('')
    const [carne, setCarne] = useState('')
    const [margemCarne, setMargemCarne] = useState('')
    const [aperitivos, setAperitivos] = useState('')
    const [margemAperitivos, setMargemAperitivos] = useState('')
    const [totalGeralComida, setTotalGeralComida] = useState('')

    const [cerveja, setCerveja] = useState('')
    const [margemCerveja, setMargemCerveja] = useState('')
    const [agua, setAgua] = useState('')
    const [margemAgua, setMargemAgua] = useState('')
    const [refrigerante, setRefrigerante] = useState('')
    const [margemRefrigerante, setMargemRefrigerante] = useState('')
    const [totalGeralBebida, setTotalGeralBebida] = useState('')

    function calcComida() {

        let calcCarne = 0
        let calcAperitivos = 0

        if (homens != '') {
            calcCarne += (parseFloat(homens) * 400)
            calcAperitivos += (parseFloat(homens) * 150)
        }
        if (mulheres != '') {
            calcCarne += (parseFloat(mulheres) * 300)
            calcAperitivos += (parseFloat(mulheres) * 100)
        }
        if (criancas != '') {
            calcCarne += (parseFloat(criancas) * 200)
            calcAperitivos += (parseFloat(criancas) * 50)
        }

        const calcMargemCarne = calcCarne * 0.1
        const calcMargemAperitivo = calcAperitivos * 0.1
        const calcTotalGeralComida = calcCarne + calcAperitivos + calcMargemCarne + calcMargemAperitivo
        setCarne(calcCarne.toString())
        setMargemCarne(calcMargemCarne.toString())
        setAperitivos(calcAperitivos.toString())
        setMargemAperitivos(calcMargemAperitivo.toString())
        setTotalGeralComida(calcTotalGeralComida.toString())

        calcBebida()
    }

    function calcBebida() {
        let calcCerveja = 0
        let calcRefrigerante = 0
        let calcAgua = 0

        if (homens != '') {
            calcCerveja = (parseFloat(homens) * 4)

        }
        if (mulheres != '') {
            calcCerveja += (parseFloat(mulheres) * 2)
            calcRefrigerante = (parseFloat(mulheres) * 1.5)
            calcAgua = (parseFloat(mulheres) * 2)
        }
        if (criancas != '') {
            calcAgua += (parseFloat(criancas) * 2)
            calcRefrigerante += (parseFloat(criancas) * 1.5)
        }
        //const totalCarne = calcCarneHomens + calcCarneMulheres + calcCarneCriancas
        const calcMargemCerveja = (calcCerveja * 0.1) / 0.001
        const calcMargemRefrigerante = (calcRefrigerante * 0.1) / 0.001
        const calcMargemAgua = (calcAgua * 0.1) / 0.001
        const calcTotalGeralBebida = calcCerveja + calcRefrigerante + calcAgua + (calcMargemCerveja * 1000) + (calcMargemRefrigerante * 1000) + (calcMargemAgua * 1000)
        setCerveja(calcCerveja.toString())
        setMargemCerveja(calcMargemCerveja.toString())
        setRefrigerante(calcRefrigerante.toString())
        setMargemRefrigerante(calcMargemRefrigerante.toString())
        setAgua(calcAgua.toString())
        setMargemAgua(calcMargemAgua.toString())
        setTotalGeralBebida(calcTotalGeralBebida.toString())
    }

    function resetGeral() {
        setCarne('')
        setMargemCarne('')
        setAperitivos('')
        setMargemAperitivos('')
        setCerveja('')
        setMargemCerveja('')
        setRefrigerante('')
        setMargemRefrigerante('')
        setAgua('')
        setMargemAgua('')
        setTotalGeralBebida('')
    }

    return (
        <View style={styles.backgroundBody}>
            <View style={styles.backgroundTitle}>
                <Text style={styles.colorTitle}>ChurraSul</Text>
            </View>
            <View style={styles.inputsContainer}>
                <View >
                    <Text style={styles.title}>Homens</Text>
                    <TextInput style={styles.input}
                        keyboardType="numeric"
                        value={homens}
                        onChangeText={setHomens} />
                </View>
                <View >
                    <Text style={styles.title}>Mulheres</Text>
                    <TextInput style={styles.input}
                        keyboardType="numeric"
                        value={mulheres}
                        onChangeText={setMulheres} />
                </View>
            </View>

            <View style={styles.inputsContainer}>
                <View >
                    <Text style={styles.title}>Crianças</Text>
                    <TextInput style={styles.input}
                        keyboardType="numeric"
                        value={criancas}
                        onChangeText={setCriancas} />
                </View>
                <View >
                    <TouchableOpacity style={styles.button} onPress={calcComida}>
                        <Text style={styles.textButton}>Calcular</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.containerResultado}>
                <Text style={styles.titleResultado}>Resultado</Text>
            </View>
            <View style={styles.resultView}>
                <Text style={styles.resultText}>Realizamos o cálculo para </Text>
                <Text style={styles.resultText}>3 participantes </Text>
            </View>
            <Text style={styles.title}>Comida</Text>
            <View style={styles.containerTotais}>
                <Comida total={carne} extra={margemCarne} tipo="Carne" />
                <Comida total={aperitivos} extra={margemAperitivos} tipo="Aperitivo" />
                <View style={styles.boxTotal}>
                    <Text style={styles.fontResultTotal}>{totalGeralComida}g</Text>
                    <Text style={styles.fontTotal}>TOTAL</Text>
                </View>
            </View>
            <Text style={styles.title}>Bebida</Text>
            <View style={styles.containerTotais}>
                <Bebida total={cerveja} extra={Number(margemCerveja).toFixed(2)} tipo="Cerveja" />
                <Bebida total={agua} extra={Number(margemAgua).toFixed(2)} tipo="Água" />
                <Bebida total={refrigerante} extra={Number(margemRefrigerante).toFixed(2)} tipo="Refrigerante" />
            </View>
            <View style={styles.boxTotalBebidas}>
                <Text style={styles.textTotalBebidas}>{Number(totalGeralBebida).toFixed(2)} Litros </Text>
                <Text style={styles.textTotalBebidas}>Total </Text>
            </View>
            <View style={styles.viewButton}>
                <TouchableOpacity style={styles.buttonLimpar} onPress={resetGeral}>
                    <Text style={styles.textButton}>Limpar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}