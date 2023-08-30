import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Products } from "../../components/Products";
import { useState } from "react";

export default function Home() {

    const [productList, setProductList] = useState<String[]>([]);
    const [productName, setProductName] = useState('');

    function handleProductAdd() {
        if(productName.trim().length > 0) {
            if(productList.includes(productName.trim())) {
                Alert.alert("Problema", "-> Produto já existe")
                return setProductName('')
            }
            setProductList([...productList, productName.trim()])
            setProductName('')
        }else {
            Alert.alert("Problema ao adicionar produto", "-> Nome está vazio")
        }
    }

    function handleProductRemove(name: String){
        console.log("chegou aqui")
        Alert.alert('Remover', `Deseja remover ${name}`, 
            [
                {
                    text: 'Sim', onPress: () => 
                    setProductList(productList.filter( prod => prod != name))
                },
                {
                    text: 'Não', style: 'cancel'
                }
            ])
    }

    return (
        <View style= {styles.container}>
            <Text style= {styles.title}> Lista de Compras</Text>
            <Text style= {styles.date}>Domingo, 27 de agosto de 2023 </Text>

            <View style={ styles.add}> 
                <TextInput style= {styles.input} placeholder="Informe um produto" 
                placeholderTextColor={'#ffffff74'} 
                onChangeText={text => setProductName(text)}
                value={productName}/>

                <TouchableOpacity style={styles.button} onPress={handleProductAdd}>
                    <Text style={styles.buttonText}>ADICIONAR</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.title}>Produtos</Text>

            <FlatList 
            data={productList}
            keyExtractor={(item) => item}
            renderItem={ ({item}) => (
                <Products key={item} 
                            name={item} 
                            onRemove={() => handleProductRemove(item)}/>
            )}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={() => 
                <Text style={styles.listEmpty}>Sem Participantes </Text>
            }

            />
        </View>

    )
}