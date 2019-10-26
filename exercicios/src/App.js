import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Simples from './components/Simples';

export default class App extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Simples texto='Hello React Native!!! o/' />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})