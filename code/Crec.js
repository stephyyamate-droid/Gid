 // Crec.js
 // Core creator/initializer for Sync AI

import config from "./config.js";

class SyncCore {
  constructor() {
    this.name = config.app.name;
    this.version = config.app.version;
    this.ready = false;
  }

  initialize() {
    console.log(`Starting ${this.name} v${this.version}...`);

    this.loadFeatures();
    this.ready = true;

    console.log(`${this.name} is ready.`);
  }

  loadFeatures() {
    if (config.features.memory) {
      console.log("Memory system enabled.");
    }

    if (config.features.webSearch) {
      console.log("Web search enabled.");
    }

    if (config.features.voice) {
      console.log("Voice system enabled.");
    }

    if (config.features.fileUpload) {
      console.log("File uploads enabled.");
    }
  }

  status() {
    return {
      name: this.name,
      version: this.version,
      online: this.ready,
    };
  }
}

const Sync = new SyncCore();

export default Sync;
import Sync from "./Crec.js";

Sync.initialize();

console.log(Sync.status());
