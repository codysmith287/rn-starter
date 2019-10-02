import React from "react";
import {Text, StyleSheet, View} from 'react-native';

const ComponentsScreen = () => {
    const myName = 'Cody';

    const styles = StyleSheet.create({
        textStyle: {
            fontSize: 45
        },
        nameText: {
            fontSize: 20
        }
    })

    return (
        <View>
            <Text style={styles.textStyle}>Getting started with React Native!</Text>
            <Text style={styles.nameText}>My name is {myName}</Text>
        </View>
    )
}

export default ComponentsScreen;