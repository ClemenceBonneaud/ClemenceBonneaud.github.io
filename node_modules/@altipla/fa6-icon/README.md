
# fa6-icon

Vue 3 component to insert Font Awesome 6 icons.

> **USE OFFICIAL COMPONENT:** Font Awesome 6 has a complete implementation of the Vue 3 component now that it is out of beta. We recommend to use the official component instead: https://fontawesome.com/docs/web/use-with/vue/


## Install

```sh
npm i @altipla/fa6-icon
```


## Usage

Declare the `ac-icon` component in the main script of the app:

```js
import { createApp } from 'vue'
import { Icon } from '@altipla/fa6-icon'

import './icons'


let app = createApp(...) // your initialization
app.component(Icon.name, Icon)
app.mount(...) // your initialization
```

Icons are declared in a different file to make it easier to add or remove icons from the available list. Declare any icon you need there:

```js
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faTrash as fasTrash,
} from '@fortawesome/free-solid-svg-icons'


library.add(
  fasTrash,
)
```

Finally use the component as needed inside your app:

```vue
<template>
  <ac-icon solid>trash</ac-icon>
  <ac-icon duotone spin>spinner-third</ac-icon>
</template>

<script>
export default {
}
</script>
```


## Supported icons

There are multiple NPM libraries available from the `@fortawesome` organization if you have the Pro version. All of them are supported in this package.

|NPM package|
|-----------|
|`@fortawesome/free-solid-svg-icons`|
|`@fortawesome/pro-solid-svg-icons`|
|`@fortawesome/pro-regular-svg-icons`|
|`@fortawesome/pro-light-svg-icons`|
|`@fortawesome/pro-duotone-svg-icons`|
|`@fortawesome/pro-brands-svg-icons`|
