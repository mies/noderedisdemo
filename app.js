var process = require("process");

var redis = require("redis");
var client = redis.createClient(6379, process.env.WERCKER_REDIS_IPADDRESS)
