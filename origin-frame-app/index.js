const dotenv = require('dotenv');
const express = require('express');
const pino = require('express-pino-logger')();
const handlebars = require('express-handlebars');

// Load settings from the .env file
dotenv.config();

// Setup webapp.
const app = express();
app.use(pino);
app.set('view engine', 'hbs');
app.engine(
  'hbs',
  handlebars({
    extname: 'hbs',
  })
);

// Origin frame endpoint.
app.get('/frame', (req, res) => {
  req.log.info(`Rendering origin frame`);
  res.render('origin-frame', {
    layout: false,
    AUTH0_DOMAIN: process.env.AUTH0_DOMAIN,
    AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
    API_AUDIENCE: process.env.API_AUDIENCE,
    SCOPES: process.env.SCOPES,
  });
});

// Listen.
const port = process.env.PORT || 3000;
app.listen(port, () =>
  pino.logger.info(`Origin frame listening on http://localhost:${port}`)
);
