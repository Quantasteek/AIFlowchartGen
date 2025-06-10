# AI Flowchart Generator

A web application that generates flowcharts from natural language descriptions using Google's Gemini AI API. The application features a modern UI with interactive controls for viewing and manipulating the generated flowcharts.

## Features

- 🤖 Natural language to flowchart conversion using Gemini AI
- 🎨 Modern, responsive UI with blue-red gradient theme
- 🔍 Interactive flowchart controls:
  - Zoom in/out
  - Pan navigation
  - Fullscreen mode
- 📋 Copy Mermaid code functionality
- 🔒 Secure API handling (API key never exposed to client)
- 🎯 Real-time flowchart rendering using Mermaid.js

## How It Works

### Architecture

The application uses a client-server architecture:

1. **Frontend (index.html)**
   - Built with HTML, JavaScript, and Tailwind CSS
   - Uses Mermaid.js for flowchart rendering
   - Provides a user-friendly interface for input and visualization
   - Handles flowchart interaction (zoom, pan, fullscreen)

2. **Backend (server.js)**
   - Node.js/Express server
   - Securely handles Gemini API calls
   - Proxies requests to protect API key
   - Processes and returns flowchart data

### Flowchart Generation Process

1. User enters a natural language description
2. Frontend sends the prompt to the backend server
3. Server formats the prompt and calls Gemini API
4. Gemini AI generates Mermaid.js syntax
5. Server returns the generated code
6. Frontend renders the flowchart using Mermaid.js

### Security

- API key is stored in `.env` file
- All Gemini API calls are made server-side
- No sensitive data exposed to the client
- Input validation on both frontend and backend

## Setup

### Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)
- Google Cloud account with Gemini API access

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Quantasteek/AIFlowchartGen
cd flowchart-generator
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```
GEMINI_API_KEY=your_gemini_api_key_here
```

4. Get your Gemini API key:
   - Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
   - Create a new API key
   - Copy the key to your `.env` file

5. Start the server:
```bash
npm start
```

6. Open your browser and navigate to:
```
http://localhost:3000
```

## Usage

1. Enter a natural language description of your flowchart in the text area
   Example: "Process of making coffee: Start, Grind beans, Brew, Add milk and sugar, Enjoy, End"

2. Click "Generate Flowchart" to create the flowchart

3. Use the controls to interact with the flowchart:
   - Zoom buttons (+/-) to adjust the view
   - Pan controls to navigate large flowcharts
   - Fullscreen button for a larger view
   - Copy button to get the Mermaid code

## Technologies Used

- **Frontend**:
  - HTML5
  - JavaScript (ES6+)
  - Tailwind CSS for styling
  - Mermaid.js for flowchart rendering

- **Backend**:
  - Node.js
  - Express.js
  - node-fetch for API calls
  - dotenv for environment variables

- **AI/API**:
  - Google Gemini AI API
  - Mermaid.js syntax generation

## Project Structure

```
flowchart-generator/
├── index.html          # Frontend application
├── server.js           # Backend server
├── package.json        # Project dependencies
├── .env               # Environment variables (API key)
└── README.md          # Project documentation
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Google Gemini AI for the natural language processing capabilities
- Mermaid.js for the flowchart rendering engine
- Tailwind CSS for the modern UI components 