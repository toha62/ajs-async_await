import GameSavingLoader from './GameSavingLoader';

(async () => {
  try {
    const obj = await GameSavingLoader.load();
    console.log(obj);
  } catch (err) {
    console.error(err);
  }
})();
