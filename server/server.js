const express = require('express');
const path = require('path');
const app = express();
const mongoose = require('mongoose');
const PORT = 3000 || process.env.NODE_ENV;

mongoose.connect('mongodb+srv://mrcokwn1:Creedlfe4!@soloproject.orhp73s.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
  console.log('Connected to Database');
});



app.use(express.static(path.resolve(__dirname, "../build")));
app.get('/', (req, res)=>{
  res.sendFileSync(path.resolve(__dirname, './client/src/index.html'))
})
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));