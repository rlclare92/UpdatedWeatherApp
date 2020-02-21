const hbs = require('express-handlebars');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const getWeather = require('./lib/getWeather');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

app.engine('.hbs', hbs({
    defaultLayout: 'layout',
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

app.get('/', (req, res) => {
    // let data = await getWeather();
    //     console.log(data);

    // let temp = data.main.temp;
    // let pressure = data.main.pressure;
    // let humidity = data.main.humidity;
    // let tempmin = data.main.temp_min;
    // let tempmax = data.main.temp_max;
    // let visibility = data.main.visibility;
    // let main = data.weather[0].main;
    // let description = data.weather[0].description

    res.render('index');
});

app.post('/', async (req, res) => {
    let location = req.body.location;
    let countryCode = req.body.countryCode;
    console.log(location);

    let data = await getWeather(location, countryCode);
    console.log(data);


    let temp = data.main.temp;
    let humidity = data.main.humidity;

    res.render('index', { data: { temp, humidity } });
});

app.listen(3001, () => {
    console.log('server listening on port 3001');
});

