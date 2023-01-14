import styled from "styled-components";
import Image from "next/image";
import { isPropertySignature } from "typescript";

export const Hammer = styled(Image)`
  pointer-events: none;
  position: absolute;
`