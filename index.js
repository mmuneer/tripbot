var express = require('express')
var app = express()
var msg = {
    "speech": "Hellow world.",
	"displayText": "Hellow world of text",
	"data": {},
	"contextOut": [],
	"source": "DuckDuckGo"
}

app.get('/', function (req, res) {
  console.log("get equest received")
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(msg));
})

app.post('/weather', function (req, res) {
  console.log("post equest received")
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(msg));
})
var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Example app listening on port 3000!')
})

