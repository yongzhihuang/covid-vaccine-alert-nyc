const axios = require("axios");
const cheerio = require("cheerio");
const DiscordWebhook = require("webhook-discord");

// pick your own borough
const VACCINE_SITE = 'https://nycvaccinelist.com/area/Queens';

// Get your discord hook from a discord room.  For best effect, turn on ALL notifications for that channel
const DISCORD_HOOK = '';
const REFRESH_INTERVAL = 5000;

const discordHook = new DiscordWebhook.Webhook(DISCORD_HOOK);

async function fetchHTML(url) {
  const { data } = await axios.get(url);
  return cheerio.load(data);
}

async function start() {
    const $ = await fetchHTML(VACCINE_SITE);
    const availability = $('#locations .mt-6 strong').html();

    if (Number(availability) > 0) {        
        discordHook.info('Vaccine Bot', `**${availability}** locations are available for appointment: ${VACCINE_SITE}`);
    }
}

setInterval(async () => {
    await start();
}, REFRESH_INTERVAL);

