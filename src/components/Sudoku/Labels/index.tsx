import React from 'react';

import ALPHABET from '../../../utils/aphabet'

import style from './styles.module.scss'

// Render
const Labels: React.FC = () => {
  const result: Array<JSX.Element> = [];

  for (let i = 0; i < 2; i++) {
    for (let c = 0; c < 9; c++) {
      let value = ""

      if (i < 1) value = (c + 1).toString()
      else value = ALPHABET[c]

      result.push(<div key={`${i}${c}`} className={style['label']}><span>{ value }</span></div>)
    }
  }

  return (
    <>
     { result }
    </>
  );
}

export default Labels;
