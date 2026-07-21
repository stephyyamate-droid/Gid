// config.js

const SyncConfig = {
  app: {
    name: "Sync",
    version: "1.0.0",
    description: "Your intelligent AI assistant",
  },

  ai: {
    provider: "OpenAI", // Change to your provider
    model: "gpt-4.1",
    temperature: 0.7,
    maxTokens: 4096,
  },

  server: {
    port: 3000,
    host: "localhost",
  },

  features: {
    memory: true,
    webSearch: false,
    imageGeneration: false,
    voice: false,
    fileUpload: true,
  },

  security: {
    apiKey: process.env.AI_API_KEY,
  },

  theme: {
    primaryColor: "#4F46E5",
    darkMode: true,
  },
  import config from "./config.js";

console.log(config.app.name); // Sync
console.log(config.ai.model); // gpt-4.1
};

export default SyncConfig;
