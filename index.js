const { app, BrowserWindow } = require("electron");

let win;
app.whenReady().then(() => {
  win = new BrowserWindow({
    width: 800,
    height: 600,
  });
  win.loadURL("https://www.baidu.com");
});
