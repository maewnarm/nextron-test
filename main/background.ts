import { BrowserWindow, Menu, Tray, app, ipcMain, screen } from "electron";
import serve from "electron-serve";
import path from "path";
import { createWindow } from "./helpers";

const isProd: boolean = process.env.NODE_ENV === "production";

const [winWidth, winHeight] = [550, 250]; // [widht,height]

if (isProd) {
  serve({ directory: "app" });
} else {
  app.setPath("userData", `${app.getPath("userData")} (development)`);
}

let mainWindowId = null;

(async () => {
  await app.whenReady();
  const display = screen.getPrimaryDisplay();
  const { width, height } = display.bounds;
  console.log(width, height);

  const mainWindow = createWindow("main", {
    width: winWidth,
    height: winHeight,
    alwaysOnTop: true,
    titleBarStyle: "hidden",
    // focusable: false,
    autoHideMenuBar: true,
    x: width - winWidth,
    y: height - winHeight - 40,
  });
  mainWindowId = mainWindow.id;

  if (isProd) {
    await mainWindow.loadURL("app://./home.html");
  } else {
    const port = process.argv[2];
    await mainWindow.loadURL(`http://localhost:${port}/home`);
    mainWindow.webContents.openDevTools();
  }

  // tray icon
  let tray: Tray = null;
  tray = new Tray(path.join(__dirname, "/pe-dx-logo.ico"));
  tray.on("double-click", () => mainWindow.show());
  const trayMenu = Menu.buildFromTemplate([
    { label: "Show", type: "normal", click: () => mainWindow.show() },
    { label: "Minimize", type: "normal", click: () => mainWindow.hide() },
    { label: "Quit", type: "normal", click: () => app.quit() },
  ]);
  tray.setToolTip("EPD Indirect Timer");
  tray.setContextMenu(trayMenu);
})();

app.on("window-all-closed", () => {
  app.quit();
});

ipcMain.on("minimize", () => {
  BrowserWindow.fromId(mainWindowId).hide();
});
