import React from 'react';
import { StyleSheet, View, Button, Modal, Text, TextInput } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'
import { Formik } from 'formik';


export default function Menu({showModal, openAndCloseModal, setTimers, resetTimers}){

    return(
        <View style={styles.menu}>
            <Modal visible={showModal} animationType='slide'>
                <View style={styles.modal}>
                    <View style={styles.container}>
                        <Formik
                            initialValues={{
                                whiteTimer: 5000,
                                blackTImer: 5000,
                                showMoves: false
                            }}
                            onSubmit = {(values) => {
                                setTimers(values);
                            }}
                            >
                            {(props) => (
                                <View>
                                    <TextInput
                                    placeholder="5000"
                                    onChangeText={props.handleChange('whiteTimer')}
                                    style={styles.input}
                                    value={props.values.title} //?
                                    keyboardType='numeric'
                                    />
                                    <TextInput
                                    placeholder="5000"
                                    onChangeText={props.handleChange('blackTimer')}
                                    style={styles.input}
                                    value={props.values.title} //?
                                    keyboardType='numeric'
                                    />
                                    <Button title='Save changes' color='green' onPress={props.handleSubmit}/>
                                </View>
                            )}
                        </Formik>
                    </View>
                    <Button onPress={openAndCloseModal} title='close' color='red' />
                </View>
            </Modal>

            <MaterialIcons style={styles.icon} size={32} color="#333" name="replay" onPress={resetTimers}/>
                <Button title="Start" color="#d81b60"/>        
            <MaterialIcons style={styles.icon} size={32} color="#333" name="settings" onPress={openAndCloseModal} />
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
    },
    modal: {
        flex: 1,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        fontSize: 18,
        borderRadius: 6,
    },
    container: {
        flex: 1,
        padding: 20,
    },

})