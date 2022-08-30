const express = require('express');
const path = require('path');
const app = express();
const mongoose = require('mongoose');

app.use(express.static('index.html'));

app.listen(3000, () => console.log(`Listening on PORT: ${PORT}`));