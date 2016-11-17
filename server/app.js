import express from 'express';
import path from 'path';
import users from './routes/users';

const app = express.Router();

app.get('/api**', (req, res) => {
  res.send('GET /api/foo');
});

app.use('/users', users);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

module.exports = app;
