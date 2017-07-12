const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const path = require('path');
const url = require('url');

let mainWindow;

function createWindow() {
  //Create window
  mainWindow = new BrowserWindow({
    titleBarStyle: 'hidden',
    frame: false,
  });

  //Load index.html
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }));

  //Window closed function
  mainWindow.on('closed', function () {
    mainWindow = null;
  });
}

app.on('ready', createWindow);
