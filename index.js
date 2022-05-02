const express = require('express');
const app = express();

app.get('/nome', (req, res) => {
	res.status(200).send('Marcelo Souza Silva');
});

app.listen(4000);
