const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/',(req, res) => {
    return res.render('getStart');
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is runing on port ${PORT}`);
});