import { AreaSize, Direction, IBlock } from '../../types';
import { AREA_SIZE, DIRECTION, SIZE } from '../../consts';
import { generateRandomId, getRandomInt } from '../../utils';

const DIRECTIONS_COUNT = 4;
const STEPS_COUNT = {
  [AREA_SIZE.small]: 10,
  [AREA_SIZE.big]: 20,
};

const getOffset = (direction: Direction, matrixSize: number, targetIndex: number): number => {
  const arrayLength = Math.pow(matrixSize, 2);

  switch (direction) {
    case DIRECTION.top: {
      const offset = (-1) * matrixSize;

      // Checking the upper bound of the matrix
      if (targetIndex + offset < 0) return 0;

      return offset;
    }
    case DIRECTION.right: {
      const offset = 1;
      const line = Math.floor(targetIndex / matrixSize);

      // Checking the right side of the matrix
      if ((targetIndex - line * matrixSize) + offset >= matrixSize) return 0;

      return offset;
    }
    case DIRECTION.bottom: {
      const offset = matrixSize;

      // Checking the lower bound of the matrix
      if (targetIndex + offset >= arrayLength) return 0;

      return offset;
    }
    case DIRECTION.left: {
      const offset = -1;

      // Checking the left side of the matrix
      if (targetIndex + offset < 0 || targetIndex % matrixSize === 0) return 0;

      return offset;
    }
  }
};

const generateSteps = (matrixSize: number, startIndex: number, stepCount: number): { targetIndex: number, generatedSteps: Direction[] } => {
  let targetIndex = startIndex;

  const directionsArray = Object.values(DIRECTION);
  const generatedSteps: Direction[] = new Array(stepCount).fill(directionsArray[0]);

  let i = 0;
  while (i < stepCount) {
    const direction = directionsArray[getRandomInt(DIRECTIONS_COUNT)];
    const offset = getOffset(direction, matrixSize, targetIndex);

    if (offset === 0) continue;

    targetIndex += offset;

    generatedSteps[i] = direction;

    i++;
  }

  return {
    targetIndex,
    generatedSteps,
  };
};

const generateBlocks = (matrixSize: number, startIndex: number, targetIndex: number): IBlock[] => {
  const arrayLength = Math.pow(matrixSize, 2);
  return new Array(arrayLength).fill(0).map((_, i) => ({
    id: generateRandomId(),
    isStartedBlock: i === startIndex,
    isTargetBlock: i === targetIndex,
  }));
};

export const generateGame = (areaSize: AreaSize): { generatedSteps: Direction[], generatedBlocks: IBlock[] } => {
  const size = SIZE[areaSize];
  const stepCount = STEPS_COUNT[areaSize];

  const startBlockIndex = getRandomInt(Math.pow(size, 2));

  const { targetIndex, generatedSteps } = generateSteps(size, startBlockIndex, stepCount);
  const generatedBlocks = generateBlocks(size, startBlockIndex, targetIndex);

  return {
    generatedSteps,
    generatedBlocks,
  };
};
