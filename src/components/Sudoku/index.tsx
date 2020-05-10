import React, { useState } from 'react';

import Table from '../Table'
import Totals from './Totals'
import Labels from './Labels'

import CellInterface from '../../interfaces/cell'

import makeTable from '../../functions/makeTable'
import setCellSelected from '../../functions/setCellSelected'

import style from './styles.module.scss'

const TABLE = makeTable({
  special: [
    'D4','D5','D6',
    'E4','E5','E6',
    'F4','F5','F6'
  ],
  values: {
    A1: '5',
    H2: '3',
    B8: '7',
    H8: '5',
    E5: '50',
    F6: '45'
  },
  maybes: {
    D1: '1234'
  }
})

const Sudoku: React.FC = () => {
  const [table, setTable] = useState<Array<Array<Array<Array<CellInterface>>>>>(TABLE)

  const selectCell = (pos: string) => setTable(setCellSelected(table, pos))

  return (
    <div className={style['container']}>
      <div className={`${style['labels']} ${style['colored']}`}>
        <Labels />

        <div className={style['children']}>
          <Table
            blocks={table}
            selectCell={selectCell}
          />
        </div>

        <Totals table={table} />
      </div>
    </div>
  )
}

export default Sudoku
