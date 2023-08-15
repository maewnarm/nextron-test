import { app, screen } from "electron";
import serve from "electron-serve";
import { createWindow } from "./helpers";

const isProd: boolean = process.env.NODE_ENV === "production";

const [winWidth, winHeight] = [550, 250]; // [widht,height]

if (isProd) {
  serve({ directory: "app" });
} else {
  app.setPath("userData", `${app.getPath("userData")} (development)`);
}

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

  if (isProd) {
    await mainWindow.loadURL("app://./home.html");
  } else {
    const port = process.argv[2];
    await mainWindow.loadURL(`http://localhost:${port}/home`);
    mainWindow.webContents.openDevTools();
  }
})();

app.on("window-all-closed", () => {
  app.quit();
});
