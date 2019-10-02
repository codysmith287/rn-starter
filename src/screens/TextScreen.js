import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const TextScreen = () => {
  const [name, setName] = useState("");
  return (
    <View style={styles.container}>
      <Text>Enter Name:</Text>
      <TextInput
        style={styles.textInput}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={text => setName(text)}
        value={name}
      />
      <Text>My name is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 15
  },
  textInput: {
    borderColor: "black",
    borderWidth: 1,
    marginVertical: 10
  }
});

export default TextScreen;
