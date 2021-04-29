import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'


export default function Menu(){
    return(
        <View style={styles.menu}>
            <MaterialIcons style={styles.icon} size={32} color="#333" name="replay"/>
                <Button title="Start" color="#d81b60"/>        
            <MaterialIcons style={styles.icon} size={32} color="#333" name="settings"/>
        </View>
    )
}

const styles = StyleSheet.create({
    menu: {
        //flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20
    },
    icon: {
        paddingHorizontal: 60
    }

})