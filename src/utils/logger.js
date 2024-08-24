const winston = require('winston');
const fs = require('fs');
const path = require('path');

const logFilePath = path.join(__dirname, '../logs/task.log');

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
        new winston.transports.File({ filename: logFilePath })
    ],
});

exports.logTask = async (user_id) => {
    const logMessage = `${user_id} - task completed at - ${Date.now()}`;
    console.log(logMessage);
    logger.info(logMessage);
};
