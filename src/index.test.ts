import {expect, jest, test} from '@jest/globals';

test('renders main app component', async () => {
  const uri = global.uri;
  const response = await fetch(uri);
  const json = await response.json()
  
  expect(json.body).toBe('This is a response')
});
