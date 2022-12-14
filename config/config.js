// sendgrid key
exports.Sendgrid = process.env.SENDGRID_KEY;

// mongo database
exports.mongo = process.env.MONGO_DATABASE;

// jwt authentication
exports.accessToken = process.env.ACCESS_TOKEN_SECRET;
exports.refereshToken = process.env.REFRESH_TOKEN_SECRET;

exports.accessTokenLife = process.env.ACCESS_TOKEN_LIFE;
exports.refereshTokenLife = process.env.REFRESH_TOKEN_LIFE;

exports.redishost = process.env.REDIS_HOST;
exports.redisport = process.env.REDIS_PORT;
exports.redispassword = process.env.REDIS_PASSWORD;
// email password
// exports.email = process.env.EMAIL;
// exports.password = process.env.PASSWORD;
