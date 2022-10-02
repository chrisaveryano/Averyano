const express = require('express');
const UAParser = require('ua-parser-js');
const path = require('path');

const app = express();
const port = 3000;

app.use((req, res, next) => {
  const ua = UAParser(req.headers['user-agent']);

  res.locals.isDesktop = ua.device.type === undefined;
  res.locals.isPhone = ua.device.type === 'mobile';
  res.locals.isTablet = ua.device.type === 'tablet';
  console.log(res.locals.isDesktop, res.locals.isPhone, res.locals.isTablet);
  next();
});

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.locals.baseDir = app.get('views');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('pages/home/home');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
