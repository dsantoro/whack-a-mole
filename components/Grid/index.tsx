import * as S from './style';

interface IGrid {
  children: React.ReactNode;
}

const Grid = ({ children }: IGrid) => {
  return (
    <S.Wrapper>{children}</S.Wrapper>
  )
}

export default Grid