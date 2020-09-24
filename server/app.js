const { response } = require('express');
const express = require('express')
const fetch = require("node-fetch");
var cors = require('cors')
const getWeather = require("./getWeather")
const port = 5000;
var app = express();

app.use(express.static('public'))
app.use(cors())


app.get(`/api/weather`, async (request, response, next) => {
  weather  = await getWeather.getWeather(response)
  response.json(weather)
});

app.listen(port, () => {
  console.log(`Good job, the Test App is now running.`)
  console.log(`Good luck! We know you got this!`)
})


