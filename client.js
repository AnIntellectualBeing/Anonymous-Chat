const readline = require('readline');
const io = require('socket.io-client');

const socket = io('your-link');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Generate a unique identifier for this client
const clientId = Math.random().toString(36).substring(7);

console.log('Welcome to the Chat!');

// Listen for incoming messages
socket.on('message', (data) => {
  const { sender, message } = data;
  // Display messages with proper formatting
  process.stdout.write(`${sender}: ${message}\n`);
  rl.prompt();
});

// Take user input and send messages
rl.setPrompt('');
rl.prompt();

rl.on('line', (input) => {
  // Send messages with the client's unique identifier
  socket.emit('message', { sender: `You[${clientId}]`, message: input.trim() });
});

rl.on('close', () => {
  console.log('Chat closed. Goodbye!');
  process.exit(0);
});
