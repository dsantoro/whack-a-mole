import styled, { keyframes } from "styled-components";

const pulse = keyframes`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.2);
  }

  100% {
    transform: scale(1);
  }
`

export const Container = styled.div`
  animation: ${pulse} 2s linear infinite;
  margin-bottom: 3rem;
  pointer-events: none;
`

export const Title = styled.h1`
  font-size: 128px;
  transform: rotateZ(-15deg);
  text-align: center;
  line-height: -1rem;
`

export const Separator = styled.span`
  font-size: 138px;
  font-weight: bold;
  text-align: center;
  display: block;
  line-height: 3rem;
  position: relative;
  z-index: 10;
  color: white;
`