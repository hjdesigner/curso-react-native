import React, { Component } from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from  'react-native';
import Padrao from '../estilo/Padrao';

export default class Contador extends Component {

  state = {
    numero: 0,
  }

  maisUm = () => {
    this.setState({
      numero: this.state.numero + 1,
    })
  }

  limpar = () => {
    this.setState({
      numero: 0,
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={Padrao.ex}>{this.state.numero}</Text>
        <TouchableHighlight onPress={this.maisUm} onLongPress={this.limpar}>
          <Text>Incrementar/Zerar</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});