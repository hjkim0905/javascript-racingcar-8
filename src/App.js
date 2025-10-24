import RacingController from './controller/RacingController.js';

class App {
  async run() {
    const racingController = new RacingController();
    await racingController.run();
  }
}

export default App;
