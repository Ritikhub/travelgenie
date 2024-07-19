const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config(); // Add this line

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

app.post('/api/search', async (req, res) => {
  const { prompt } = req.body;

  try {
    const gptApiUrl = 'https://api.openai.com/v1/engines/davinci-codex/completions';
    const apiKey = process.env.OPENAI_API_KEY;  // Read from environment variable

    const response = await axios.post(
      gptApiUrl,
      {
        prompt: prompt,
        max_tokens: 100
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        }
      }
    );

    res.json({ response: response.data.choices[0].text });
  } catch (error) {
    console.error('Error fetching GPT response:', error);
    res.status(500).json({ error: 'Failed to fetch GPT response' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
