import * as S from './style';

interface IContainer {
  children: React.ReactNode;
}

const Container = ({ children }: any) => {
  return (
    <S.Container>{children}</S.Container>
  )
}

export default Container