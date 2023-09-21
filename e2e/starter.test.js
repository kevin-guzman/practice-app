describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have welcome screen', async () => {
    await expect(element(by.text('Register user'))).toBeVisible();
  });

  it('should write a good age', async () => {
    await expect(element(by.id('age'))).toBeVisible();
    await element(by.id('age')).typeText('12')
  });

  it('should write a bad age', async () => {
    await expect(element(by.id('age'))).toBeVisible();
    await element(by.id('age')).typeText('-12')
    await expect(element(by.text('Error: age must be a positive number'))).toBeVisible();
  });

  // it('should show hello screen after tap', async () => {
  //   await element(by.id('hello_button')).tap();
  //   await expect(element(by.text('Hello!!!'))).toBeVisible();
  // });

  // it('should show world screen after tap', async () => {
  //   await element(by.id('world_button')).tap();
  //   await expect(element(by.text('World!!!'))).toBeVisible();
  // });
});
