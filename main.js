// const electron = require('electron');
const { app, BrowserWindow } = require('electron')

function createWindow () {   
  // 创建浏览器窗口
  let win = new BrowserWindow({
    width: 1024,
    height: 768,
    frame: false,
    transparent:true,
    titleBarStyle: 'hidden' ,
    webPreferences: {
      nodeIntegration: true
    }
  })
  // win.setIgnoreMouseEvents(true)
  win.webContents.openDevTools();
  // 加载index.html文件
  win.loadURL("http://localhost:8081/")
  // win.loadFile('dist/index.html')
}

app.on('ready', createWindow)