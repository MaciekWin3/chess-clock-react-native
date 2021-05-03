import React from 'react';
import { StyleSheet, View, Button, Modal, Text, TextInput, Image } from 'react-native';
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons'
import { Formik } from 'formik';
import CustomButton from '../components/button';


export default function Menu({showModal, openAndCloseModal, setTimers, resetTimers}){

    return(
        <View style={styles.menu}>
            <Modal visible={showModal} animationType='slide'>           
                <View style={styles.modal}>      
                <FontAwesome5 style={styles.logo} size={50} color="#333" name="chess"/>         
                    <View style={styles.container}>
                        <Formik
                            initialValues={{
                                whiteTimer: 5000,
                                blackTimer: 5000,
                                showMoves: false
                            }}
                            onSubmit = {(values) => {
                                setTimers(values);
                            }}
                            >
                            {(props) => (
                                <View>
                                    <Text style={styles.text}>White Timer</Text>
                                    <TextInput
                                        placeholder="5000"
                                        onChangeText={props.handleChange('whiteTimer')}
                                        style={styles.input}
                                        value={props.values.title} //?
                                        keyboardType='numeric'
                                    />
                                    <Text style={styles.text}>Black Timer</Text>
                                    <TextInput
                                        placeholder="5000"
                                        onChangeText={props.handleChange('blackTimer')}
                                        style={styles.input}
                                        value={props.values.title} //?
                                        keyboardType='numeric'
                                    />
                                    <View style={styles.inputsContainer}>
                                        <Text>H:</Text>
                                        <TextInput
                                            placeholder="5000"
                                            onChangeText={props.handleChange('blackTimer')}
                                            style={styles.input}
                                            value={props.values.title} //?
                                            keyboardType='numeric'
                                        />
                                        <Text>M:</Text>
                                        <TextInput
                                            placeholder="5000"
                                            onChangeText={props.handleChange('blackTimer')}
                                            style={styles.input}
                                            value={props.values.title} //?
                                            keyboardType='numeric'
                                        />
                                        <Text>S:</Text>
                                        <TextInput
                                            placeholder="5000"
                                            onChangeText={props.handleChange('blackTimer')}
                                            style={styles.input}
                                            value={props.values.title} //?
                                            keyboardType='numeric'
                                        />
                                    </View>
                                    <CustomButton text='Save changes' color='green' onPress={props.handleSubmit}/>
                                    <Text></Text>
                                    <CustomButton text='Close' color='red' onPress={openAndCloseModal}/>
                                </View>
                            )}
                        </Formik>
                    </View>
                    
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
        paddingHorizontal: 60,
        alignSelf: 'center'
    },
    logo: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 18,
        borderWidth: 1,
        borderColor: '#f2f2f2',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center',
    },
    modal: {
        flex: 1,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        paddingVertical: 10,
        fontSize: 18,
        borderRadius: 6,
        margin: 12,
        flex: 1
    },
    container: {
        flex: 1,
        padding: 20,
    },
    text: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        fontWeight: 'bold'
    },
    inputsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        //justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    }
})