import { StatusBar } from 'expo-status-bar';
import React from 'react';
import AppLoading from 'expo-app-loading';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts, Arimo_400Regular, Arimo_700Bold } from '@expo-google-fonts/arimo';
import Menu from './components/menu';

export default function App() {

  let [fontsLoaded] = useFonts({
    Arimo_400Regular,
    Arimo_700Bold
  })

  if(!fontsLoaded){
    return <AppLoading />
  }
  return (
    <View style={styles.container}>
      <View style={styles.blackField}>
        <Text style={styles.blackFieldText}>10:12</Text>
      </View>
      <View style={styles.menu}>
        <Menu />
      </View>
      <View style={styles.whiteField}>
        <Text style={styles.whiteFieldText}>8:12</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: 'center',
    justifyContent: 'center',    
  },
  blackField: {
    backgroundColor: '#263238',
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{ rotate: '180deg'}],
    flex: 5
  },
  whiteField: {
    backgroundColor: '#fafafa',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 5
  },
  menu: {
    backgroundColor: '#78909c',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 2
  },
  blackFieldText: {
    fontFamily: 'Arimo_700Bold',
    color: '#f5f5f5',
    fontSize: 70
  },
  whiteFieldText: {
    fontFamily: 'Arimo_700Bold',
    color: '#263238',
    fontSize: 70
  }
});
