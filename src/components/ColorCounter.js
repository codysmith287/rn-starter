import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const styles = StyleSheet.create({
  center: {
    alignItems: "center"
  },
  textStyle: {
    fontSize: 20
  }
});

const ColorCounter = ({ color, onIncrease, onDecrease }) => {
  return (
    <View style={styles.center}>
      <Text style={styles.textStyle}>{color}</Text>
      <Button onPress={() => onIncrease()} title={`Increase ${color}`} />
      <Button onPress={() => onDecrease()} title={`Decrease ${color}`} />
    </View>
  );
};

export default ColorCounter;
