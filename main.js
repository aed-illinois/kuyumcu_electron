const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 780,
    minWidth: 900,
    minHeight: 600,
    title: 'Kuyumcu Stok Yönetimi',
    icon: path.join(__dirname, 'icon.png'),
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
    },
    backgroundColor: '#F9F7F2',
  });

  win.loadFile('kuyumcu.html');

  // Remove default menu, keep only essential items
  const menu = Menu.buildFromTemplate([
    {
      label: 'Uygulama',
      submenu: [
        { label: 'Yenile', accelerator: 'F5', click: () => win.webContents.reload() },
        { type: 'separator' },
        { label: 'Çıkış', accelerator: 'Alt+F4', role: 'quit' }
      ]
    },
    {
      label: 'Görünüm',
      submenu: [
        { label: 'Tam Ekran', accelerator: 'F11', role: 'togglefullscreen' },
        { label: 'Yakınlaştır', accelerator: 'CmdOrCtrl+=', role: 'zoomin' },
        { label: 'Uzaklaştır', accelerator: 'CmdOrCtrl+-', role: 'zoomout' },
        { label: 'Sıfırla', accelerator: 'CmdOrCtrl+0', role: 'resetzoom' },
      ]
    }
  ]);
  Menu.setApplicationMenu(menu);
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
