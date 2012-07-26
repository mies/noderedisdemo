var redis = require('redis');
var process = require('process');

var client = redis.createClient(6379, process.env.WERCKER_REDIS_IPADDRESS)

exports.testSets = function(test) {
  client.sadd("some set", "mem 1");
  client.sadd("some set", "mem 2");
  client.sadd("some set", "mem 3");
  client.sadd("some set", "mem 4");
  client.smembers("missing set", function(err, reply) {
    if (err) {
      console.log(err);
    }
    console.log(reply);
  });
};
