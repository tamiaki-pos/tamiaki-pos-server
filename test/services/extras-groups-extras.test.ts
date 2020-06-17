import app from '../../src/app';

describe('\'extras-groups-extras\' service', () => {
  it('registered the service', () => {
    const service = app.service('extras-groups-extras');
    expect(service).toBeTruthy();
  });
});
