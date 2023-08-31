import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { useState } from "react";

export default function Home(){

    const [height, setHeight] = useState('')
    const [weight, setWeight]=useState('')
    const [resultImc, setResultImc]=useState('')

    function imcCalculator(){
        
        const imc = parseFloat(weight) / (parseFloat(height) * parseFloat(height))
        

        if (imc < 18.5) {
            setResultImc("Baixo Peso")
        } else if (imc >= 18.5 && imc < 24.9) {
            setResultImc("Peso Normal")
        } else if(imc >= 25 && imc < 29.9) {
            setResultImc("Sobrepeso")
        } else if(imc >= 30 && imc < 34.9) {
            setResultImc("Obesidade grau I")
        } else if(imc >= 35 && imc < 39.9) {
            setResultImc("Obesidade grau II")
        } else if(imc > 40) {
            setResultImc("Obesidade grau III (obesidade mórbida)")        
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.containerTitle}>
                <Text style={styles.title}>Calculadora de IMC</Text>
                <Text style={styles.subTitle}>Descubra qual o seu índice de massa corporal</Text>
            </View>
            <View style={styles.containerInputs}>
                <View >
                    <Text style={styles.subTitle}>Peso (Kg)</Text>
                    <TextInput style={styles.input} 
                    placeholder="Ex: 70,5" 
                    keyboardType="numeric"
                    onChangeText={setWeight} 
                    value={weight}/>
                </View>
                <View>
                    <Text style={styles.subTitle}>Altura (m)</Text>
                    <TextInput style={styles.input} 
                    placeholder="Ex: 1,8" 
                    keyboardType="numeric"
                    onChangeText={setHeight} 
                    value={height}/>
                </View>
            </View>
            <View style={styles.boxButton}>
                <TouchableOpacity style={styles.buttonCalcular} onPress={imcCalculator}>
                    <Text style={styles.textButton}>CALCULAR</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.containerResult}>
                <Text style={styles.textResult}> Seu índice de massa corporal e:</Text>
                <Text >{resultImc}</Text>
            </View>
            <View style={styles.footer}>
                <Text style={styles.footerText}>CESUL</Text>
            </View>
        </View>
    )
}