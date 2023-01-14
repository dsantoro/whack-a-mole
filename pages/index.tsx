import { Background } from '@/components/Background/style';
import Container from '@/components/Container';
import TitleScreen from '@/components/TitleScreen';
import Button from '@/components/Button';

export default function Home() {
  return (
    <Container>
      <Background />
      <TitleScreen />
      <Button path="/game">Play!</Button>
    </Container>
  )
}
