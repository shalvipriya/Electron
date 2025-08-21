const { app, BrowserWindow } = require("electron");
const path = require("path");

let win;

function createWindow() {
    win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: false,  // ⛔ Prevents Node.js APIs in renderer
            contextIsolation: true,  // 🛡️ Increases security
            preload: path.join(__dirname, "preload.js"),  // ✅ Use preload script for safe access
        },
    });

    win.loadFile("index.html");
}

app.whenReady().then(createWindow);
