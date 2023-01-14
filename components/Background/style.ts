import Image from "next/image";
import styled from "styled-components";
import background from '../../assets/WAM_bg.jpg'

export const Background = styled(Image).attrs({
  fill: true,
  src: background,
  alt: "Whak a Mole Game"
})`
  z-index: -1;
  pointer-events: none;
`