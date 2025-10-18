import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, ScrollView, TextInput, Button} from 'react-native';
import { useState } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator(); 

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={MainScreen}/>
        <Stack.Screen name='ViewDetails' component={ViewDetails}/>
      </Stack.Navigator>
    </NavigationContainer>
    
    
  );
}
 function MainScreen({navigation, route}: any){
  /*This is meant to create the components where thie information will stored for the purposes fo navigation or populating an array */
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [bandName, setBandName] = useState("");
  const [favSong, setFavSong] = useState("");

  return(
  <SafeAreaView>
    <View style={styles.container}  >
      <Text style={styles.Title}>Welcome to my revision </Text>
      <Text style={styles.lables}>What is your name?</Text>
      <TextInput placeholder='Please enter your first name 'style={styles.box} onChangeText={newText => setFirstName(newText)} />
      <TextInput style={styles.box}  placeholder='Please enter your last name ' onChangeText={newText => setLastName(newText)}/>
      <Text style={styles.lables}>What is your favourite band?</Text>
      <TextInput placeholder='Enter the name of the band.' style={styles.box} onChangeText={newText => setBandName(newText)}/>
      <TextInput style={styles.lables} placeholder='Enter your favourite song from this band ' onChangeText={newText => setFavSong(newText)}/>
      
      <StatusBar style="auto" />

      <Button title='Add User'
      onPress={() => {navigation.navigate('ViewDetails', { NameSend: firstName, SurnameSend: lastName, BandSend: bandName, SongSend: favSong }) ; 
        console.log(
          'First Name' + firstName+
          'Last Name' + lastName+
          'Band Name' + bandName+
          'Favourie Song' + favSong
        ) 

             
      }}
      />
    </View>
    </SafeAreaView>

  );
 }
 function ViewDetails({ route }: any){
  const { NameSend: NameGet, SurnameSend: SurnameGet, BandSend: BandGet, SongSend: SongGet } = route?.params || {};
  return(
    <View>
      <Text> Name: {NameGet} {SurnameGet}</Text>
    
      <Text> Band Name: {BandGet}</Text>
      <Text> Song Name: {SongGet}</Text>
    </View>
  );
 }

const styles = StyleSheet.create({
  container: {  
    flex: 1,
    backgroundColor: '#9cdff0ff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },

  box:{
    backgroundColor: '#be36962d',
    borderColor: '#e0386aff', 
    padding: 20,
    borderRadius:23

  },
  Title:{
    fontSize: 55,
    fontWeight: 500,
    fontStyle: 'italic'
  },
   
  lables:{
    fontSize: 20,
    fontWeight: 'medium', 
    color: 'rgba(48, 15, 124, 1)'
  }

  
});
