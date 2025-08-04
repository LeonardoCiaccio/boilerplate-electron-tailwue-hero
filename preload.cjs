const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  // Example: ipcRenderer.send('set-title', title);
  // setTitle: (title) => ipcRenderer.send('set-title', title),
});