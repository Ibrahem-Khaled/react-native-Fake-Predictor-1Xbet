import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = ({ name }) => {
    return (
        <View style={styles.main}>
            <Text style={styles.txt}>{name}</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    main: {
        width: "100%",
        height: 60,
        backgroundColor: "red",
        justifyContent: "center",
        alignItems: "center"
    },
    txt: {
        fontWeight: "900",
        fontSize: 18,
        color: '#fff'
    },
})