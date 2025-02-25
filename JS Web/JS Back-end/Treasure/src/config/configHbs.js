const path = require('path');
const handlebars = require('express-handlebars');

function configHbs(app) {
  // Create an instance of express-handlebars with custom configuration
  const hbs = handlebars.create({
    extname: 'hbs', // The file extension for Handlebars files

  });

  // Register the Handlebars view engine
  app.engine('hbs', hbs.engine);
  app.set('view engine', 'hbs');
  app.set('views', path.join(__dirname, '../views'));

}

module.exports = { configHbs };
