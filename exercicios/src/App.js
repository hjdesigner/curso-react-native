import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Simples from './components/Simples';
import ParImpar from './components/ParImpar';

export default class App extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Simples texto='Hello React Native!!! o/' />
        <ParImpar numero={32} />
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