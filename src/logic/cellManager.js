import { uniqueId } from 'lodash'

const cellStates = {
  IDLE: 'IDLE',
  MOVING: 'MOVING',
  DYING: 'DYING',
  INCREASE: 'INCREASE',
}

const create = (x, y, value) => ({
  x,
  y,
  value,
  id: uniqueId(),
  state: cellStates.IDLE,
})

export { create, cellStates }
