# Popup-v7
---

React popup component.

## Development

```
npm install
npm run start
```

## Example

http://localhost:8000/examples/normal.html

## Usage

```js
const anchor = (
    <div className='anchor tl'>右上角弹出</div>
);

ReactDom.render(
    <Popup anchor={ anchor } placement='tl'>
        <div>hello popup!</div>
    </Popup>,
    mountNode
);
```

## API

### Properties

| name | type | default | description |
| ---- | ---- | ------- | ----------- |
| className | string | '' | custom class name for user |
| visible | boolean | false | set popup visible. <br /> true is visible. false is invisible |
| anchor | domNode | null | position popup with that anchor. the popup will not be shown if the anchor is null |
| placement | string | 'tl' | the position of popup relative the anchor |
| closeBtn | boolean | false | the close button show or hide. it has not implemented now |
| width | number | 100 | the with of popup. In order to position correctly we recommend to use this property on your application |
| height | number | 50 | the with of popup. In order to position correctly we recommend to use this property on your application |
| offset | array | [0, 0] | Set the offset X and Y of popup's position relative anchor |
| showBtns | boolean | false | Show or Hide the confirme and cancel button. it has not implemented now |