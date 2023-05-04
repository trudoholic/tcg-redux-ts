import { StyledBox, StyledColumn } from "./styles";
import useFlow from "../../hooks/useFlow";
import {IPlayer} from "../../scripts/script01/players";

interface IProps {
  idx: number
  player: IPlayer
}

const Player = ({ idx, player }: IProps) => {
  const {
    curGame,
    curPlay,
    curBeat,
  } = useFlow()

  return (
    <StyledColumn>
      <StyledBox $tier={0} $primary={idx === curGame}>{player.name}</StyledBox>
      <StyledBox $tier={1} $primary={idx === curPlay}>{`${player.totalScore}`}</StyledBox>
      <StyledBox $tier={2} $primary={idx === curBeat}>{`${player.score}`}</StyledBox>
    </StyledColumn>
  )
}

export default Player