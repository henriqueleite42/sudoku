import React from 'react';

import CellInterface from '../../../../interfaces/cell'

import styles from './styles.module.scss'

interface PropsInterface extends CellInterface {
  selectCell: Function
}

const Cell: React.FC<PropsInterface> = ({ id, value, maybe, state, type, selected, selectCell }) => {
  const style = [
    styles['div'],
    styles[state],
    styles[type]
  ]

  if (selected) style.push(styles['selected'])

  return (
    <div
      className={style.join(' ')}
      onClick={() => selectCell(id)}
    >
      { !value && <span className={styles['maybe']}>{maybe}</span> }
      <span className={styles['value']}>{value}</span>
    </div>
  )
}

export default Cell
