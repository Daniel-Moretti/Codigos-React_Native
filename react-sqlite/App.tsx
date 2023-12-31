import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { initDatabase } from './db/Database';
import { AddContacts } from './components/AddContacts';
import { ListContacts } from './components/ListContacts';
import { useState } from 'react';


initDatabase()

export default function App() {

  const [listRefreshKey, setListRefreshKey] = useState<number>(0);

  const refreshContactList = () => {
    setListRefreshKey((prevkey) => prevkey + 1)
  }
  return (
    <View style={styles.container}>
      <AddContacts onRefreshList ={refreshContactList}/>
      <ListContacts key={listRefreshKey}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50
  }
});