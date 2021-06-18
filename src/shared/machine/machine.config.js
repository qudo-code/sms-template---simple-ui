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
