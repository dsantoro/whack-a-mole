import React, { useContext, useState } from "react";

const initalLeaderBoardData = [
  10, 20, 30, 40, 50, 60, 70, 80, 90, 100
]

interface IGameContext {
  score: number;
  updateScore: () => void;
  leaderBoard: number[];
  updateLeaderBoard: (score: number) => void;
  resetScore: () => void;
}

// @ts-ignore
export const GameContext = React.createContext<IGameContext>({});

export function useGame() {
  return useContext(GameContext);
}

export const GameProvider = ({ children }: any) => {
  const [score, setScore] = useState<number>(0);
  const [leaderBoard, setLeaderBoard] = useState(initalLeaderBoardData);
  const updateScore = () => {
    setScore(prev => prev + 1)
  };

  const updateLeaderBoard = (score: number) => {
    setLeaderBoard(prev => [...prev, score]);
  }

  const resetScore = () => {
    setScore(0);
  }
  return (
    <GameContext.Provider value={{ score, updateScore, updateLeaderBoard, leaderBoard, resetScore }}>
      {children}
    </GameContext.Provider>
  )
}