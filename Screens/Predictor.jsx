import { StyleSheet, Text, View, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react';
import Header from '../Components/Header'


export default function Predictor() {
    const [prediction, setPrediction] = useState('');
    const [predictionGenerated, setPredictionGenerated] = useState(false);

    const generatePrediction = () => {
        setPrediction(Math.random() * (35 - 1) + 1)
        setPredictionGenerated(true);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            generatePrediction();
        }, 10000);
        return () => clearInterval(interval);
    }, []);

    return (
        <View style={styles.main}>
            <Header name={'Welcome to Ishak App'} />
            <View>
                <Text style={styles.txt}>Contact us Via telegram: Telegram @XXXXXXXXX</Text>
                <Text style={styles.txt}>Contact us Via WhatsApp : +xxxxxxxxx</Text>
            </View>

            <View style={styles.subview}>
                {predictionGenerated ? (
                    <TextInput
                        style={styles.inbt}
                        value={parseFloat(prediction).toFixed(2) + '  X'}
                    />
                ) : (
                    <ActivityIndicator size={'large'} color={"#fff"} />
                )}
            </View>

            {predictionGenerated == false ?
                (<TouchableOpacity onPress={generatePrediction} style={styles.btn}>
                    <Text style={{ fontWeight: "bold", fontSize: 16, color: "#fff" }}>START</Text>
                </TouchableOpacity>) : null}

            <View />
        </View>
    )
}


const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center"
    },
    subview: {
        width: 200,
        height: 200,
        backgroundColor: "red",
        borderRadius: 200,
        justifyContent: "center",
        alignItems: "center"
    },
    txt: {
        fontWeight: "700",
        fontSize: 14,
        color: "gray"
    },
    inbt: {
        width: "100%",
        height: "100%",
        textAlign: "center",
        color: "#000",
        fontWeight: "900",
        fontSize: 18
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