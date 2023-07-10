const express = require('express');
const app = express();
const routes = require('./routes/index')

const port = process.env.PORT || 80;

app.use(express.json());

app.use("/", routes);

// Start the server
app.listen(port, localhost, () => {
    console.log('Server is running on port 80');
});