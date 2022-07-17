import { AREA_SIZE, DIRECTION, GAME_STATUS, PLAYER_STATUS } from './consts';

export type Direction = typeof DIRECTION[keyof typeof DIRECTION];

export type AreaSize = typeof AREA_SIZE[keyof typeof AREA_SIZE];

export type GameStatus = typeof GAME_STATUS[keyof typeof GAME_STATUS];

export type PlayerStatus = typeof PLAYER_STATUS[keyof typeof PLAYER_STATUS];

export interface IBlock {
  id: string;
  isTargetBlock: boolean;
  isStartedBlock: boolean;
}
