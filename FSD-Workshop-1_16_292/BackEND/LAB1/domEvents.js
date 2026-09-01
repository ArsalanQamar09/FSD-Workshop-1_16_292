import { EventEmitter } from "node:events";

function createDomElement() {
  const emitter = new EventEmitter();

  return {
    addEventListener(eventName, callback) {
      emitter.on(eventName, callback);
    },
    removeEventListener(eventName, callback) {
      emitter.off(eventName, callback);
    },
    dispatchEvent(event) {
      emitter.emit(event.type, event);
    },
  };
}