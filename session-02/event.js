const EventEmitter = require("events")

class MyEmitter extends EventEmitter{}

const myEmitter = new MyEmitter();

// myEmitter.on("greeting", () => {
//     console.log('Hallo, selamat siang');
// });
myEmitter.once("greeting", () => {
    console.log('Hallo, selamat siang');
});

myEmitter.emit('greeting');
myEmitter.emit('greeting');

myEmitter.on('error', err => {
    console.log('telah terjadi error!');
});
myEmitter.emit('error', new Error("Whoops!"));

// listener 1
let listener1 = function listener1() {
    console.log('listener1 telah dibuat');
};

// listener 2
let listener2 = function listener2() {
    console.log('listener2 telah dibuat');
};

// hubungkan listener 1 dengan key "connection"
myEmitter.on("connection", listener1);

// hubungkan listener 2 dengan key "connection"
myEmitter.on("connection", listener2);

let eventListeners = EventEmitter.listenerCount(myEmitter, "connection");

console.log(eventListeners + " Listener(s) yang berhubungan dengan key connection");

myEmitter.emit("connection");