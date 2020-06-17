import app from '../../src/app';

describe('\'extras-groups\' service', () => {
  it('registered the service', () => {
    const service = app.service('extras-groups');
    expect(service).toBeTruthy();
  });
});
