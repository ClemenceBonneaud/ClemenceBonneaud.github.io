![Logo](http://dimko.org/images/vue-random-colors-logo.png)

# vue-random-colors

Vue 2.x directive for apply random colors to CSS properties of element.
By default directive use 216 web safe colors. More info at https://websafecolors.info
Colors could be re-defined by user, see options section below.


## Install

```bash
$ npm i --save vue-random-colors
```

And then

```javascript
import Vue from 'vue'
import VueRandomColor from 'vue-random-color'

Vue.use(VueRandomColor)
```

## Usage

Basic example

```vue
  <div v-random-color>
  ...
  </div>
```

## Options
* `property` _(string)_ - CSS property to apply color. { background | border | color }.  By default: background.
* `event` _(string)_ - Event which evoke color change. By default: mouseover.
* `default` _(string)_ - Default color which apply in case of mouseout or mouseleave. By default: 'ffffff'
* `colors` _(array)_ - List of colors defined by user.
* `transition` _(number)_ - Speed of CSS property transition.


## Example

```vue
  <div v-random-color="{
    colors: [ 'aaaaaa', 'cccccc', 'eeeeee' ],
    event: 'click',
    property: 'border',
    default: 'ff0000',
    transition: 0.5
  }">
  ...
  </div>
```

## Demo

Come soon

## License

MIT

