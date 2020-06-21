import app from '../../src/app';

describe('\'OrderProducts\' service', () => {
  it('registered the service', () => {
    const service = app.service('order-products');
    expect(service).toBeTruthy();
  });
});
