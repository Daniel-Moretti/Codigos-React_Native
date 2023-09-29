import { Alert, FlatList, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles'
import { Participant } from '../../components/Participant';
import { useState } from 'react';

export default function Home() {

    const [participants, setParticipants] = useState<String[]>([]); //useState<String[]> vai tipar minha useState com o tipo String
    const [participantName, setParticipantName] = useState('');

    function handleParticipantAdd() {
        if (participantName.trim().length > 0) { //remove os espaços da variavel participante e testa se o tamanho dela é maior que zero

            if (participants.includes(participantName.trim())) { // .includes verifica se no array já existe alguma palavra igual a participantName
                Alert.alert("Problema", "-> Participante já existe")
                return setParticipantName('')
            }
            setParticipants([...participants, participantName.trim()])
            //.trim tira espaços antes e depois da palavra digitada .trimStart tira espaços no inicio .trimEnd tira espaços no final
            setParticipantName('')
        } else {
            Alert.alert("Problema ao adicionar participante", "-> Nome está vazio")
        }

    }

    function handleParticipantRemove(name: String) {
        Alert.alert('Remover', `Deseja remover o participante ${name}`,
            [
                {
                    text: 'Sim', onPress: () =>
                        // prevState é o estado atual da lista, ou seja, pega os dados da lista
                        // .filter serve para retornar somente os nomes diferentes ao que desejo remover
                        setParticipants(prevState => prevState.filter(partic => partic != name))
                    // igual a setParticipants(participants.filter( partic => partic != name))
                },
                {
                    text: 'Não', style: 'cancel'
                }
            ])
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Nome do Grupo</Text>
            <Text style={styles.data} > Quarta, 16 de agosto de 2023</Text>

            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder='Informe um participante.'
                    placeholderTextColor={'#656363b0'}
                    onChangeText={text => setParticipantName(text)}
                    value={participantName}
                    testID='inputParticipantName'
                />

                <TouchableOpacity style={styles.button}
                    onPress={handleParticipantAdd}
                    testID='buttonAdd'>
                    <Text style={styles.textButton} >+</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.title}>Participantes</Text>

            {/* <ScrollView > 

                {
                participants.map( participant => (
                    <Participant key={participant} name={participant} onRemove={handleParticipantRemove}/>
                    ))
                }
            </ScrollView> */}

            <FlatList
                data={participants}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                    <Participant key={item}
                        name={item}
                        onRemove={() => handleParticipantRemove(item)} />
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() =>
                    <Text style={styles.listEmpty}>Sem Participantes </Text>
                }

            />


        </View>

    )
}