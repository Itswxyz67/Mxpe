# Animepahe Episode Scraper

This is a lightweight web scraper built with Node.js and Playwright to extract a direct episode's streaming and download information from `animepahe.si`.

## Features

- Scrapes a specific anime episode page for:
  - The active server name (e.g., "kwik").
  - The direct `iframe` source URL for the video player.
  - A list of all available download links with their corresponding resolutions and file sizes.
- Simulates human-like behavior to reduce the risk of being blocked.

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

To run the scraper, you must provide the full URL of the episode's play page as a command-line argument.

```bash
node scraper.js <episode_url>
```

### Example

To scrape the details for a specific episode:

```bash
node scraper.js "https://animepahe.si/play/e66fcdab-21db-7066-3d18-b877a99d7891/d54d350827e6e780fb14c76ff47d734507cdd73c4e121f364aad67294a09a372"
```

The script will print the scraped data to the console.
