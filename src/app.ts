import express from 'express';

import routes from './routes';

const app = express().disable('x-powered-by');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(routes);

export default app;
