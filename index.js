const express = require("express");
const power = require("./app");

const app = express();

app.use(express.json())


app.post('/power', power)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

module.exports = app