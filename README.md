# Animepahe Scraper API

This project provides a simple API to scrape streaming and download information for a specific anime episode from `animepahe.si`.

## Features

- Exposes a `POST /api/scrape` endpoint.
- Accepts an episode URL and returns:
  - The active server name (e.g., "kwik").
  - The direct `iframe` source URL for the video player.
  - A list of all available download links.
- Built with Express.js and Playwright.

## Installation

1.  **Clone the repository:**
    ```bash
    git clone <repository_url>
    cd <repository_directory>
    ```

2.  **Install dependencies:**
    Make sure you have Node.js installed. Then, run the following command to install the necessary packages:
    ```bash
    npm install
    ```

3.  **Install Playwright browsers:**
    Playwright requires browser binaries to be downloaded. Run the following command to install them:
    ```bash
    npx playwright install
    ```

## Usage

### 1. Start the Server

To start the API server, run the following command:

```bash
npm start
```

The server will start and listen on port 3000 (or the port specified by the `PORT` environment variable).

### 2. Scrape an Episode

To scrape an episode, send a `POST` request to the `/api/scrape` endpoint with a JSON body containing the `episodeUrl`.

#### Example using `curl`

```bash
curl -X POST http://localhost:3000/api/scrape \
-H "Content-Type: application/json" \
-d '{
  "episodeUrl": "https://animepahe.si/play/e66fcdab-21db-7066-3d18-b877a99d7891/d54d350827e6e780fb14c76ff47d734507cdd73c4e121f364aad67294a09a372"
}'
```

#### Example Response

```json
{
  "server": "kwik",
  "iframeSrc": "https://kwik.cx/e/H3QD3E8v93MF",
  "downloads": [
    {
      "text": "SubsPlease · 360p (33MB)",
      "url": "https://pahe.win/TSFPr"
    },
    {
      "text": "SubsPlease · 720p (75MB)",
      "url": "https://pahe.win/Nsljl"
    },
    {
      "text": "SubsPlease · 1080p (116MB)",
      "url": "https://pahe.win/SswkX"
    }
  ]
}
```
