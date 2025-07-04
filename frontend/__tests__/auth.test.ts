import { signIn } from '../src/lib/auth';

test('signIn rejects with error when credentials are missing', async () => {
  await expect(signIn('', '')).rejects.toBeTruthy();
});
