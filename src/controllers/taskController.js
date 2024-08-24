const { addToQueue } = require('../queues/taskQueue');

exports.handleTask = async (req, res) => {
    const { user_id } = req.body;

    await addToQueue(user_id);
    res.status(202).send('Task added to the queue');
};
