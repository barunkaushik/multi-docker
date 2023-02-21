const process = require("process");

module.exports = {
    redisHost: process.env.REDIS_HOST,
    redisPOrt: process.env.REDIS_PORT
};