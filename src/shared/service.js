import sms from "state-machine-snacks";
import components from "sms-plugin---components";
import config from "./machine/machine.config.js";

// Create your service with 🍕.
const service = sms({
    config,

    plugins : [
        components(),
    ],
});

service.onTransition((state) => console.log({ state }));

service.start();

export default service;

