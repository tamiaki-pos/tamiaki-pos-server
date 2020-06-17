import app from '../../src/app';

describe('\'products-extras-groups\' service', () => {
  it('registered the service', () => {
    const service = app.service('products-extras-groups');
    expect(service).toBeTruthy();
  });
});
