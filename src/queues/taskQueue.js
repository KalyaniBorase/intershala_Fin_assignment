const Queue = require('bull');
const redisConfig = { redis: { host: '127.0.0.1', port: 6379 } };

const taskQueue = new Queue('taskQueue', redisConfig);

taskQueue.process(async (job) => {
    await require('../utils/logger').logTask(job.data.user_id);
});

exports.addToQueue = async (user_id) => {
    await taskQueue.add({ user_id });
};
