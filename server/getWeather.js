const fetch = require("node-fetch");

const url='https://www.metaweather.com/api/location/2487956'

async function getWeather() {
let res = await fetch(url);
let result = await res.json();
return result
}
module.exports.getWeather = getWeather;
