const express = require('express');
const bodyParser = require('body-parser');
const taskController = require('./controllers/taskController');

const app = express();
app.use(bodyParser.json());

app.post('/api/v1/task', taskController.handleTask);

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
