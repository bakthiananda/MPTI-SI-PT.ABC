import express, { type Express, type Request, type Response } from 'express';

const app: Express = express();
const port = 3000;

app.get('/', (_: Request, res: Response) => {
    res.send('Hello MPTI');
});

app.listen(port, () => {
    console.log(`Sistem Informasi PT. ABC listening on port ${port}`)
});
