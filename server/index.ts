import { join } from 'path';
import * as express from 'express';
import { urlencoded, json } from 'body-parser';

const app = express();
const port = 8888;

app.use(urlencoded({ extended: false }));
app.use(json());
app.use(express.static(join(__dirname, '../dist')));

app.all('/*', (req, res) => {
  res.sendFile('index.html', { root: __dirname + '/../dist' });
});

app.listen(port, () =>
  process.stdout.write(`App listening on port ${port}!\n`)
);
