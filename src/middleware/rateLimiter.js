const { RateLimiterMemory } = require('rate-limiter-flexible');

const rateLimiter = new RateLimiterMemory({
    points: 20,
    duration: 60,
});

exports.rateLimiterMiddleware = async (req, res, next) => {
    try {
        await rateLimiter.consume(req.body.user_id);
        next();
    } catch (rej) {
        res.status(429).send('Too Many Requests');
    }
};
