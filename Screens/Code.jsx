import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import Header from '../Components/Header'
import { useNavigation } from '@react-navigation/native'
import { FontAwesome } from '@expo/vector-icons';

const Code = () => {

    const nav = useNavigation()
    return (
        <View style={styles.main}>
            <Header name={'Welcome to Ishak App'} />
            <Text style={styles.txt}>To obtain the Activation code. Contact us Via telegram</Text>

            <TextInput
                placeholder='Code'
                style={styles.inbt}
                keyboardType='numeric'
            />
            <TouchableOpacity onPress={() => { nav.navigate('predictor') }} style={styles.btn}>
                <Text style={{ fontWeight: "bold", fontSize: 16, color: "#fff" }}>Submit</Text>
            </TouchableOpacity>
            <View style={{ flexDirection: "row", justifyContent: "space-evenly", alignItems: "center", width: "80%", margin: 30 }}>
                <FontAwesome name="telegram" size={35} color="#69beff" />
                <FontAwesome name="facebook-square" size={35} color="#69beff" />
            </View>
        </View>
    )
}

export default Code

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center"
    },
    txt: {
        fontWeight: "700",
        fontSize: 14,
        color: "gray"
    },
    inbt: {
        width: "50%",
        height: 50,
        borderWidth: 1,
        borderColor: 'red',
        borderRadius: 10,
        textAlign: "center",
        color: "#000",
        fontWeight: "900",
    },
    btn: {
        width: "60%",
        height: 50,
        borderRadius: 10,
        backgroundColor: "red",
        alignItems: "center",
        justifyContent: "center"
    },
})