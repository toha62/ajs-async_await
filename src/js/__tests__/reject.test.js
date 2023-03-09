import GameSavingLoader from '../GameSavingLoader';
import read from '../reader';

jest.mock('../reader');

beforeEach(() => {
  jest.resetAllMocks();
});

test('should throw', async () => {
  read.mockRejectedValue(new Error('Can`t read data'));

  await expect(GameSavingLoader.load()).rejects.toThrow();
});
