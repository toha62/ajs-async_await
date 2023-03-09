import read from './reader';
import json from './parser';

export default class GameSavingLoader {
  static async load() {
    const buffer = await read();
    const resultString = await json(buffer);

    return JSON.parse(resultString);
  }
}
