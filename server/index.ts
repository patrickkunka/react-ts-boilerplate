import * as cors from 'cors';
import * as express from 'express';
import * as fs from 'fs';
import * as path from 'path';

const ROOT_PATH = path.resolve(__dirname, '..');
const ASSETS_PATH = path.join(ROOT_PATH, 'assets');
const app = express();
const PORT = 3000;

app.use(cors({credentials: true, origin: true}));
app.get('/api/mock', (_, res) => res.json(mockData));

// tslint:disable-next-line:no-console
app.listen(PORT, () => console.log(`[server] listening on port ${PORT}!`));

const mockData = JSON.parse(
    fs.readFileSync(path.join(ASSETS_PATH, 'data.json')).toString()
);