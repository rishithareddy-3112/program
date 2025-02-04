const EventEmitter = require('events');

class EventManagement extends EventEmitter {
  start() {
    this.emit('start', 'Event started');
  }

  inProgress() {
    this.emit('in-progress', 'Event in progress');
  }

  completed() {
    this.emit('completed', 'Event completed');
  }
}

module.exports = EventManagement;
