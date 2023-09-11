import { useEffect, useState } from "react";
import { Button, FlatList, Text, ToastAndroid, View } from "react-native";
import { deleteContact, getContacts } from "../../db/Database";
import { styles } from "./style";


export function ListContacts() {

    const [contacts, setContacts] = useState<{ _id: number, name: string, phone: string }[]>([]);

    const refreshList = async () => {

        const data = await getContacts()
        setContacts(data);
    }

    const handleDeleteContact = async (id: number) => {
        try {
            await deleteContact(id);
            ToastAndroid.show("Removido com sucesso", ToastAndroid.SHORT)
            refreshList();
        } catch (error: any) {
            console.error('Erro ao excluir o contato: ' + error.message);
        }
    };

    useEffect(() => {
        refreshList()
    }, [])

    return (
        <View style={styles.container}>
            <Text style={styles.title}> Lista de Contatos </Text>
            <FlatList
                data={contacts}
                keyExtractor={(contacts) => contacts._id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.contactItem}>
                        <Text style={styles.contactName}>{item.name}</Text>
                        <Text style={styles.contactPhone}>{item.phone}</Text>
                        <Button title="Excluir" 
                            onPress={() => handleDeleteContact(item._id)}
                            color={"#ff3358"}/>
                    </View>
                )}

            />
        </View>
    )
}