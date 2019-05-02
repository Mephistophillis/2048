import React, { Component } from 'react'
import Layout from 'UI/Layout'
import Field from 'UI/Field'
import ControllPanel from 'UI/ControllPanel'
import Button from 'UI/Button'
import Score from 'UI/Score'
import {
  moveCells,
  directions,
  initCells,
  removeAndIncreaseCells,
  populateField,
} from 'logic'

class App extends Component {
  state = this.getNewState()

  mapKeyCodeToDirection = {
    KeyW: directions.UP,
    KeyA: directions.LEFT,
    KeyS: directions.DOWN,
    KeyD: directions.RIGHT,
  }

  newGame = () => {
    this.setState(this.getNewState())
  }

  getNewState() {
    return {
      cells: initCells(),
      score: 0,
    }
  }

  componentDidMount() {
    document.addEventListener('keypress', this.handleKeyPress)
  }

  componentWillUnmount() {
    document.removeEventListener('keypress', this.handleKeyPress)
  }

  handleKeyPress = async e => {
    if (['KeyW', 'KeyA', 'KeyS', 'KeyD'].includes(e.code))
      this.setState(state => ({
        ...state,
        cells: moveCells(state.cells, this.mapKeyCodeToDirection[e.code]),
      }))

    await delay(100)
    this.setState(state => ({
      ...state,
      cells: removeAndIncreaseCells(state.cells),
    }))
    this.setState(state => ({
      ...state,
      cells: populateField(state.cells),
    }))
  }

  render() {
    const { cells, score } = this.state

    return (
      <Layout>
        <ControllPanel>
          <Button onClick={this.newGame}>New Game</Button>
          <Score>{score}</Score>
        </ControllPanel>
        <Field cells={cells} />
      </Layout>
    )
  }
}

const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

export default App
