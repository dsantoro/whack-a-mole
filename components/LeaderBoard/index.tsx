import * as S from './style';

interface ILeaderBoard {
  scores: number[]
}

const LeaderBoard = ({ scores }: ILeaderBoard) => {
  return (
    <>
      <h3>Leaderboard</h3>

      <S.List>
        {scores.map((score: number, index: number) => <S.ListItem key={score}>{index + 1} - {score} points!</S.ListItem>)}
      </S.List>
    </>
  )
}

export default LeaderBoard;