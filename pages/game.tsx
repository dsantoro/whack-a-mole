import React, { useState, useEffect } from 'react';
import Router from 'next/router';
import { useGame } from '@/context/GameContext';
import { useTimer } from '@/hooks/useTimer';
import Grid from "@/components/Grid";
import Square from "@/components/Square";
import Container from "@/components/Container";
import { Background } from '@/components/Background/style';
import FollowMouseImage from '@/components/FollowMouse';
import hammer from '../assets/WAM_Hammer.png';

interface ILogic {
  id: number;
  active: boolean
}

const logic = [
  {
    id: 1,
    active: false
  },
  {
    id: 2,
    active: false
  },
  {
    id: 3,
    active: false
  },
  {
    id: 4,
    active: false
  },
  {
    id: 5,
    active: false
  },
  {
    id: 6,
    active: false
  },
  {
    id: 7,
    active: false
  },
  {
    id: 8,
    active: false
  },
  {
    id: 9,
    active: false
  },
  {
    id: 10,
    active: false
  },
  {
    id: 11,
    active: false
  },
  {
    id: 12,
    active: false
  },
]

const randomSquare = (array: ILogic[], id: number) => {
  return array.map((item: any) => {
    if (item.id === id) {
      return { ...item, active: true }
    }
    return { ...item, active: false }
  })
};

const Game = () => {
  const { minutes, seconds, timesUp } = useTimer();
  const [data, setData] = useState<ILogic[]>(logic);
  const { score, updateLeaderBoard } = useGame()

  useEffect(() => {
    const interval = setInterval(() => {
      setData(randomSquare(data, Math.floor(Math.random() * data.length) + 1))
    }, 1000)
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (timesUp) {
      updateLeaderBoard(score);
      Router.push('/game-over');
    }
  }, [timesUp]);

  return (
    <>
      <FollowMouseImage src={hammer} />
      <Background />
      <Container>
        <h1>Score: {score}</h1>
        <h2>{minutes}:{seconds}</h2>
        <Grid>
          {data.map(item => {
            return (
              <Square key={item.id} isActive={item.active} squareId={item.id}>{item.id}</Square>
            )
          })}
        </Grid>
      </Container>
    </>
  )
}

export default Game