import { Manager } from '../lib/manager.js'

test('test manager: correct values ', () => {
  const manager = new Manager(['', '', '',20, 10,0, 100], true);
  expect(manager.valuesOk).toBeTruthy();
});

test('test manager: wrong values ', () => {
  const manager = new Manager(['', '', '', 20, 110,0, 100]);
  expect(manager.valuesOk).toBeFalsy();
});

test('test manager: processFlow function ', () => {
  const manager = new Manager(['', '', '',20, 10,0, 100], true);
  manager.processFlow();
  expect(manager.valuesOk).toBeTruthy();
});

test('test manager: processSpeedMax ', () => {
  const manager = new Manager(['', '', '', 20, 10,0]);
  manager.processSpeedMax();
  expect(manager.valuesOk).toBeTruthy();
});