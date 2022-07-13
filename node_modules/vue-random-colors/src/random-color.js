const propertyMap = {
  color: 'color',
  background: 'backgroundColor',
  border: 'borderColor'
}


const transitionMap = {
  color: 'color',
  background: 'background-color',
  border: 'border-color'
}


const defaults = {
  property: 'background',
  event: 'mouseover',
  default: 'ffffff',
  transition: null
}


export const random = function (count) {
  return Math.floor(Math.random() * Math.floor(count))
}


export const randomColor = function () {
  const safeColorParts = ['00','33','66','99','cc','ff'];
  const count = safeColorParts.length;
  return safeColorParts[random(count)] + safeColorParts[random(count)] + safeColorParts[random(count)];
}


export const getColor = function (defaultColor, colors) {
  var color = colors ? colors[random(colors.length)] : randomColor();
  var colorOut = defaultColor ? defaultColor : color;
  return '#' + colorOut;
}


export const checkValue = function (prop, values) {
  return values && values[prop] ? values[prop] : defaults[prop];
}


export const processValues = function (values) {
  var output = {
    propertyName: checkValue('property', values),
    eventName: checkValue('event', values),
    defaultColor: checkValue('default', values),
    transition: checkValue('transition', values)
  }
  if (values && values.colors && Array.isArray(values.colors) && values.colors.length > 0) {
    output.colors = values.colors;
  }
  return output;
}


export default {
  bind: function (element, context) {
    var { propertyName, eventName, colors, defaultColor, transition } = processValues(context.value);
    var eventHandler = function (defaultColor) {
      return function () {
        element.style[propertyMap[propertyName]] = getColor(defaultColor, colors);
      }
    }
    if (transition) {
      element.style.transition = transitionMap[propertyName] + ' ' + transition + 's';
    }
    element.addEventListener(eventName, eventHandler());
    if (eventName == 'mouseover') {
      element.addEventListener('mouseout', eventHandler(defaultColor));
    }
    if (eventName == 'mouseenter') {
      element.addEventListener('mouseleave', eventHandler(defaultColor));
    }
  }
}
