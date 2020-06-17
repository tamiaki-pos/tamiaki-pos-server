import app from '../../src/app';

describe('\'extras\' service', () => {
  it('registered the service', () => {
    const service = app.service('extras');
    expect(service).toBeTruthy();
  });
});
