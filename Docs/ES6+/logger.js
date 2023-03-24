import { TYPE_ERROR, TYPE_LOG, TYPE_WARN } from "./constants";
function logger(log, type = TYPE_LOG) {
    console[type](log);
}

export default logger;