import CellInterface from '../interfaces/cell'

import ALPHABET from '../utils/aphabet'

interface MakeTableInterface {
  special?: Array<string>
  values?: { [key: string]: string }
  maybes?: { [key: string]: string }
}

const makeTable = ({ special, values, maybes }: MakeTableInterface) => {
  const TABLE: Array<Array<Array<Array<CellInterface>>>> = [];

  for (let r = 0; r < 3; r++) {
    const columns = []

    for (let c = 0; c < 3; c++) {
      const rowsOfColumns = []

      for (let rc = 0; rc < 3; rc++) {
        const columnsOfColumns: Array<CellInterface> = []

        for (let cc = 0; cc < 3; cc++) {
          const code = `${ALPHABET[((r*3)+rc)]}${(((c*3)+cc)+1)}`

          columnsOfColumns.push({
            id: code,
            selected: false,
            value: ((values && values[code]) || ''),
            maybe: ((maybes && maybes[code]) || ''),
            state: 'none',
            type: (special && special.includes(code) ? 'special' : 'default')
          })
        }

        rowsOfColumns.push(columnsOfColumns)
      }

      columns.push(rowsOfColumns)
    }

    TABLE.push(columns)
  }

  return TABLE
}

export default makeTable
