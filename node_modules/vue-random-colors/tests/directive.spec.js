const Mock = jest.fn();
const mock = new Mock();


const defaults = {
  property: 'background',
  event: 'mouseover',
  default: 'ffffff',
  transition: null
}


import {
  random,
  randomColor,
  getColor,
  checkValue,
  processValues
} from '../src/random-color.js'


describe('Test random', () => {
  test('Should return Number higher than zero', () => {
    var number = random(100);
    expect(number).toBeGreaterThan(0);
  });
  test('Should return Number lower or equal than passed count', () => {
    var number = random(100);
    expect(number).toBeLessThanOrEqual(100);
  });
});


describe('Test randomColor', () => {
  test('Should return web safe color without #', () => {
    var regexp = new RegExp(/[^0369cf]{6}/g);
    var color = randomColor();
    var result = color.match(regexp);
    expect(result).toBeNull();
  });
  test('Should return web safe color without #, length shoud be 6', () => {
    var color = randomColor();
    expect(color.length).toEqual(6);
  });
});


describe('Test getColor', () => {
  test('Empty call should return random color with #', () => {
    var regexp = new RegExp(/#[0369cf]{6}/g);
    var color = getColor();
    var result = color.match(regexp);
    expect(result).not.toBeNull();
  });
  test('Call with 1st argument return default color with #', () => {
    var color = getColor('cc0000');
    expect(color).toBe('#cc0000');
  });
  test('Call with empty 1st argument and list of colors should return color with #', () => {
    var regexp = new RegExp(/#[0123456789abcdef]{6}/g);
    var color = getColor(undefined,['aaaaaa','bbbbbb','cccccc']);
    var result = color.match(regexp);
    expect(result).not.toBeNull();
  });
});


describe('Test checkValue', () => {
  test('Passed object with event property, result should contain same prop with same value', () => {
    var result = checkValue('event', { event: 'click' });
    expect(result).toBe('click');
  });
  test('Passed object without event property, result should contain same prop with default value', () => {
    var result = checkValue('event', { });
    expect(result).toBe('mouseover');
  });
});


describe('Test processValues', () => {
  test('Empty call should return object with default values { background | mouseover | ffffff | null }', () => {
    var result = processValues();
    expect(result.propertyName).toBe('background');
    expect(result.eventName).toBe('mouseover');
    expect(result.defaultColor).toBe('ffffff');
    expect(result.transition).toBeNull();
  });
  test('Pass object with `property`, result should contain `propertyName` equalt to passed `event`', () => {
    var result = processValues({ property: 'background' });
    expect(result.propertyName).toBe('background');
  });
  test('Pass object with `event`, result should contain `eventName` equal to passed `event`', () => {
    var result = processValues({ event: 'click' });
    expect(result.eventName).toBe('click');
  });
  test('Pass object with `default`, result should contain `defaultColor` equal to passed `event`', () => {
    var result = processValues({ default: 'cc0000' });
    expect(result.defaultColor).toBe('cc0000');
  });
});
