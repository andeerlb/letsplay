import { FUT11_POSITIONS } from "@components/positionCard/Fut11PositionCard";
import { FUT7_POSITIONS } from "@components/positionCard/Fut7PositionCard";
import { FUTSAL_POSITIONS } from "@components/positionCard/FutsalPositionCard";
import { GAME_TYPE_VALUES } from "@constants/game";

export type GameType = typeof GAME_TYPE_VALUES[number];

export type Fut11PositionKey = keyof typeof FUT11_POSITIONS;
export type Fut7PositionKey = keyof typeof FUT7_POSITIONS;
export type FutsalPositionKey = keyof typeof FUTSAL_POSITIONS;

export type PositionKeyByGameType<T extends GameType> =
    T extends 'fut11' ? Fut11PositionKey :
    T extends 'fut7' ? Fut7PositionKey :
    T extends 'futsal' ? FutsalPositionKey :
    never;