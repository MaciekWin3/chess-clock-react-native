import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useContext } from 'react';
import AppLoading from 'expo-app-loading';
import { StyleSheet, Text, View, TouchableOpacity, Alert, Modal } from 'react-native';
import { useFonts, Arimo_400Regular, Arimo_700Bold } from '@expo-google-fonts/arimo';
import Menu from './components/menu';
import { Timer } from 'react-native-stopwatch-timer';

export default function App() {

  let winner = "white";

  const [ showModal, setShowModal] = useState(false);

  const [ whiteTimerDuration, setWhiteTimerDuration ] = useState(5000);
  const [ isWhiteTurn, setIsWhiteTurn ] = useState(false);
  const [ resetWhiteClock, setResetWhiteClock ] = useState(false);

  const [ blackTimerDuration, setBlackTimerDuration ] = useState(5000);
  const [ isBlackTurn, setIsBlackTurn ] = useState(false);
  const [ resetBlackClock, setResetBlackClock ] = useState(false);

  const setTimers = (timers) => {
  
    let white = parseInt(timers.whiteTimer);
    let black = parseInt(timers.blackTimer);

    setWhiteTimerDuration(white);
    setBlackTimerDuration(black);

    setResetWhiteClock(true);
    setResetBlackClock(true);

    setIsBlackTurn(false);
    setIsWhiteTurn(false);

    setResetWhiteClock(false);
    setResetBlackClock(false);

    setShowModal(false);

    console.log(whiteTimerDuration);
    console.log(blackTimerDuration)
  }

  const resetTimers = () => {
    
    setIsBlackTurn(false);
    setIsWhiteTurn(false);

    setResetWhiteClock(true);
    setResetBlackClock(true);
  }

  const openAndCloseModal = () => {
    setShowModal(!showModal);
  }

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

  const createThreeButtonAlert = (winner) =>
    Alert.alert(
    "Time is up!",
    "Winner: " + winner,
    [
        { text: "OK", onPress: () => {
            setResetBlackClock(true);
            setResetWhiteClock(true);       
          } 
        } 
    ]
  );

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
        <TouchableOpacity onPress={handleBlackPress} style={styles.blackOpacity}>
          <Timer
            totalDuration={whiteTimerDuration}
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
            }}
            //can call a function On finish of the time
            getTime={(time) => {
              //console.log(time);
            }}  
          />       
        </TouchableOpacity>              
      </View>
      <View style={styles.menu}>
        <Menu showModal={showModal} openAndCloseModal={openAndCloseModal} setTimers={setTimers} resetTimers={resetTimers} />
      </View>
      <View style={styles.whiteField}> 
        <TouchableOpacity onPress={handleWhitePress} style={styles.blackOpacity}>
          <Timer
            totalDuration={blackTimerDuration}
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
            }}
            //can call a function On finish of the time
            getTime={(time) => {
              //console.log(time);
              
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
  },
  whiteOpacity: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  blackOpacity: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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


