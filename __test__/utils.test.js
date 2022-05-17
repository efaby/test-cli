import { Utils } from '../utils/utils.js'

test('my test', () => {
  Utils.showLog('notice', 'message test');
  expect(1).toBe(1);
});