import positions from '../config/positions'
import { clone } from '../utils/arrObj'

import CellInterface from '../interfaces/cell'

const setCellSeleted = (table: Array<Array<Array<Array<CellInterface>>>>, pos: string) => {
  table = clone(table)

  table
    [positions[pos][0]]
    [positions[pos][1]]
    [positions[pos][2]]
    [positions[pos][3]]
    .selected =
  !table
    [positions[pos][0]]
    [positions[pos][1]]
    [positions[pos][2]]
    [positions[pos][3]]
    .selected;

  return table
}

export default setCellSeleted
