import React from 'react'
import { Button, Modal, StyleSheet, Text, View } from 'react-native'

const CustomDialog=({...props}) =>{
    console.log("hello")
    return (
        <View style={{ flex: 1 }}>
            <Modal
                transparent={true}>
                <View style={styles.centerView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Welcome to the forget screen</Text>
                        <Button title='Close' onPress={()=>{props.setShowModal(false)}} />
                    </View>
                </View>
            </Modal>
        </View>
    )
}
const styles = StyleSheet.create({
    centerView: {
        flex: 1,
        alignItems:'center',
        justifyContent:'center'

    },
    modalView:{
        backgroundColor:'#cccccc',
        padding:40,
        borderRadius:20,
        shadowColor:'black',
        elevation:5

    },
    modalText:{
        fontSize:20,
        color:'black'
    }
})
export default CustomDialog