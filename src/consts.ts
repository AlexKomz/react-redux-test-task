export const DIRECTION = {
  top: 'top',
  left: 'left',
  bottom: 'bottom',
  right: 'right',
} as const;

export const AREA_SIZE = {
  small: 'small',
  big: 'big',
} as const;

export const GAME_STATUS = {
  start: 'start',
  process: 'process',
  end: 'end',
} as const;

export const PLAYER_STATUS = {
  success: 'success',
  fail: 'fail',
  none: 'none',
} as const;

export const SIZE = {
  [AREA_SIZE.small]: 3,
  [AREA_SIZE.big]: 6,
} as const;
