export default class WinnerFinder {
  findWinners(carInstances) {
    const maxForwardCount = Math.max(
      ...carInstances.map(function (carInstance) {
        return carInstance.forwardCount;
      }),
    );
    return carInstances.filter(function (carInstance) {
      return carInstance.forwardCount === maxForwardCount;
    });
  }
}
