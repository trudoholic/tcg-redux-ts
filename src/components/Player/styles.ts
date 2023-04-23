import styled from "styled-components"

export const StyledBox = styled.div<{$primary: boolean}>`
  background: ${props => props.$primary ? "palevioletred" : "white"};
  color: ${props => props.$primary ? "white" : "palevioletred"};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
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
