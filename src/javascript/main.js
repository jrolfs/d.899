import electron from 'electron';
import { main } from 'electron-process';


const app = electron.app;

// Window URLs
const windowURL = `file://${__dirname}/windows/`;
const daemonURL = `${windowURL}/daemon/index.html`;

app.on('ready', () => main.createBackgroundProcess(daemonURL));
