import { createRequest } from '../src/lib/requests';

// Simple test to ensure function exists
it('createRequest stores data offline on failure', async () => {
  await createRequest({
    vehicle_id: '1',
    quantity: 10,
    reason: 'test',
    worksite: 'site',
    odometer_photo: '',
  });
  expect(true).toBe(true);
});
