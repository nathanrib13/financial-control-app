import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Header } from '../../components/Header/Header';
import { Balance } from '../../components/Balance/Balance';
import listAPI from '../../providers/api';
import { Movements } from '../../components/Movements/Movements';

export default function Dashboard() {
 
  return (
    <View style={styles.container}>
      <Header username={"Nathan"}/>
      <Balance balance={4555} expensives={855}/>
      <Text style={styles.title}>Transações</Text>
      <FlatList 
        style={styles.transactionsList}  
        data={listAPI} 
        keyExtractor={(item)=> String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({item})=> <Movements item={item}/>}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginStart: 14,
    marginTop: 14 
  },
  list: {
    marginStart: 14,
    marginTop: 14 
  },
  transactionsList: {
    marginStart: 14,
    marginTop: 14,
    marginEnd: 14 
  }
});
