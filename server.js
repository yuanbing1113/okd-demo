const path = require('path');
const express = require('express');
const app = express();
const port = 8080
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, function () {
    console.log('Node.js server started on port: ' + port);
});