import {AreaSize, Direction, GameStatus, IBlock, PlayerStatus} from '../../types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { generateGame } from './gameGenerator';
import { AREA_SIZE, GAME_STATUS, PLAYER_STATUS } from '../../consts';

type GameState = {
  areaSize: AreaSize;
  playerStatus: PlayerStatus;
  status: GameStatus;
  steps: Direction[];
  blocks: IBlock[];
};

const initialState: GameState = {
  areaSize: AREA_SIZE.small,
  playerStatus: PLAYER_STATUS.none,
  status: GAME_STATUS.start,
  steps: [],
  blocks: [],
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    updateAreaSize: (state, action: PayloadAction<AreaSize>) => {
      state.areaSize = action.payload;
    },

    initializeGame: state => {
      state.playerStatus = initialState.playerStatus;

      const { generatedSteps, generatedBlocks } = generateGame(state.areaSize);

      state.steps = generatedSteps;
      state.blocks = generatedBlocks;
    },

    updatePlayerStatus: (state, action: PayloadAction<PlayerStatus>) => {
      state.playerStatus = action.payload;
    },

    updateGameStatus: (state, action: PayloadAction<GameStatus>) => {
      state.status = action.payload;
    },
  },
});

export const { updateAreaSize, initializeGame, updatePlayerStatus, updateGameStatus } = gameSlice.actions;

export default gameSlice.reducer
