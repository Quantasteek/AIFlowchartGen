require('dotenv').config();
const express = require('express');
const path = require('path');
const fetch = require('node-fetch');
const app = express();
const port = 3000;

app.use(express.json());


app.use(express.static('./'));


app.post('/api/generate-flowchart', async (req, res) => {
    try {
        const { prompt } = req.body;
        
        if (!prompt) {
            return res.status(400).json({ error: 'Prompt is required' });
        }

        const chatPrompt = `You are a helpful assistant that generates Mermaid.js flowchart syntax from natural language descriptions.
        Strictly generate only the Mermaid syntax, without any additional text, explanations, or markdown fences (e.g., \`\`\`mermaid \`\`\` ).
        Ensure the Mermaid syntax starts with 'graph TD' (for Top-Down) or 'graph LR' (for Left-Right) and includes appropriate node IDs and labels.
        For example, if the prompt is "Process of making coffee: Start, Grind beans, Brew, Add milk and sugar, Enjoy, End.", you should return something like:
        graph TD
            A[Start] --> B(Grind beans);
            B --> C(Brew);
            C --> D(Add milk and sugar);
            D --> E[Enjoy];
            E --> F[End];

        Now, generate Mermaid syntax for the following: ${prompt}`;

        const chatHistory = [{ role: "user", parts: [{ text: chatPrompt }] }];
        const payload = { contents: chatHistory };
        
        const apiKey = process.env.GEMINI_API_KEY;
        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();

        if (result.candidates && result.candidates.length > 0 &&
            result.candidates[0].content && result.candidates[0].content.parts &&
            result.candidates[0].content.parts.length > 0) {
            const mermaidCode = result.candidates[0].content.parts[0].text.trim();
            res.json({ mermaidCode });
        } else {
            res.status(400).json({ error: 'No flowchart code generated' });
        }
    } catch (error) {
        console.error('Error calling Gemini API:', error);
        res.status(500).json({ error: 'Failed to generate flowchart' });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
}); 