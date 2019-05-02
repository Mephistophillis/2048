import { create } from './cellManager'

function populateField(cells) {
  const occupieldCoords = new Set()

  cells.forEach(cell => {
    occupieldCoords.add(cell.x * 4 + cell.y)
  })

  if (occupieldCoords.size === 16) return

  let x
  let y

  let startSize = occupieldCoords.size

  do {
    x = Math.floor(Math.random() * 3, 9)
    y = Math.floor(Math.random() * 3, 9)

    const sum = x * 4 + y
    occupieldCoords.add(sum)
  } while (startSize === occupieldCoords.size)

  return [...cells, create(x, y, 2)]
}

export { populateField }
