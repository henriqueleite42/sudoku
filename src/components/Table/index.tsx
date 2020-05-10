import React from 'react';

import Block from './Block'

import CellInterface from '../../interfaces/cell'

import tableStyle from '../../style/general/table.module.scss'
import style from './styles.module.scss'

interface PropsInterface {
  blocks: Array<Array<Array<Array<CellInterface>>>>
  selectCell: Function
}

const Table: React.FC<PropsInterface> = ({ blocks, selectCell }) => {
  const Blocks: Array<JSX.Element> = []

  for (let rc = 0; rc < 3; rc++) {
    for (let rrcc = 0; rrcc < 3; rrcc++) {
      Blocks.push(<Block
        key={`${rc}${rrcc}`}
        cells={blocks[rc][rrcc]}
        selectCell={selectCell}
      />)
    }
  }

  return (
    <div className={`${tableStyle['table']} ${style['table']}`}>
      { Blocks }
    </div>
  )
}

export default Table
