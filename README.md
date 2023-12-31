
# Terminal Whisper - Node.js Chat Application

Welcome to the Terminal Whisper Chat Node.js Application! This simple chat allows users to communicate
anonymously in real-time using a terminal.


<svg width="20" height="20" xmlns="https://www.svgrepo.com/show/361365/terminal-bash.svg" fill="currentColor" class="bi bi-terminal" viewBox="0 0 16 16">
  <path d="M.75 0A.75.75 0 0 0 0 .75v14.5a.75.75 0 0 0 1.5 0V.75A.75.75 0 0 0 .75 0zM5 1.5a.5.5 0 0 0-1 0V14a.5.5 0 0 0 1 0V1.5zm2 .5a.5.5 0 0 0-1 0V14a.5.5 0 0 0 1 0V2zm6-1a.5.5 0 0 0-1 0V14a.5.5 0 0 0 1 0V1.5z"/>
</svg>


## Server Setup

### Prerequisites

- Node.js and npm installed on your machine.

### Server Installation

1. **Clone the GitHub repository:**

   ```
   git clone https://github.com/AnIntellectualBeing/Anonymous-Chat.git
   ```

2. **Navigate to the Server directory:**

   ```
   cd Terminal-Whisper
   ```

3. **Install server dependencies (including Socket.io):**

   ```
   # Update the package list and install Node.js and npm
   sudo apt update
   sudo apt install nodejs npm

   # Install socket.io as a dependency
   npm install socket.io
   ```

4. **Running the Server:**

   ```
   node server.js
   ```

   The server will be running on a default port (e.g., 3000).

## Client Setup

### Prerequisites

- Node.js and npm installed on the client machine.


### Client Installation

1. **Clone the GitHub repository on the client machine:**

   ```
   git clone https://github.com/AnIntellectualBeing/Anonymous-Chat.git
   ```

2. **Navigate to the Client directory:**

   ```
   cd Terminal-Whisper
   ```

3. **Install client dependencies (including Socket.io-client and readline):**

   ```
   # Update the package list and install Node.js and npm
   sudo apt update
   sudo apt install nodejs npm

   # Install socket.io-client and readline as dependencies
   npm install socket.io-client readline
   ```

4. **Edit the Socket.io server URL:**

   Open `client.js` in a text editor and locate the following line:

   ```javascript
   const socket = io('https://server.com');
   ```

   Replace `'https://server.com'` with the URL of your Socket.io server,
    for example, if you are using ngrok:

   ```javascript
   const socket = io('https://your-ngrok-url');
   ```

### Running the Client

1. **Start the client:**

   ```
   node client.js
   ```

2. **Start chatting!**
```
# Features

- Real-time anonymous chat.
- Simple command-line interface.
- Unique client identifiers for each user.

# Additional Notes

- For security reasons, it is recommended to use this application in a trusted environment.
- Customize the Socket.io server URL in the code based on your deployment.

# Contributing

Feel free to contribute to the project by submitting issues or pull requests on 
the https://github.com/AnIntellectualBeing/Terminal-Whisper.

# License

This project is licensed under the [MIT License](LICENSE).
```

