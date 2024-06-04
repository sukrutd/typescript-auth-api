import config from 'config';
import express from 'express';
import connectToDatabase from './utils/connectToDatabase';

const host = config.get<string>('host') ?? 'localhost';
const port = config.get<number>('port') ?? 3000;

const app = express();

app.get('/', (req, res) => {
  res.send({ message: 'Hello API' });
});

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
  connectToDatabase();
});
