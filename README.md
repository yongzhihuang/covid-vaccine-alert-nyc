## COVID Vaccine Alert NYC
This crawler looks at the website https://nycvaccinelist.com/ and checks its page for the number of availability for vaccines near you


## Development
`node index.js`

## Set up
Requires a Discord webhook token in order to pipe the message to your discord room.  I recommend setting this up as a daemon (cronjob or PM2) and run the script in memory continously.

## Bugs
This is subject to break if the website https://nycvaccinelist.com/ decides to update its HTML, so it's best to periodically check if the script is working properly.