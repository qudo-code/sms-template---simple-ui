
[⬅ Back to 🍕](https://github.com/qudo-lucas/state-machine-ui)

![header](header.png)

# 🍕 Simple UI
Example of a simple UI utilizing [State Machine Snacks](https://github.com/qudo-lucas/state-machine-snacks) and [Plugin Components](https://github.com/qudo-lucas/sms-plugin---components).

| Script | Description |
| ---    | ---         |
| `npm run dev` | Start the dev server. |
| `npm run build` | Build project. |
| `npm run serve` | Serve a static copy of the build.|


```javascript
import sms from "state-machine-snacks";
import components from "sms-plugin---components";
import logger from "sms-plugin---logger";

import config from "./machine/machine.config.js";

// Create your service with 🍕.
const service = sms({
    config,

    plugins : [
        components(),
        logger(),
    ],
});

service.start();

export default service;
```
```javascript
import { component } from "sms-plugin---components";

import ViewOne from "shared/components/views/one.svelte";
import ViewTwo from "shared/components/views/two.svelte";

export default {
    initial : "resting",
    
    on : {
        GO_ONE : ".one",
        RESET  : ".resting",
    },

    states : {
        resting : {},
        one     : component(ViewOne, {
            on : {
                GO_TWO : ".two",
            },

            states : {
                two : component(ViewTwo),
            },
        }),
    },
};
```
