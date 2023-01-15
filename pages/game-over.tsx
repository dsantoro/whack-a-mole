import { useGame } from '@/context/GameContext';
import Link from 'next/link';
import { Background } from '@/components/Background/style';
import Container from '@/components/Container';
import Button from '@/components/Button';
import LeaderBoard from '@/components/LeaderBoard';

export default function GameOver() {
  const { leaderBoard, score, resetScore } = useGame();
  const sortedLeaderBoard = leaderBoard.sort((a: number, b: number): number => {
    if (a > b) return -1;
    if (a < b) return +1;
    return 0;
  });

  return (
    <Container>
      <Background />
      <h1>Game Over</h1>
      <h2> Your score {score}</h2>
      <Button path="/game" onClick={() => resetScore()}>Play again!</Button>
      <hr />
      <LeaderBoard scores={sortedLeaderBoard} />
    </Container>
  )
}
