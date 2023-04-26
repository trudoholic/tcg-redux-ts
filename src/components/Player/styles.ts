import styled from "styled-components"
import {BLUE, GREEN, RED} from "../../utils/solarized";

const tiers = [GREEN, BLUE, RED] as const

export const StyledBox = styled.div<{
  $primary: boolean
  $tier: number
}>`
  --color: ${props => tiers[props.$tier]};
  background: ${props => props.$primary ? "var(--color)" : "white"};
  color: ${props => props.$primary ? "white" : "var(--color)"};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid var(--color);
  border-radius: 3px;
`

export const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
  //justify-content: space-evenly;
  //align-items: center;
  //color: white;
  //background-color: #888888;
`
