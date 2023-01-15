import styled from "styled-components";
import Link from "next/link";

export const Container = styled.div`
  display: flex;
`

export const Button = styled(Link)`
  padding: 1rem 3rem;
  border-radius: 15px;
  font-size: 24px;
  color: white;
  background-color: tomato;
  text-decoration: none;
`