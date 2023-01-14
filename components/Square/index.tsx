import React from 'react';
import * as S from './style';
import { useGame } from '@/context/GameContext';
import Image from 'next/image';
import wack from '../../assets/WAM_Hole.png';
import mole from '../../assets/WAM_Mole.png';

interface ISquareProps extends React.HTMLAttributes<HTMLDivElement> {
  children: any;
  isActive: boolean;
  squareId: number;
}

const Square: React.FC<ISquareProps> = ({ isActive }) => {
  const { updateScore } = useGame()
  const smash = (isActive: boolean) => {
    if (isActive) {
      updateScore()
    }
  }

  return (
    // @ts-ignore
    <S.Container onClick={() => smash(isActive)} isActive={isActive}>
      {isActive ? <Image draggable={false} alt="Mole" src={mole} /> : <Image draggable={false} alt="Wacked" src={wack} />}
    </S.Container>
  )
}

export default Square;