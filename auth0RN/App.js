/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Text } from 'react-native';

import signin from './Auth';

const App = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [data, setData] = useState({});
  return (
    <View style={styles.wrapper}>
      <TextInput value={email} onChangeText={setEmail} style={styles.textInput} placeholder="Email" />
      <TextInput value={password} onChangeText={setPassword} style={styles.textInput} placeholder="Password" />
      <Button title="Sign In" onPress={() => signin(email, password, setData)} />
      <Text>{JSON.stringify(data)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 20,
  },
  textInput: {
    margin: 5,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#aaaaaa',
  },
});

export default App;
