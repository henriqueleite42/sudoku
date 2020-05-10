import React from 'react';

import Cell from './Cell'

import CellInterface from '../../../interfaces/cell'

import tableStyle from '../../../style/general/table.module.scss'
import style from './styles.module.scss'

interface PropsInterface {
  cells: Array<Array<CellInterface>>
  selectCell: Function
}

const Block: React.FC<PropsInterface> = ({ cells, selectCell }) => {
  const Cells: Array<JSX.Element> = []

  for (let rc = 0; rc < 3; rc++) {
    for (let rrcc = 0; rrcc < 3; rrcc++) {
      Cells.push(<Cell
        key={`${rc}${rrcc}`}
        {...cells[rc][rrcc]}
        selectCell={selectCell}
      />)
    }
  }

  return (
    <div className={`${tableStyle['table']} ${style['block']}`}>
      { Cells }
    </div>
  )
}

export default Block
