import React from 'react'

import CellInterface from '../../../interfaces/cell'

import style from './styles.module.scss'

interface CalcTotalInterface {
  type: 'row' | 'column' | 'dig1' | 'dig2'
  rc?: number
  rrcc?: number
}

interface PropsInterface {
  table: Array<Array<Array<Array<CellInterface>>>>
}

const Totals: React.FC<PropsInterface> = ({ table }) => {
  const calcTotal = ({ type, rc, rrcc }: CalcTotalInterface) => {
    let total = 0;

    const pos = [2,1,0]

    for (let x = 0; x < 3; x++) {
      for (let xx = 0; xx < 3; xx++) {
        let value

        switch (type) {
          case 'row':
            value = parseInt(table[(rc as number)][x][(rrcc as number)][xx].value)
            break
          case 'column':
            value = parseInt(table[x][(rc as number)][xx][(rrcc as number)].value)
            break
          case 'dig1':
            value = parseInt(table[x][pos[x]][xx][pos[xx]].value)
            break
          case 'dig2':
            value = parseInt(table[x][x][xx][xx].value)
            break
        }

        if (!isNaN(value)) total += value
      }
    }

    return total
  }

  const result: Array<JSX.Element> = [];

  const pushResult = (total: number) => {
    let color = "yellow"

    if (total > 45) {
      color = "red"
    } else if (total === 45) {
      color = "green"
    } else if (total === 0) {
      color = "white"
    }

    result.push((
      <div key={Math.random()} className={style[color]}>
        <span>{total}</span>
      </div>
    ))
  }

  for (let i = 1; i < 3; i++) {
    pushResult(calcTotal({type: (`dig${i}` as 'dig1' | 'dig2')}))

    for (let rc = 0; rc < 3; rc++) {
      for (let rrcc = 0; rrcc < 3; rrcc++) {
        pushResult(calcTotal({
          type: i === 1 ? "row" : "column",
          rc,
          rrcc
        }))
      }
    }
  }

  return (
    <>
      { result }
    </>
  )
}

export default Totals
