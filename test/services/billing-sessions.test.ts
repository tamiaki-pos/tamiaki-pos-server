import app from '../../src/app';

describe('\'BillingSessions\' service', () => {
  it('registered the service', () => {
    const service = app.service('billing-sessions');
    expect(service).toBeTruthy();
  });
});
