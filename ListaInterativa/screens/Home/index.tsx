import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export default function Home(){
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require('./logo.png')} />
                <Text > teste </Text>
            </View>
            <View >
                <TextInput 
                    style={styles.input}
                    placeholder='Informe um participante.'
                    placeholderTextColor={'#fff'}
                    />

                <TouchableOpacity style={styles.button} > 
                    <Text style={styles.textButton} > + </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}