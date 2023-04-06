const { HomeFlowTest } = require("./flows/homeFlowTest");

const flow = new HomeFlowTest()

describe('teste', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('testando e2e', async () => {
    await flow.changeTema();
  });
})
