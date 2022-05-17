import { Injector } from '../lib/injector.js'
test('test injector', () => {
  const injector = new Injector(20);
  expect(injector.getPlasma()).toBe(80);
});