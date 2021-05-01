import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import AppLoading from 'expo-app-loading';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import { useFonts, Arimo_400Regular, Arimo_700Bold } from '@expo-google-fonts/arimo';
import Menu from './components/menu';
import { Timer } from 'react-native-stopwatch-timer';

export default function App() {

  let winner = "white";

  const createThreeButtonAlert = (winner) =>
  Alert.alert(
  "Time is up!",
  "Winner: " + winner,
  [
      {
      text: "Ask me later",
      onPress: () => console.log("Ask me later pressed")
      },
      {
      text: "Cancel",
      onPress: () => console.log("Cancel Pressed"),
      style: "cancel"
      },
      { text: "OK", onPress: () => {
        console.log(winner);
          if(winner == "white"){
            console.log("działa");
            setIsBlackTurn(false);         
            setResetBlackClock(true);           
          }
          else{
            setIsWhiteTurn(false);
            setResetWhiteClock(true);
            console.log("xd");
          }          
        } 
      } 
  ]
);

  const [ whiteTimerDuration, setWhiteTimerDuration ] = useState(4000);
  const [ isWhiteTurn, setIsWhiteTurn ] = useState(false);
  const [ resetWhiteClock, setResetWhiteClock ] = useState(false);
  const [ showsMsWhite, setShowMsWhite ] = useState(false);

  const [ blackTimerDuration, setBlackTimerDuration ] = useState(4000);
  const [ isBlackTurn, setIsBlackTurn ] = useState(false);
  const [ resetBlackClock, setResetBlackClock ] = useState(false);

  const handleWhitePress = () => {
    setResetWhiteClock(false);
    setIsBlackTurn(!isBlackTurn);
    setIsWhiteTurn(false);
  }

  const handleBlackPress = () => {
    setResetBlackClock(false);
    setIsWhiteTurn(!isWhiteTurn);
    setIsBlackTurn(false);
  }


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
        <TouchableOpacity onPress={handleBlackPress}>
          <Timer
            totalDuration={blackTimerDuration}
            msecs = {true}
            //Time Duration
            start={isBlackTurn}
            //To start
            reset={resetBlackClock}
            //To reset
            options={blackFieldOptions}
            //options for the styling
            handleFinish={() => {
              //wygrana białych - ten timer działa białych ne
              winner = "white";  
              createThreeButtonAlert(winner);      
              setBlackTimerDuration(4000);
            }}
            //can call a function On finish of the time
            getTime={(time) => {
              console.log(time);
            }}  
          />       
        </TouchableOpacity>              
      </View>
      <View style={styles.menu}>
        <Menu />
      </View>
      <View style={styles.whiteField}> 
        <TouchableOpacity onPress={handleWhitePress}>
          <Timer
            totalDuration={whiteTimerDuration}
            msecs = {true}
            //Time Duration
            start={isWhiteTurn}
            //To start
            reset={resetWhiteClock}
            //To reset
            options={whiteFieldOptions}
            //options for the styling
            handleFinish={() => {   
              //wygrana czarnych
              winner = "black";
              createThreeButtonAlert(winner);
              setWhiteTimerDuration(4000);                     
            }}
            //can call a function On finish of the time
            getTime={(time) => {
              console.log(time);
              
            }}
          />       
        </TouchableOpacity>              
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

const whiteFieldOptions = {
  container: {
    padding: 5,
    borderRadius: 5,
    alignItems: 'center',
    
  },
  text: {
    fontFamily: 'Arimo_700Bold',
    color: '#263238',
    fontSize: 60
  },
};

const blackFieldOptions = {
  container: {
    padding: 5,
    borderRadius: 5,
    alignItems: 'center',
    
  },
  text: {
    fontFamily: 'Arimo_700Bold',
    color: '#f5f5f5',
    fontSize: 60
  },
};


