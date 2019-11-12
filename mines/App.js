
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Alert,
} from 'react-native';
import params from './src/params';
import MineField from './src/components/MineField';
import {
  createMineBoard,
  cloneBoard,
  openField,
  hadExplosion,
  wonGame,
  showMines,
  invertFlag,
  flagsUsed,
} from './src/functions';;

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = this.createState();
  }
  minesAmound = () => {
    const cols = params.getColumnsAmount();
    const rows = params.getRownsAmount();
    return Math.ceil(cols * rows * params.difficultLevel);
  }
  createState = () => {
    const cols = params.getColumnsAmount();
    const rows = params. getRownsAmount();
    return {
      board: createMineBoard(rows, cols, this.minesAmound()),
      won: false,
      lost: false,
    }
  }

  onOpenField = (row, column) => {
    const board = cloneBoard(this.state.board)
    openField(board, row, column)
    const lost = hadExplosion(board)
    const won = wonGame(board)

    if (lost) {
      showMines(board)
      Alert.alert('Perdeeeeu!', 'Que buuuurro!')
    }

    if (won) {
      Alert.alert('Parabéns', 'Você Venceu!')
    }

    this.setState({ board, lost, won })
  }

  onSelectField = (row, column) => {
    const board = cloneBoard(this.state.board)
    invertFlag(board, row, column)
    const won = wonGame(board)

    if (won) {
      Alert.alert('Parabéns', 'Você Venceu!')
    }

    this.setState({ board, won })
  }

  onLevelSelected = level => {
    params.difficultLevel = level
    this.setState(this.createState())
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Iniciando o Mines!</Text>
        <Text style={styles.instructions}>Tamanho da grade:
          {params.getRownsAmount()}x{params.getColumnsAmount()}</Text>
        <View style={styles.board}>
          <MineField board={this.state.board} onOpenField={this.onOpenField} onSelectField={this.onSelectField} />
        </View>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    fontSize: 15,
    textAlign: 'center',
    margin: 5,
  },
  board: {
    alignItems: 'center',
    backgroundColor: '#AAA',
  }
});