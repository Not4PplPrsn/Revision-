import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, ScrollView, TextInput, Button} from 'react-native';

export default function App() {
  return (
    
    <View style={styles.container}>
      <Text style={styles.Title}>Welcome to my revision </Text>
      <Text style={styles.lables}>What is your name?</Text>
      <TextInput placeholder='Please enter your first and last name 'style={styles.box} ></TextInput>
      <Text style={styles.lables}>What is your favourite band?</Text>
      <TextInput placeholder='Enter the name of the band.' style={styles.box} ></TextInput>
      

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  box:{
    backgroundColor: '#af438fff',
    borderColor: '#e0386aff', 
    padding: 200

  },
  Title:{
    fontSize: 55,
    fontWeight: 500,
  },
   
  lables:{
    fontSize: 20,
    fontWeight: 'medium', 
    color: 'rgba(48, 15, 124, 1)'
  }

  
});
