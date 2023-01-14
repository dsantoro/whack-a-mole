import React, { useContext, useState, useCallback } from "react";

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
  const [leaderBoard, setLeaderBoard] = useState([10]);
  const updateScore = () => {
    setScore(prev => prev + 1)
  };

  const updateLeaderBoard = (score: number) => {
    setLeaderBoard(prev => [...prev, score])
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