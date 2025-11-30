const express = require('express');
const cors = require('cors');
const { scrapeEpisode } = require('./src/api/services/scraperService');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.post('/api/scrape', async (req, res) => {
  const { episodeUrl } = req.body;

  if (!episodeUrl) {
    return res.status(400).json({ error: 'episodeUrl is required' });
  }

  try {
    const data = await scrapeEpisode(episodeUrl);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
