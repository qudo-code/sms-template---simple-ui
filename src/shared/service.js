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

