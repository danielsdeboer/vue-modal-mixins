## Overview

A couple of simple mixins to manage local modal state. One for the mount point (`has-modal`) and one for the modal itself (`is-modal`).

### Installation

```
npm i -s vue-modal-mixins
```

### has-modal

`has-modal` is a factory function:

```js
// Your Vue object
export default {
  mixins: [
    hasModal('myModal'),
  ],
}
```

Once you've included the mixin:

```html
<!-- For example. You make your modal component's API as you see fit. -->

<MyModal
  @hide-modal="hideModal($event.modalName)"
  :is-visible="modals.myModal.isVisible"
  modal-name="myModal"
/>
```

### is-modal

`is-modal` is just a static mixin that provides a prop, `modalName` and a method, `hideModal()`, which emits a `hide-modal` event. 

```html
<CloseModalButton
  @click="hideModal"
/>
```

It also attaches event listeners for the `escape` keycode (`27`) that closes the modal. The `closes-on-esc` prop controls whether this listener gets attached or not. It defaults to true, so you only have to set it when you don't want the functionality:

```html
<MyModal
  @hide-modal="hideModal($event.modalName)"
  :is-visible="modals.myModal.isVisible"
  :closes-on-esc="false"
  modal-name="myModal"
/>
```

### Or you could not use a modal at all

If you have the luxury, try literally anything else: https://modalzmodalzmodalz.com/

## Other Stuff

### License

This package is licensed under the MIT License. Do what you like.
