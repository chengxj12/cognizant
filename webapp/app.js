const express = require('express')
const redis = require('redis')

const app = express()
const client = redis.createClient({host : 'redis', port : 30001})

client.on('ready',function() {
 console.log("Redis is ready");
});

client.on('error',function() {
 console.log("Failed to connect Redis");
});

client.set('count',0);

app.get('/', function (req, res) {
 	client.incr('count');
	client.get('count', function(err, count){
		res.send("This is the " + count + " visitor")
	})

})

app.listen(8000, function(){
	console.log('Listen on port 8000')
})