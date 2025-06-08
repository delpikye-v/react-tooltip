<div align="center">
    <h1>react-tooltip-z</h1>
    <a href="https://github.com/delpikye-v/react-tooltip">react-tooltip-z</a>
    <br />
    <br />
    <b><a href="https://codesandbox.io/s/0bspg">LIVE EXAMPLE</a>
    </b>
</div>

---

[![NPM](https://img.shields.io/npm/v/react-tooltip-z.svg)](https://www.npmjs.com/package/react-tooltip-z)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
![Downloads](https://img.shields.io/npm/dt/react-tooltip.svg)

---

#### Description

+ It is wrap the tooltip for the element.

+ Customize tooltip `html/css/complex`

+ Append the tooltip outside the root. `portal element`.

---
#### Usage

Install the package

```js
npm install react-tooltip-z
```

Import the module in the place you want to use:
```js
import { Tooltip } from "react-tooltip-z";
// import { Tooltip, useTooltipContext } from "react-tooltip-z";

```

#### Snippet

##### simple

```js
<Tooltip
    // tooltipContent={'This is simple tooltip'}
    tooltipContent={<b>This is jsx<br /> Tooltip</b>} // or Component
    tooltipClassName="my-class"
    placement="right"
    // trigger="click"
    // onClick={() => alert('event active')} // myClick()
>
    <button>this is children</button>
</Tooltip>
```

<br />

##### manual + api

```js
// here is the sample, please update it exactly with your source

const [sync, setSync] = useState(false)
// fetch api // do something
fetchApi() {
    if (sync) {
        setSync(false)
        return
    }

    fetch('api').then(....).then(rs => {
        setTodo(todo)
        setSync(true)
    })
}

<Tooltip
    tooltipContent={<div>{todo.title}e<br />fds</div>}
    trigger="manual"
    placement='right'
    showSync={sync} // manual simple
>
    <button>Tooltip of todo</button>
</Tooltip>

<button onClick={fetchApi}>Fetch</button>
```

<br />

##### useTooltipContext + api

```js
// don't use nested context
// here is the sample, please update it exactly with your source

import { Tooltip, useTooltipContext } from "react-tooltip-z";

// ListData.js
<ul>
    {
        post.map(item => {
            return (
                <Tooltip
                    tagName="li"  // wrap all child
                    trigger="manual"
                    placement="right"
                >
                    <ListDataItem {...} />
                </Tooltip>
            )
        })
    }
</ul>

// ListDataItem.js
// use TooltipContext to update tooltip
const { showTooltip, hideTooltip, isShow, tooltipId} = useTooltipContext()

// do something and show tooltip
fetchApi() {
    showTooltip('tooltip data after fetch.')
}

<div
    onClick={fetchApi}
    onMouseLeave={hideTooltip}
>
    This is list data item index.
</div>

```

<br />

---

#### Props (mains)

| props                | type                          | description                                                           |
|----------------------|-------------------------------|-----------------------------------------------------------------------|
| tagName              | String                        | If you wrap all children component,  use this                         |
| tooltipClassName     | String                        |                                                                       |
| tooltipContent       | `String`/`Component`/ `jsx`   | Tooltip data                                                          |
| placement            | `top`/`right`/`left`/`bottom` | it relies on the element's height,  width and position to display.    |
| trigger              | `hover`/`click`/`manual`      | Default `hover`                                                       |
| backgroundColor      | String                        | Default `#282727`                                                     |
| tooltipColor         | String                        | Default `#ffffff`                                                     |
| delayShow            | Number `250` mini-second      | Time delay show tooltip                                               |
| display              | `fade`/`zoom`                 | Animate tooltip                                                       |
| limitWidth           | Boolean                       | Fix `max-width: 200px`. Default: `true`.                              |
| onShown              | function                      | Event after show                                                      |
| onHidden             | function                      | Event after hide                                                      |
| showSync             | Boolean                       | Simple trigger = manual                                               |
| open                 | Boolean                       | Show tooltip                                                          |
| hideIfResize         | Boolean                       | hide tooltip if resize screen  (Default `true`)                       |
| hideIfScroll         | Boolean                       | hide tooltip if scroll screen  (Default `false`)                      |
| centerArrow          | Boolean                       | Show arrow and tooltip on center element (Default false)              |
| forceHide            | any                           | when change forceHide, tooltip will be forced hidden (Default null)   |
| `...props`           | other                         | Other props of child elements                                         |

<br />

#### Note

```js

`top` || `right` || `bottom` || `left` || `placement`: position the element

`...props` here are the props added to the child components. (You should add on child)

`showSync` or `useTooltipContext`: should be used when trigger = `manual`
```

+ `placement`: if the position of the tooltip goes beyond the screen.
  It try will move to the right position to be visible.

<br />

#### Run

<br />

<b><a href="https://codesandbox.io/s/0bspg">LIVE EXAMPLE</a>

<br />

#### License
MIT
