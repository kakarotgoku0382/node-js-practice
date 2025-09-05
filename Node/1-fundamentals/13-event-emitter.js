const EventEmitter = require('events')

const customEmitter = new EventEmitter()

// there are to methods in eventEmitter, on() (listens event), and emit() (emits event) You register a "listener" (a callback function) that will be executed whenever that specific event is emitted
// 'response' is the event name here
// customEmitter.emit('response') //here emit is first so below on() will not be executed
customEmitter.on('response', (name, id) => {
    console.log(`data received user ${name} with id: ${id}`)
})

customEmitter.on('response', () => {
    console.log('some other logic here')
})

customEmitter.emit('response', 'john', 34)